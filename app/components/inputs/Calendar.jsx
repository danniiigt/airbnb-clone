"use client";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { es } from "date-fns/locale";

export const Calendar = ({ date, disabledDates, onChange }) => {
  return (
    <DateRange
      rangeColors={["#f43f5e"]}
      ranges={[date]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      locale={es}
    />
  );
};
