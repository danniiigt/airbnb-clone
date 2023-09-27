"use client";

import { useCountries } from "@/app/hooks/useCountries";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import { Button } from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import toast from "react-hot-toast";
import axios from "axios";

export const ListingCard = ({
  data,
  reservation,
  actionLabel,
  actionId,
  delay,
  listingId,
}) => {
  const { getByValue } = useCountries();
  const [deletingId, setDeletingId] = useState(null);
  const router = useRouter();

  const location = getByValue(data?.locationValue);

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          router.refresh();
          toast.success("Propiedad eliminada");
        })
        .catch(() => {
          toast.error("No se pudo eliminar la propiedad");
        })
        .finally(() => {
          setDeletingId(null);
        });
    },
    [router]
  );

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();

      if (deletingId === listingId) return;

      onCancel?.(actionId);
    },
    [actionId, deletingId, listingId, onCancel]
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
          <Link href={`/listing/${data?.id}`} scroll={true}>
            <Image
              alt="Listing image"
              src={data?.imageSrc}
              quality={90}
              height={300}
              width={300}
              priority
              className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
              object-center
            "
            />
          </Link>
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

        {actionLabel && (
          <div className="mt-2">
            <Button
              disabled={deletingId === listingId}
              loading={deletingId === listingId}
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
