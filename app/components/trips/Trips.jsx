"use client";

import { useCallback, useState } from "react";
import { Heading } from "../Heading";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ListingCard } from "../listing/ListingCard";
import axios from "axios";

export const Trips = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          router.refresh();
          toast.success("Reserva cancelada");
        })
        .catch(() => {
          toast.error("No se pudo cancelar la reserva");
        })
        .finally(() => {
          setDeletingId(null);
        });
    },
    [router]
  );

  return (
    <>
      <Heading title="Mis viajes" subtitle="Estos son tus viajes reservados" />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
       "
      >
        {reservations.map((reservation, index) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            currentUser={currentUser}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancelar reserva"
            delay={index * 75}
          />
        ))}
      </div>
    </>
  );
};
