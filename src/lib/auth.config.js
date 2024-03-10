import { connectToDb } from "./utils"

export const authConfig = {
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { User } = await connectToDb()
        const dbUser = await User.findOne({ email: user.email })
        token.user = dbUser
      }
      return token
    },

    async session({ session, token }) {
      session.user = token.user
      return session
    },
    authorized({ auth, request }) {
      console.log("🚀 ~ authorized ~ auth:", auth)

      const user = auth?.user;
      const isAdmin = request.nextUrl?.pathname.startsWith('/admin');
      const isDashboardPage = request.nextUrl?.pathname.startsWith('/dashboard')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register')

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isAdmin && !user?.isAdmin) {
        console.log('user is not admin')
        return false
      }

      // ONLY AUTHENTICATED USERS CAN ACCESS THE dashboard PAGE
      if (isDashboardPage && !user) {
        return false
      }

      // ONLY AUTHENTICATED USERS CAN ACCESS THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl))
      }

      // ONLY AUTHENTICATED USERS CAN ACCESS THE REGISTER PAGE
      if (isOnRegisterPage && user) {
        return Response.redirect(new URL("/", request.nextUrl))
      }
      // Existing authorized logic

      return true
    }
  }
}