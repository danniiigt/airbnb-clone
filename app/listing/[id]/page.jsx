import getCurrentUser from "@/app/actions/getCurrentUser";
import { getListingById } from "@/app/actions/getListingById";
import { Container } from "@/app/components/Container";
import { Listing } from "@/app/components/listing/Listing";

const ListingPage = async ({ params }) => {
  const { id } = params;
  const listing = await getListingById(id);
  const currentUser = await getCurrentUser();

  return (
    <>
      <Container>
        <Listing listing={listing} currentUser={currentUser} />
      </Container>
    </>
  );
};

export default ListingPage;
