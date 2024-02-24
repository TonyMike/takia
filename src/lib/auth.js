import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { authConfig } from "./auth.config";
import { User } from "./models";
import { connectToDb } from "./utils";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });
    // console.log(`Use.findOne ${user}`)

    if (!user || !user.isAdmin) {
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    console.log(`login: ${user}`)
    return user;
  } catch (err) {
    //  console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('user from signIn', user)
      if (account.provider === 'google') {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const user = await User.create({
              firstName: profile.given_name,
              lastName: profile.family_name,
              email: profile.email,
              image: profile.picture,
            })
            await user.save();
            console.log('User created')
          } else {
            console.log('user already exist')
            return user
          }
        } catch (error) {
          console.log('something went wrong', error)
          return false
        }
      }
      // console.log(profile)
      return true
    },
    ...authConfig.callbacks
  }
})