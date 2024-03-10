import { connectToDb } from "./utils"

export const authConfig = {
  providers: [],
  callbacks: {
    async session({ session, token }) {
        // connectToDb()
      //   const user = await User.findOne({ email: session.user.email })
      //   session.user.id = user._id
      //   session.firstName = user.firstName;
      //   session.lastName = user.lastName;
      //   session.user.isAdmin = user.isAdmin;
      //   console.log(session)
      //   return session
      // } catch (error) {
      //   throw new Error('Session callback failed')
      // } // try {
      //
      return session
      // try {
      //   if (token) {
      //     session.user = session.user || {};
      //     session.user.id = token.id;
      //     session.user.isAdmin = token.isAdmin;
      //   }
      //   return session;
      // } catch (error) {
      //   console.error(error);
      //   throw new Error('Session callback failed');
      // }
    },

    async jwt({ token, user }) {
      // console.log("🚀 ~ jwt ~ user:", user)
      // console.log("🚀 ~ jwt ~ token:", token)
      return token
      // try {
      //   if (user) {
      //     token.id = user.id;
      //     token.isAdmin = user?.isAdmin;
      //   }
      //   return token;
      // } catch (error) {
      //   console.error(error);
      //   throw new Error('JWT callback failed');
      // }
    },



    authorized({ auth, request }) {
      // console.log("🚀 ~ authorized ~ auth user:", auth?.user)
      // console.log(auth,'authorized auth')

      // try {
      //   if (auth?.user) {
      //     const user = auth.user;
      //     const isAdmin = request.nextUrl?.pathname.startsWith('/admin');
      //     const isDashboardPage = request.nextUrl?.pathname.startsWith('/dashboard')
      //     const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      //     const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register')

      //     // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      //     if (isAdmin && !user?.isAdmin) {
      //       console.log('user is not admin')
      //       return false
      //     }

      //     // ONLY AUTHENTICATED USERS CAN ACCESS THE dashboard PAGE
      //     if (isDashboardPage && !user) {
      //       return false
      //     }

      //     // ONLY AUTHENTICATED USERS CAN ACCESS THE LOGIN PAGE
      //     if (isOnLoginPage && user) {
      //       return Response.redirect(new URL("/", request.nextUrl))
      //     }

      //     // ONLY AUTHENTICATED USERS CAN ACCESS THE REGISTER PAGE
      //     if (isOnRegisterPage && user) {
      //       return Response.redirect(new URL("/", request.nextUrl))
      //     }
      //     // Existing authorized logic

      //   }
      //   return true;
      // } catch (error) {
      //   console.error(error);
      //   return false;
      // }

      // console.log(auth?.user?.isAdmin)


      // const user = auth?.user
      // const isAdmin = request.nextUrl?.pathname.startsWith('/admin')
      // const isDashboardPage = request.nextUrl?.pathname.startsWith('/dashboard')
      // const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      // const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register')

      // // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      // if (isAdmin && !user?.isAdmin) {
      //   return false
      // }

      // // ONLY AUTHENTICATED USERS CAN ACCESS THE dashboard PAGE
      // if (isDashboardPage && !user) {
      //   return false
      // }

      // // ONLY AUTHENTICATED USERS CAN ACCESS THE LOGIN PAGE
      // if (isOnLoginPage && user) {
      //   return Response.redirect(new URL("/", request.nextUrl))
      // }

      // // ONLY AUTHENTICATED USERS CAN ACCESS THE REGISTER PAGE
      // if (isOnRegisterPage && user) {
      //   return Response.redirect(new URL("/", request.nextUrl))
      // }

      return true

    }
  }
}