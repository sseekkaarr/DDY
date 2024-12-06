import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUsers } from "./usersData"; // Import database dummy

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = getUsers();

        // Validasi user berdasarkan email dan password
        const user = users.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          // Return user object jika ditemukan
          return { id: String(user.id), name: user.name, email: user.email }; // Pastikan id berupa string
        }

        // Return null jika user tidak ditemukan
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
  pages: {
    signIn: "/login", // Redirect ke halaman login
  },
};

export default NextAuth(authOptions);
