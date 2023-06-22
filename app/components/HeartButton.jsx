import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "../hooks/useFavorite";

export const HeartButton = ({ listingId, currentUser }) => {
  const { isFavorited, toggleFavorite, isLoading } = useFavorite({
    listingId,
    currentUser,
  });

  const handleToggleFav = () => {
    if (isLoading) return;
    toggleFavorite();
  };

  return (
    <div
      onClick={handleToggleFav}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={isFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};
