import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking ,onDelete}) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800">
      <div className="relative h-60 sm:h-40 aspect-square">
        <Image
          fill
          sizes="100%"
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 lg:py-3 py-5 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-primary-300 mb-4 md:mb-0">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-7 mt-auto items-center md:items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300 hidden sm:inline-block">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-xs sm:text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className={`sm:border-l border-t border-primary-800 md:w-[100px] `}>
        <div
          className={`size-full flex sm:flex-col ${
            isPast(startDate) ? "hidden" : ""
          }`}
        >
          <a
            href={`/account/reservations/edit/${id}`}
            className={`group flex items-center justify-center border-r gap-2 uppercase text-xs font-bold text-primary-300 sm:border-b border-primary-800 flex-grow px-5 sm:px-3 py-4 sm:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900`}
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </a>
          <DeleteReservation bookingId={id} onDelete={onDelete}/>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
