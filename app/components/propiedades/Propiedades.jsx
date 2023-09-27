import { Heading } from "../Heading";
import { ListingCard } from "../listing/ListingCard";

export const Propiedades = ({ listings, currentUser }) => {
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
            listingId={listing.id}
            actionLabel="Eliminar propiedad"
            delay={index * 75}
          />
        ))}
      </div>
    </>
  );
};
