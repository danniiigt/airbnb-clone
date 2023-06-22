import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaDB from "@/app/lib/prismadb";

export default async function handler(req, res) {
  switch (req.method) {
    case "DELETE":
      handleDeleteReservation(req, res);

      break;

    default:
      break;
  }
}

const handleDeleteReservation = async (req, res) => {
  const { id } = req.query;
  const user = await getCurrentUser(req, res);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const reservation = await prismaDB.reservation.delete({
      where: {
        id,
      },
    });

    return res.status(200).json(reservation);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
