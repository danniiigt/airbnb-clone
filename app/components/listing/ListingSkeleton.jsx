import React from "react";
import { ListingSkeletonItem } from "./ListingSkeletonItem";

export const ListingSkeleton = () => {
  return (
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
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
      <ListingSkeletonItem />
    </div>
  );
};
