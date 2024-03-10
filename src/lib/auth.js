import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
// import { connectToDb } from "./utils";
// const login = async (credentials) => {
//   try {
//     connectToDb();
//     const user = await User.findOne({ email: credentials.email });
//     // console.log(`Use.findOne ${user}`)

//     if (!user || !user.isAdmin) {
//       throw new Error("Wrong credentials!");
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );

//     if (!isPasswordCorrect) throw new Error("Wrong credentials!");

//     return user;
//   } catch (err) {
//     //  console.log(err);
//     throw new Error("Failed to login!");
//   }
// };

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
    // CredentialsProvider({
    //   async authorize(credentials) {
    //     try {
    //       const user = await login(credentials)
    //       console.log("🚀 ~ authorize ~ user:", user)
    //       return user
    //     } catch (error) {
    //       return null
    //     }
    //   }

    // })
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("🚀 ~ signIn ~ credentials:", credentials)
      // console.log("🚀 ~ signIn ~ user:", user)

      if (account.provider === 'google') {
        // const conn = connectToDb();
        // try {
        // //  const User = conn.model('User')
        //   const e_user = await models.User.findOne({ email: profile.email });
        //   let role = false;
        //   if (!e_user) {
        //     if (profile.email === 'tee.jhay1@gmail.com') {
        //       role = true
        //     }
        //     const new_user = await models.User.create({
        //       firstName: profile.given_name,
        //       lastName: profile.family_name,
        //       email: profile.email,
        //       profile_picture: profile.picture,
        //       isAdmin: role
        //     })
        //     console.log('User created')
        //     await new_user.save();
        //     return new_user
        //   } else {
        //     return e_user
        //   }
        // } catch (error) {
        //   console.log('something went wrong', error)
        //   return false
        // }
      }
      return true
    },
    ...authConfig.callbacks
  }

})


