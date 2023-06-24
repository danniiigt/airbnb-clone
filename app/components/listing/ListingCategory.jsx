export const ListingCategory = ({ icon: Icon, label, description }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={53} className="text-neutral-500" />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{label}</h1>
          <h1 className="text-neutral-500 font-light text-sm">{description}</h1>
        </div>
      </div>
    </div>
  );
};
