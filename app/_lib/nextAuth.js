import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// Configuration for NextAuth
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  // Callbacks is The Functions That called Before Enter Each Route To Check Some Conditions
  callbacks: {
    // Used With Middleware File
    authorized({ auth, request }) {
      // if returned true, user is authorized >> !! is A Trick To Turn A Value Into A Boolean
      return !!auth?.user;
    },

    // Doing Some Server Side Logic When User is signed in
    async signIn({ user, account, profile }) {
      try {
        // check if guest exists
        const existingGuest = await getGuest(user.email);
        // if There is No Guest , We Create One in Db
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    // Mutate Session Object That Returns From auth Function , By Adding GuestId To Session After Getting it from DB
    async session({ session, user }) {
      // add guestId to session From Db
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  // Define Custom Pages instead of Auth.js Default Page
  pages: {
    signIn: "/login",
  },
};

export const {
  auth, // To Get Session
  signIn, // Server Action Used on Login Page
  signOut, // Server Action Used on Logout Button
  handlers: { GET, POST }, // used in @/api/auth/[...nextAuth]/route.js (( boilerplate ))
} = NextAuth(authConfig);
