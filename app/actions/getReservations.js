import prismaDB from "../lib/prismadb";

export const getReservations = async ({ listingId, userId, authorId }) => {
  const query = {};

  if (listingId) query.listingId = listingId;
  if (userId) query.userId = userId;
  if (authorId) query.listing = { userId: authorId };

  const reservations = await prismaDB.reservation.findMany({
    where: query,
    include: {
      listing: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return reservations;
};
