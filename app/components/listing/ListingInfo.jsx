import { categoryItems } from "@/app/lib/category-items";
import { Avatar } from "../navbar/Avatar";
import { ListingCategory } from "./ListingCategory";
import { useMemo } from "react";

export const ListingInfo = ({
  user,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  listing,
}) => {
  const category = useMemo(() => {
    return categoryItems.find((item) => item.label === listing.category);
  }, [listing]);

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div
            className="
            text-xl
            font-semibold
            flex
            items-center
            gap-2
          "
          >
            <h1>Anfitrión: {user.name}</h1>
          </div>
          <div
            className="
            flex
            flex-row
            items-center
            gap-4
            font-light
            text-neutral-500
         "
          >
            <h1>{guestCount} invitados</h1>
            <h1>{roomCount} habitaciones</h1>
            <h1>{bathroomCount} baños</h1>
          </div>
        </div>

        <Avatar user={user} big />
      </div>

      <hr />

      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}

      <hr />

      <h1 className="text-lg font-light text-neutral-500">{description}</h1>
    </div>
  );
};
