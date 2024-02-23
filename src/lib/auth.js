import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { User } from "./models";
import { connectToDb } from "./utils";
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
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
          } else {
            return user
          }
        } catch (error) {
          console.log('something went wrong', error)
          return false
        }
      }
      // console.log(profile)
      return true
    }
  }
})