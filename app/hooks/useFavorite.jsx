import { useLoginModal } from "./useLoginModal";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const useFavorite = ({ listingId, currentUser }) => {
  const { onOpen } = useLoginModal();
  const router = useRouter();

  const isFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(async () => {
    if (!currentUser) return onOpen();

    if (isFavorited) {
      try {
        const res = await axios.delete(`/api/favorites/${listingId}`);
        router.refresh();
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message || "Something went wrong");
      }
    } else {
      try {
        const res = await axios.post(`/api/favorites/${listingId}`);
        router.refresh();
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message || "Something went wrong");
      }
    }
  }, [currentUser, listingId, isFavorited, onOpen, router]);

  return { isFavorited, toggleFavorite };
};
