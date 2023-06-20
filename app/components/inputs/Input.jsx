export const Input = ({
  id,
  type = "email",
  disabled,
  placeholder,
  errors,
  register,
  rules,
  label,
  min,
}) => {
  return (
    <div className="w-full relative">
      {label && (
        <label
          className={`${
            errors[id] ? "text-rose-500" : "text-neutral-500"
          } text-sm`}
        >
          {errors[id] ? errors[id].message : label}
        </label>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, rules)}
        placeholder={placeholder}
        type={type}
        min={min}
        className={`
          w-full
          p-3
          border
          rounded
          focus:outline-none
          ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "focus:border-neutral-500"
          }
        `}
      />
    </div>
  );
};
