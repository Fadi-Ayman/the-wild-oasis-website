"use client";
  
// Copied File 

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between lg:px-8 px-4 bg-accent-500 text-primary-800  py-3">
        <div className="flex items-center lg:gap-6 gap-3 ">
          <p className="flex lg:gap-2 gap-1 items-center ">
            {discount > 0 ? (
              <>
                <span className="lg:text-2xl text-base 	">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="lg:text-2xl text-base">${regularPrice}</span>
            )}
            
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 lg:px-3 px-2 lg:py-2 py-1 lg:text-2xl text-base">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="lg:text-lg text-xs font-bold uppercase">Total </span>
                <span className="lg:text-2xl text-base font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border  ml-3 border-primary-800 lg:py-2 py-1 lg:px-4 px-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
