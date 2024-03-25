"use server"
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from "next/cache";
import { UserProps } from "../@types/types";
import { auth, signIn, signOut } from "./auth";
import { getProductModel, getUserModel, initializeModels, initializeProductModel, } from "./models";
import { connectDb } from "./utils";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const deleteImageByUrl = async (imageUrl: string) => {
  const parts = imageUrl.split('/');
  const filename = parts.pop(); // Get the last part of the URL, which is the filename
  const publicId = filename.split('.')[0];

  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log('Image deleted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

export const registerUser = async (formData) => {
  const { firstName, lastName, email, password, phone } = Object.fromEntries(formData)
  try {
    await connectDb()
    initializeModels();

    // Access the User model
    const User = getUserModel();

    const exist: UserProps | null = await User.findOne({ email })
    if (exist) {
      throw new Error('User with this email already exist')
    } else {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phoneNumber: phone,
      })
      await user.save()
      console.log('user saved')
    }
  } catch (error) {
    console.log('something went wrong', error)
    // throw new Error('Something went wrong')
  }

}

export const loginUser = async (formData) => {
  const { email, password } = Object.fromEntries(formData)

  await signIn('credentials', { email, password })
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}
export const handleLogout = async () => {
  await signOut()
}



const uploadImage = async (file) => {
  const imageFile = file
  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  let imageResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          reject(error);
          return {
            error: 'Error uploading image: ' + error.message,
          };
        } else {
          resolve(result);
          return {
            success: 'Image uploaded successfully',
          };
        }
      }
    ).end(buffer);
  });
  // @ts-ignore
  console.log(imageResult.secure_url);
  // @ts-ignore
  return imageResult.secure_url;

}

export const handlePostAds = async (formData) => {
  await connectDb()
  initializeProductModel();

  // Access the User model
  const Product = getProductModel()

  const { category, title, description, price, condition, state, school, negotiable } = Object.fromEntries(formData);
  const session = await auth()
  const email = session.user.email
  const genSlug = title.replaceAll(' ', '-')
  const imageFiles = formData.getAll('files'); // Assuming 'files' is the name of the form field for multiple file uploads

  // Map each image file to its corresponding upload promise
  const uploadPromises = imageFiles.map(async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.secure_url); // Resolve with the secure URL of the uploaded image
          }
        }
      ).end(buffer);
    });
  });

  try {
    //@ts-ignore
    const getUser: UserProps | null = await User.findById({ _id: session.user._id.toString() })
    const userId = getUser?._id.toString()
    const userInfo = {
      phoneNo: getUser.phoneNumber,
      whatsapp: getUser.whatsapp,
      profile_picture: getUser.profile_picture,
      businessName: getUser.businessName
    }
    // Wait for all uploads to complete
    const uploadResults = await Promise.all(uploadPromises);
    const newProduct = await Product.create({
      category,
      title,
      description,
      price,
      condition,
      state,
      school,
      userId,
      userInfo,
      negotiable,
      slug: genSlug,
      images: uploadResults
    })
    await newProduct.save()
    console.log('product saved successfully')

    // console.log('All images uploaded successfully:', uploadResults);
    // return uploadResults; // Return an array of secure URLs for uploaded images
  } catch (error) {
    console.error('Error uploading images:', error);
    throw error; // Throw the error to be caught by the caller
  }

}


export async function updateUserProfile(formData) {
  "use server"
  const { file, email, firstName, lastName, whatsapp, businessName, phone } = Object.fromEntries(formData)
  console.log({
    file, email, firstName, lastName, whatsapp, businessName, phone
  })
  // const { User } = await connectToDb()
  await connectDb()
  initializeModels();

  // Access the User model
  const User = getUserModel();
  const session = await auth()
  //@ts-ignore
  const userId = session.user._id.toString()
  const getUser: UserProps | null = await User.findById({ _id: userId }).maxTimeMS(10000)
  let image = undefined


  if (file.size && getUser.profile_picture.includes('googleusercontent')) {
    image = await uploadImage(file)
    console.log('image uploaded and removed the google img', image)

  }
  if (file.size && !getUser.profile_picture.includes('googleusercontent')) {
    if (getUser.profile_picture) {
      const d_img = await deleteImageByUrl(getUser.profile_picture)
      console.log('image deleted', d_img)
    }
    image = await uploadImage(file)
    console.log('image uploaded new image', image)

  }
  const updateUser = await User.findByIdAndUpdate({ _id: userId }, { firstName, lastName, email, whatsapp, businessName, phoneNumber: phone, profile_picture: image }, { new: true })
  console.log('update user profile', updateUser)
  await updateUser.save()

  revalidatePath('/dashboard')
}



export const updateUserPassword = async (formData) => {
  const { oldPassword, newPassword } = Object.fromEntries(formData);

  const session = await auth()
  //@ts-ignore
  const userId = session.user._id.toString()
  // const { User } = await connectToDb();
  await connectDb();
  initializeModels();
  const User = getUserModel();
  const user: UserProps | null = await User.findById({ _id: userId });

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    throw new Error('password');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  const updatedUser = await User.findByIdAndUpdate(
    { _id: userId }, // Match user by email and old hashed password
    { password: hashedPassword }, // Update password to new hashed password
    { new: true } // Return the updated document
  );
  await updatedUser.save()
  return {
    message: 'Password updated successfully'
  }
}

export const searchProduct = async ({ query }) => {

  await connectDb();
  initializeProductModel();
  const Product = getProductModel()

  // if (!query.trim()) {
  //   console.log('No search query provided');
  //   return
  // }

  try {
    const findProductBySearchQuery = await Product.aggregate([
      {
        $match: {
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } },
            { school: { $regex: query, $options: 'i' } },
            { price: { $regex: query, $options: 'i' } },
            { condition: { $regex: query, $options: 'i' } },
          ]
        }
      }
    ]);
    if (!findProductBySearchQuery.length) {
      console.log('No products found for query:', query);
      return false
    }
    return findProductBySearchQuery
  } catch (e) {
    console.error('Error searching products:', e);
    return false
  }



}