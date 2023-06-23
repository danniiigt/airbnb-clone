"use client";

export const MenuItem = ({ onClick, label, icon, bold, mobile }) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4
        py-3
        hover:bg-neutral-100
        transition
        ${bold ? "font-semibold" : ""}
        flex
        items-center
        gap-5
        ${mobile ? "flex md:hidden" : "flex"}
    `}
    >
      {icon}
      {label}
    </div>
  );
};
