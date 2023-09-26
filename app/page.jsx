import { getListings } from "./actions/getListings";
import { Container } from "./components/Container";
import { EmptyState } from "./components/EmptyState";
import { ListingCard } from "./components/listing/ListingCard";

const Page = async ({ searchParams }) => {
  const listings = await getListings(searchParams);

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
          <ListingCard key={listing.id} data={listing} delay={index * 75} />
        ))}
      </div>

      {listings.length === 0 && (
        <div className="w-fit mx-auto">
          <EmptyState />
        </div>
      )}
    </Container>
  );
};

export default Page;
