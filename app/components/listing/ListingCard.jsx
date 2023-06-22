"use client";

import { useCountries } from "@/app/hooks/useCountries";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { Button } from "../Button";
import "animate.css";

export const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
  delay,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data?.locationValue);

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

    return data?.price;
  }, [reservation, data?.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className={`
        col-span-1
        cursor-pointer
        group
        animate__animated
        animate__fadeIn
        animate-delay-${delay}
      `}
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
            onClick={() => router.push(`/listing/${data?.id}`)}
            alt="Listing image"
            src={data?.imageSrc}
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
            <HeartButton listingId={data?.id} currentUser={currentUser} />
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center w-full">
          <div className="w-full max-w-[75%]">
            <div className="text-lg">
              {location?.region}, {location?.label}
            </div>
            {reservationDate ? (
              <h1 className="font-light text-xs text-neutral-500 truncate max-w-full">
                {reservationDate}
              </h1>
            ) : (
              <h1 className="font-light text-neutral-500 truncate max-w-full">
                {data?.category} · {data?.guestCount}{" "}
                {data?.guestCount > 1 ? "huéspedes" : "huésped"} ·{" "}
                {data?.roomCount}{" "}
                {data?.roomCount > 1 ? "habitaciones" : "habitacion"} ·{" "}
                {data?.bathroomCount}{" "}
                {data?.bathroomCount > 1 ? "baños" : "baño"}
              </h1>
            )}
          </div>
          <div className="flex flex-col items-end justify-center w-full">
            <div className="font-semibold text-xl">{price}€</div>
            {!reservation && <div className="font-light mt-[-5px]">noche</div>}
          </div>
        </div>

        {onAction && actionLabel && (
          <div className="mt-2">
            <Button
              disabled={disabled}
              loading={disabled}
              small
              onClick={handleCancel}
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
