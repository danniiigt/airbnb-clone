import { ListingSkeletonItem } from "./listing/ListingSkeletonItem";

export const SectionsSkeleton = () => {
  return (
    <div>
      <div className="space-y-3 mb-6">
        <div className="bg-gray-200/70 animate-pulse w-2/5 h-5 rounded"></div>
        <div className="bg-gray-200/70 animate-pulse w-1/5 h-3 rounded"></div>
      </div>

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
    </div>
  );
};
