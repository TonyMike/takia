import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth

export const config = {
  runtime: 'edge', // for Edge API Routes only
  unstable_allowDynamic: [
    // '/lib/utils.js', // allows a single file
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}
