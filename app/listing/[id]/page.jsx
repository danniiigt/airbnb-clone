import { getListingById } from "@/app/actions/getListingById";
import { getReservations } from "@/app/actions/getReservations";
import { Container } from "@/app/components/Container";
import { Listing } from "@/app/components/listing/Listing";
import getCurrentUser from "@/app/actions/getCurrentUser";

const ListingPage = async ({ params }) => {
  const { id } = params;
  const listing = await getListingById(id);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ listingId: id });

  return (
    <>
      <Container>
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
