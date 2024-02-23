"use server"
import { signIn, signOut } from "./auth"
import { User } from "./models"
import { connectToDb } from "./utils"


export const registerUser = async (formData) => {
  const { firstName, lastName, email, password } = Object.fromEntries(formData)
  console.log(fullName, email, password)
  try {
    connectToDb()
    const exist = await User.findOne({ email })
    if (exist) {
      // console.log('user  already exist')
      throw new Error('User with this email already exist')
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    })
    await user.save()
    return { success: 'user created' }
  } catch (error) {
    console.log('something went wrong', error)
    // throw new Error('Something went wrong')
  }
}

export const loginUser = async (formData) => {
  const { username, password } = Object.fromEntries(formData)
  try {
    const user = await User.findOne({ username })

  } catch (error) {

  }
}

export const handleGoogleLogin = async () => {
  await signIn("google")
}
export const handleLogout = async () => {
  await signOut({ redirectTo: 'http://localhost:3000/login' })
}