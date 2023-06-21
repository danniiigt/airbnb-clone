import prismaDB from "../lib/prismadb";

export const getListingById = async (id) => {
  const listing = await prismaDB.listing.findUnique({
    where: {
      id,
    },

    include: {
      user: true,
    },
  });

  const safeListing = {
    ...listing,
    createdAt: listing.createdAt.toISOString(),
  };

  return safeListing;
};
