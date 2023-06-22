import prismaDB from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  const currentUser = await getCurrentUser(req, res);

  if (!currentUser) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    await prismaDB.listing.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ message: "Listing deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
