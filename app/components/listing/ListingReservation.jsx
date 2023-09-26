"use client";

import { Range } from "react-date-range";
import { Calendar } from "../inputs/Calendar";
import { Button } from "../Button";
import { useState } from "react";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useMemo } from "react";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export const ListingReservation = ({ listing, currentUser, reservations }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const loginModal = useLoginModal();
  const router = useRouter();

  const onCreateReservation = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();

    setIsLoading(true);

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      })
      .then(() => {
        toast.success("Se ha efectuado la reserva con éxito");
        setDateRange(initialDateRange);
        router.refresh();
      })
      .catch(() => {
        toast.error("Ha ocurrido un error al efectuar la reserva");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [totalPrice, dateRange, listing, currentUser, loginModal, router]);

  const disabledDates = useMemo(() => {
    let dates = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice((dayCount + 1) * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  return (
    <div
      className="
      bg-white
      rounded-xl
      border
      border-neutral-200
      overflow-hidden

    "
    >
      <div className="flex items-center gap-2 p-4">
        <h1 className="text-2xl font-semibold">{listing.price}€</h1>
        <h1 className="font-light text-neutral-600">por noche</h1>
      </div>

      <hr />

      <Calendar
        date={dateRange}
        disabledDates={disabledDates}
        onChange={(item) => setDateRange(item.selection)}
      />

      <hr />

      <div
        className="
          p-4
          flex
          items-center
          justify-between
          font-semibold
          text-lg
        "
      >
        <h1>Total</h1>
        <h1>{totalPrice}€</h1>
      </div>

      <div className="p-4 pt-0">
        <Button
          disabled={isLoading}
          loading={isLoading}
          onClick={onCreateReservation}
        >
          Reservar
        </Button>
      </div>
    </div>
  );
};
