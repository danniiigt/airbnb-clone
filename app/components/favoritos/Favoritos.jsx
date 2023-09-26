import { Heading } from "../Heading";
import { ListingCard } from "../listing/ListingCard";

export const Favoritos = ({ listings, currentUser }) => {
  return (
    <>
      <Heading
        title="Mis favoritos"
        subtitle="Estas son tus estancias marcadas como favoritas"
      />

      <div
        className="
          mt-6
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
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            delay={index * 75}
          />
        ))}
      </div>
    </>
  );
};
