export const ListingSkeletonItem = () => {
  return (
    <div className="h-[365px] w-full flex flex-col gap-4">
      <div className="bg-gray-200/70 animate-pulse rounded-lg w-full h-full block"></div>
      <div className="space-y-2">
        <div
          className={`w-4/5 bg-gray-200/70 animate-pulse h-2 rounded-sm`}
        ></div>
        <div
          className={`w-3/6 bg-gray-200/70 animate-pulse h-1.5 rounded-sm`}
        ></div>
        <div
          className={`w-4/6 bg-gray-200/70 animate-pulse h-1.5 rounded-sm`}
        ></div>
      </div>
    </div>
  );
};
