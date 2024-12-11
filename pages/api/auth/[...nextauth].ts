import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Cari pengguna berdasarkan email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Validasi password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          // Jika valid, return data user
          return { id: String(user.id), name: user.name, email: user.email };
        }

        // Jika tidak valid, return null
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Gunakan JWT untuk menyimpan sesi
  },
  jwt: {
    secret: process.env.JWT_SECRET || "default_secret", // Gunakan secret dari environment
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string; // Pastikan id berupa string
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string, // Pastikan id berupa string
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Redirect ke halaman login
  },
};

export default NextAuth(authOptions);