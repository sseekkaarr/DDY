import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let { name, email, password } = req.body;

    // Tambahkan parser manual jika diperlukan
    if (typeof req.body === "string") {
      try {
        const parsedBody = JSON.parse(req.body);
        name = parsedBody.name;
        email = parsedBody.email;
        password = parsedBody.password;
      } catch (error) {
        console.error("JSON parsing error:", error);
        return res.status(400).json({ message: "Invalid JSON format." });
      }
    }

    console.log("Parsed Request Body:", { name, email, password });

    // Validasi Input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    try {
      // Cek apakah email sudah ada
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ message: "Email is already registered." });
      }

      // Hash password sebelum disimpan
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Simpan user baru ke database
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return res.status(201).json({ message: "User registered successfully.", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
