import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth

export const config = {
  unstable_allowDynamic: [
    '/node_modules/mongoose/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}
