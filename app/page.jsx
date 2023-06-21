import getCurrentUser from "./actions/getCurrentUser";
import { getListings } from "./actions/getListings";
import { Container } from "./components/Container";
import { ListingCard } from "./components/listing/ListingCard";
import { ListingSkeleton } from "./components/listing/ListingSkeleton";

const Page = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div
        className="
         grid
         grid-cols-1
         sm:grid-cols-2
         md:grid-cols-3
         lg:grid-cols-4
         xl:grid-cols-5
         2xl:grid-cols-6
         gap-8
         pt-[83px]
       "
      >
        {listings.map((listing, index) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            delay={index * 150}
          />
        ))}
      </div>
    </Container>
  );
};

export default Page;
