"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { categoryItems } from "../categories/Categories";
import { Container } from "../Container";
import { ListingHead } from "./ListingHead";
import { ListingInfo } from "./ListingInfo";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ListingReservation } from "./ListingReservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export const Listing = ({ listing, reservations = [], currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const loginModal = useLoginModal();
  const router = useRouter();

  const onCreateReservation = useCallback(() => {
    if (!currentUser) return loginModal.open();

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

  const category = useMemo(() => {
    return categoryItems.find((item) => item.label === listing.category);
  }, [listing]);

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
    <>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <ListingHead
              title={listing.title}
              imageSrc={listing.imageSrc}
              locationValue={listing.locationValue}
              id={listing.id}
              currentUser={currentUser}
            />
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-7
                md:gap-10
                mt-2
              "
            >
              <ListingInfo
                user={listing.user}
                category={category}
                description={listing.description}
                roomCount={listing.roomCount}
                guestCount={listing.guestCount}
                bathroomCount={listing.bathroomCount}
                locationValue={listing.locationValue}
              />
              <div
                className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
              >
                <ListingReservation
                  price={listing.price}
                  totalPrice={totalPrice}
                  onChange={(value) => setDateRange(value)}
                  dateRange={dateRange}
                  onSubmit={onCreateReservation}
                  disabled={isLoading}
                  disabledDates={disabledDates}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
