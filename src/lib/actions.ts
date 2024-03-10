"use server"
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from 'cloudinary';
import { redirect } from 'next/navigation';
import { signIn, signOut } from "./auth";
import { connectToDb } from "./utils";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const User=getConnection().model('User')

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
      return { success: 'user created' }
    }
  } catch (error) {
    console.log('something went wrong', error)
    // throw new Error('Something went wrong')
  }
}

export const loginUser = async (formData) => {
  const { email, password } = Object.fromEntries(formData)
  // console.log({email,password},'login user action')
  try {
    await signIn('credentials', { email, password })
    redirect('/')

  } catch (error) {
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid email address or password' }
    }
  }
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}
export const handleLogout = async () => {
  await signOut()
}

// export const beforeSend = (event) => {
//   if (event.url.includes('/admin')) {
//     return null;
//   }
//   return event;
// }


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
  const { category, title, description, price, condition, state, school, files } = Object.fromEntries(formData);
  console.log({
    category,
    title,
    description,
    price,
    condition,
    state,
    school,
    files
  });


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
}


