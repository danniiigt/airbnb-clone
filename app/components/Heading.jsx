export const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-neutral-500 font-light">{subtitle}</div>
    </div>
  );
};
