import prismaDB from "../lib/prismadb";

export const getListingsIds = async () => {
  try {
    const listings = await prismaDB.listing.findMany({
      select: {
        id: true,
      },
    });

    return listings;
  } catch (error) {
    console.error(error);
    return [];
  }
};
