import getCurrentUser from "./actions/getCurrentUser";
import { Container } from "./components/Container";
import { ListingCard } from "./components/listing/ListingCard";
import prismaDB from "./lib/prismadb";

const Page = async () => {
  const listings = await prismaDB.listing.findMany();
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
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Page;
