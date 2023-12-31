import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismaDB from "../lib/prismadb";

export async function getSession(req, res) {
  if (req && res) {
    return await getServerSession(req, res, authOptions);
  }

  return await getServerSession(authOptions);
}

export default async function getCurrentUser(req, res) {
  try {
    const session = await getSession(req, res);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prismaDB.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
