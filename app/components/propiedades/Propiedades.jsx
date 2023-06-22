"use client";

import { useCallback, useState } from "react";
import { Heading } from "../Heading";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { ListingCard } from "../listing/ListingCard";
import axios from "axios";

export const Propiedades = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);

  console.log(listings);

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

  return (
    <>
      <Heading
        title="Tus propiedades"
        subtitle="Estas son tus propiedades registradas en Airbnb"
      />
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
        {listings.map((listing, index) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Eliminar propiedad"
            delay={index * 150}
          />
        ))}
      </div>
    </>
  );
};
