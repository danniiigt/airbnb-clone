import prismaDB from "@/app/db/prismadb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prismaDB.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error ocurred while creating the user" });
  }
}
