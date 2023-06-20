import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaDB from "@/app/lib/prismadb";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prismaDB),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const user = await prismaDB.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          return null;
        }

        const isValid = await bcrypt.compareSync(
          credentials.password,
          user.hashedPassword
        );

        if (!isValid) {
          return null;
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth({
  ...authOptions,
});
