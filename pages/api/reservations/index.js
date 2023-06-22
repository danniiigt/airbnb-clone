import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaDB from "@/app/lib/prismadb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const currentUser = await getCurrentUser(req, res);

  if (!currentUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { totalPrice, startDate, endDate, listingId } = req.body;

  if (!totalPrice || !startDate || !endDate || !listingId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const listingAndReservation = await prismaDB.listing.update({
      where: {
        id: listingId,
      },

      data: {
        reservations: {
          create: {
            totalPrice,
            startDate,
            endDate,
            userId: currentUser.id,
          },
        },
      },
    });

    return res.status(200).json({
      message: "Reservation created successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "An error ocurred while creating the reservation" });
  }
}
