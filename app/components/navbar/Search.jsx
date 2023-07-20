"use client";

import { useSearchModal } from "@/app/hooks/useSearchModal";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
  const searchModal = useSearchModal();

  return (
    <div
      onClick={searchModal.onOpen}
      className="
        border
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        "
    >
      <div
        className="
            flex
            items-center
            justify-between
        "
      >
        <div
          className="
                text-sm
                font-semibold
                px-6

            "
        >
          Cualquier lugar
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x
            flex-1
            text-center
        "
        >
          Cualquier semana
        </div>
        <div
          className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
        "
        >
          <div className="hidden sm:block">Añade Viajeros</div>
          <div
            className="
                p-2
                bg-rose-500
                text-white
                rounded-full
            "
          >
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
