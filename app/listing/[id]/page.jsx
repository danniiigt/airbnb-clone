import getCurrentUser from "@/app/actions/getCurrentUser";
import { getListingById } from "@/app/actions/getListingById";
import { getListingsIds } from "@/app/actions/getListingsIds";
import { getReservations } from "@/app/actions/getReservations";
import { Container } from "@/app/components/Container";
import { Listing } from "@/app/components/listing/Listing";

export async function generateStaticParams() {
  const listingsIds = await getListingsIds();
  return listingsIds;
}

const ListingPage = async ({ params }) => {
  const { id } = params;
  const listing = await getListingById(id);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ listingId: id });

  return (
    <>
      <Container>
        <div></div>
        <Listing
          listing={listing}
          currentUser={currentUser}
          reservations={reservations}
        />
      </Container>
    </>
  );
};

export default ListingPage;
