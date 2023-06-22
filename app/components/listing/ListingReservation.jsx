"use client";

import { Range } from "react-date-range";
import { Calendar } from "../inputs/Calendar";
import { Button } from "../Button";

export const ListingReservation = ({
  price,
  totalPrice,
  onChange,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border
      border-neutral-200
      overflow-hidden

    "
    >
      <div className="flex items-center gap-2 p-4">
        <h1 className="text-2xl font-semibold">{price}€</h1>
        <h1 className="font-light text-neutral-600">por noche</h1>
      </div>

      <hr />

      <Calendar
        date={dateRange}
        disabledDates={disabledDates}
        onChange={(item) => onChange(item.selection)}
      />

      <hr />

      <div
        className="
          p-4
          flex
          items-center
          justify-between
          font-semibold
          text-lg
        "
      >
        <h1>Total</h1>
        <h1>{totalPrice}€</h1>
      </div>

      <div className="p-4 pt-0">
        <Button disabled={disabled} loading={disabled} onClick={onSubmit}>
          Reservar
        </Button>
      </div>
    </div>
  );
};
