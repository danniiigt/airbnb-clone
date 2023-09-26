export const Container = ({ children, categoriesContainer }) => {
  if (categoriesContainer) {
    return (
      <div
        className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        pt-[100px]
    "
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
    "
    >
      {children}
    </div>
  );
};
