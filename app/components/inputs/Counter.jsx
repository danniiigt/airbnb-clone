export const Counter = ({
  title,
  subtitle,
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-neutral-500">{subtitle}</div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onDecrement}
          className="
          w-10
          h-10
          rounded-full
          border
          border-neutral-400
          flex
          items-center
          justify-center
          text-neutral-600
          cursor-pointer
          hover:border-neutral-700
          transition
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <div
          className="
          font-light
          text-xl
          text-neutral-600
        "
        >
          {value}
        </div>
        <button
          onClick={onIncrement}
          className="
          w-10
          h-10
          rounded-full
          border
          border-neutral-400
          flex
          items-center
          justify-center
          text-neutral-600
          cursor-pointer
          hover:border-neutral-700
          transition
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
