export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      // console.log('token jwt from auth.config ', token)
      if (user) {
        token.id = user.id,
          token.isAdmin = user?._doc?.isAdmin
      }
      return token
    },
    async session({ session, token }) {
      // console.log('session from auth.config ', session)
      // console.log('token session from auth.config ', token)

      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
      return session
    },
    authorized({ auth, request }) {
      const user = auth?.user
      const isAdmin = request.nextUrl?.pathname.startsWith('/admin')
      const isDashboardPage = request.nextUrl?.pathname.startsWith('/dashboard')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register')

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isAdmin && !user?.isAdmin) {
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

      return true
    }
  }
}