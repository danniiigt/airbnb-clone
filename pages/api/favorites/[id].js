import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaDB from "@/app/lib/prismadb";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await handlePostFavorites(req, res);
      break;

    case "DELETE":
      await handleDeleteFavorites(req, res);
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}

const handlePostFavorites = async (req, res) => {
  const { id } = req.query;
  const currentUser = await getCurrentUser(req, res);

  if (!currentUser || !id)
    return res.status(401).json({ message: "Unauthorized" });

  let favoriteIds = [...(currentUser?.favoriteIds || [])];

  // CHECK IF ID IS ALREADY IN FAVORITES
  if (favoriteIds.includes(id))
    return res.status(400).json({ message: "Ya está en favoritos" });

  favoriteIds.push(id);

  try {
    const user = await prismaDB.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });

    return res.status(200).json({ message: "Favorite added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const handleDeleteFavorites = async (req, res) => {
  const { id } = req.query;
  const currentUser = await getCurrentUser(req, res);

  if (!currentUser || !id)
    return res.status(401).json({ message: "Unauthorized" });

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  if (!favoriteIds.includes(id))
    return res.status(400).json({ message: "No está añadido a favoritos" });

  favoriteIds = favoriteIds.filter((favoriteId) => favoriteId !== id);

  try {
    const user = await prismaDB.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    });

    return res.status(200).json({ message: "Favorite added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
