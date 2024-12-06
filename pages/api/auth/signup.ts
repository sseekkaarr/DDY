import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers, addUser } from "./usersData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Validasi input
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

    const users = getUsers();

    // Cek apakah email sudah terdaftar
    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // Tambahkan user baru ke database dummy
    const newUser = { id: users.length + 1, name, email, password };
    addUser(newUser);

    return res.status(201).json({ message: "User registered successfully." });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
