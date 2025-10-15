import db from "../lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
// import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Enter Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials: any) {
        // Do the database checks and validations here
        const username = credentials.username;
        const password = credentials.password;

        // This is supposed to be returned by the database
        return {
          id: "user1",
          name: "Ankit",
          userId: "ankit123",
          email: "ankit@gmail.com",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  //   pages : {
  //     signIn : "/signin"
  //   }
};
