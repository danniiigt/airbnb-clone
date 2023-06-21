"use client";

import { useMemo } from "react";
import { categoryItems } from "../categories/Categories";
import { Container } from "../Container";
import { ListingHead } from "./ListingHead";
import { ListingInfo } from "./ListingInfo";

export const Listing = ({ listing, currentUser }) => {
  const category = useMemo(() => {
    return categoryItems.find((item) => item.label === listing.category);
  }, [listing]);

  console.log({ category });

  return (
    <>
      <Container>
        <div className="max-w-screen-lg mx-auto">
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
                user={listing.user}
                category={category}
                description={listing.description}
                roomCount={listing.roomCount}
                guestCount={listing.guestCount}
                bathroomCount={listing.bathroomCount}
                locationValue={listing.locationValue}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
