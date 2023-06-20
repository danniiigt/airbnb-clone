export const CategoryInput = ({ onClick, selected, label, icon: Icon }) => {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl
        border
        p-4
        flex
        flex-col
        gap-3
        hover:border-neutral-400
        transition
        cursor-pointer
        ${selected ? "border-neutral-400" : "border-neutral-200"}
      `}
    >
      <Icon size={30} className="text-neutral-700" />
      <div>{label}</div>
    </div>
  );
};
