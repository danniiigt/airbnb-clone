import { Container } from "../Container";
import { ListingHead } from "./ListingHead";
import { ListingInfo } from "./ListingInfo";
import { ListingReservation } from "./ListingReservation";

export const Listing = async ({ listing, reservations, currentUser }) => {
  return (
    <>
      <Container>
        <div className="max-w-screen-lg mx-auto pt-[93px]">
          <div className="flex flex-col gap-6">
            <ListingHead
              title={listing.title}
              imageSrc={listing.imageSrc}
              locationValue={listing.locationValue}
              id={listing.id}
              currentUser={currentUser}
            />
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-7
                md:gap-10
                mt-2
              "
            >
              <ListingInfo
                listing={listing}
                user={listing.user}
                description={listing.description}
                roomCount={listing.roomCount}
                guestCount={listing.guestCount}
                bathroomCount={listing.bathroomCount}
                locationValue={listing.locationValue}
              />
              <div
                className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
              >
                <ListingReservation
                  listing={listing}
                  price={listing.price}
                  currentUser={currentUser}
                  reservations={reservations}
                  // totalPrice={totalPrice}
                  // onChange={(value) => setDateRange(value)}
                  // dateRange={dateRange}
                  // onSubmit={onCreateReservation}
                  // disabled={isLoading}
                  // disabledDates={disabledDates}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
