"use server"
import bcrypt from "bcryptjs"
import { signIn, signOut } from "./auth"
import { User } from "./models"
import { connectToDb } from "./utils"


export const registerUser = async (formData) => {
  const { firstName, lastName, email, password } = Object.fromEntries(formData)
  try {
    connectToDb()
    const exist = await User.findOne({ email })
    if (exist) {
      // console.log('user  already exist')
      // throw new Error('User with this email already exist')
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
  try {
    await signIn('credentials', { email, password })
    return { success: 'login  successful ' }

  } catch (error) {
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid email address or password' }
    }
    throw error
  }
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}
export const handleLogout = async () => {
  await signOut({ redirectUrl: '/' })

}

export const beforeSend = (event) => {
  if (event.url.includes('/admin')) {
    return null;
  }
  return event;
}
