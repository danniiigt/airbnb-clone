import getCurrentUser from "./actions/getCurrentUser";
import { getListings } from "./actions/getListings";
import { Container } from "./components/Container";
import { ListingCard } from "./components/listing/ListingCard";

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
    </Container>
  );
};

export default Page;
