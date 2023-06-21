import prismaDB from "@/app/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const currentUser = await getCurrentUser(req, res);

  const {
    category,
    location,
    guestCount,
    roomCount,
    bathRoomCount,
    imageSrc,
    price,
    title,
    description,
  } = req.body;

  if (
    !category ||
    !location ||
    !guestCount ||
    !roomCount ||
    !bathRoomCount ||
    !imageSrc ||
    !price ||
    !title ||
    !description ||
    !currentUser
  ) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const newListing = await prismaDB.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount: bathRoomCount,
        guestCount,
        locationValue: location.value,
        userId: currentUser.id,
        price,
      },
    });

    return res.status(200).json({ message: "Listing created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
