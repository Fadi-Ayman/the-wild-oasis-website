// Used to Protect Routes With NextAuth , To Protect Specified Pages in Matcher if user is not authorized , And Authorized Condeition is Wrote in (app\_lib\nextAuth.js) in authorized async function , as if it is returned true So The User Is Authorized

import { auth } from "./app/_lib/nextAuth";

export const middleware = auth;

export const config = {
  matcher: ['/account'],
}