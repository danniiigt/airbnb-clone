import { Suspense } from "react";
import { Container } from "./components/Container";
import { Listings } from "./components/Listings";
import { ListingSkeleton } from "./components/listing/ListingSkeleton";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }) => {
  return (
    <Container>
      <Suspense fallback={<ListingSkeleton />}>
        <Listings searchParams={searchParams} />
      </Suspense>
    </Container>
  );
};

export default Page;
