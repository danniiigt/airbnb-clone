"use client";

import { useCountries } from "@/app/hooks/useCountries";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { Button } from "../Button";

export const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="
        col-span-1
        cursor-pointer
        group
      "
    >
      <div>
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            onClick={() => router.push(`/listing/${data.id}`)}
            alt="Listing image"
            src={data.imageSrc}
            fill
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
              object-center
            "
          />

          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div>
            <div className="text-lg">
              {location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">
              {reservation || data.category}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold text-xl">€ {price}</div>
            {!reservation && <div className="font-light mt-[-5px]">noche</div>}
          </div>
        </div>

        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onclick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};
