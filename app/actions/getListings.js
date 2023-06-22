import prismaDB from "../lib/prismadb";

export const getListings = async () => {
  try {
    const listings = await prismaDB.listing.findMany();
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUserListings = async (userId) => {
  try {
    const listings = await prismaDB.listing.findMany({
      where: {
        userId: userId,
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error) {
    console.log(error);
    return [];
  }
};
