import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import Google from "next-auth/providers/google";
import { UserProps } from "../@types/types";
import { authConfig } from "./auth.config";
// import { User } from "./models";
import { connectDb } from "./utils";
import { getUserModel, initializeModels } from "./models";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {

        // const { User } = await connectToDb()
        await connectDb()
        initializeModels();

        // Access the User model
        const User = getUserModel();
        let user: UserProps | null = await User.findOne({ email: credentials.email })

        if (!user) throw new Error('user not found in db')
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect) throw new Error('invalid credentials')

        return user
        // try {
        //   // const user = await login(credentials)
        //   console.log("🚀 ~ authorize ~ user:", user)
        //   return user
        // } catch (error) {
        //   console.log('auth credentials failed')
        // }
      }

    })
  ],

  callbacks: {
    //@ts-ignore
    async signIn({ account, profile, }) {

      if (account.provider === 'google') {
        // const { User } = await connectToDb()
        await connectDb()
        initializeModels();

        // Access the User model
        const User = getUserModel();
        try {
          const e_user: UserProps | null = await User.findOne({ email: profile.email }).maxTimeMS(60000)
          let role = false;

          if (!e_user) {
            if (profile.email === 'tee.jhay1@gmail.com') {
              role = true
            }

            const new_user = await User.create({
              firstName: profile.given_name,
              lastName: profile.family_name,
              email: profile.email,
              profile_picture: profile.picture,
              isAdmin: role,
              isGoogleUser: true
            })
            console.log('User created')
            await new_user.save();
            return new_user
          } else {
            return e_user
          }
        } catch (error) {
          console.log('something went wrong', error)
          return false
        }
      }
      return true
    },
    ...authConfig.callbacks
  }

})


