"use server"
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from 'cloudinary';
import { auth, signIn, signOut } from "./auth";
import { connectToDb } from "./utils";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const registerUser = async (formData) => {
  const { firstName, lastName, email, password } = Object.fromEntries(formData)
  try {
    const { User } = await connectToDb()

    const exist = await User.findOne({ email })
    if (exist) {
      throw new Error('User with this email already exist')
    } else {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
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
  // const { User } = await connectToDb()

  // let user = await User.findOne({ email: email })

  // if (!user) return { message: 'user not found' }
  // const isPasswordCorrect = await bcrypt.compare(
  //   password,
  //   user.password
  // );
  // if (!isPasswordCorrect) console.log('password incorrect')
  await signIn('credentials', { email, password })
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}
export const handleLogout = async () => {
  await signOut()
}



export const uploadImage = async (formData) => {
  const imageFile = formData.get('file') as File
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
  //@ts-ignore
  console.log(imageResult.secure_url);

}

export const handlePostAds = async (formData) => {
  const { User, Product } = await connectToDb()

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

    const getUser = await User.findOne({ email })
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
const deleteImageByUrl = async (imageUrl) => {
  imageUrl = 'https://res.cloudinary.com/takia/image/upload/v1710154844/ejof4lalcbr2ju4ocpzb.png'
  const parts = imageUrl.split('/');
  const filename = parts.pop(); // Get the last part of the URL, which is the filename
  const publicId = filename.split('.')[0];

  try {
    const result = await cloudinary.uploader.destroy('ejof4lalcbr2ju4ocpz');
    console.log('Image deleted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

export const updateUserProfile = async (formData) => {
  const { file, email, firstName, lastName, whatsapp, businessName, phone } = Object.fromEntries(formData)
  console.log({ file, email, firstName, lastName, whatsapp, businessName, phone });
}

// Example usage:
// const imageUrlToDelete = 'https://res.cloudinary.com/your_cloud_name/image/upload/image_public_id.jpg';
// deleteImageByUrl(imageUrlToDelete);
//! to update product
  // const {title, description, category, price} = Object.fromEntries(formData);

  // try{
  //   await User.findOneAndUpdate({_id: userId}, {
  //     $push: {
  //       ads: {
  //         title,
  //         description,
  //         category,
  //         price,
  //         image: imageResult.secure_url
  //       }
  //     }
  //   });

  //   return {success: "Ad posted successfully"};

  // }catch(error){
  //   return {error: "Error posting ad"};
  // }



