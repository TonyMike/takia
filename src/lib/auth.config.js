export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log('token',token)
      // console.log('user from auth.config.js', user)
      // console.log('account', account)
      if (user) {
        token.id = user.id,
          token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({ session, token }) {
      // console.log('session from auth.config.js', token)
      if (token) {
        console.log(token.isAdmin)
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
      return session
    },
    authorized({ auth, request }) {
      // console.log('authorized from auth.config.js', auth)
      const user = auth?.user
      const isAdmin = request.nextUrl?.pathname.startsWith('/admin')
      const isDashboardPage = request.nextUrl?.pathname.startsWith('/dashboard')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register')
      // console.log('auth from auth.config.js', auth)

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