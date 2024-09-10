"use client";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function BookingsList({ bookings }) {
  // UseOptmistic Hook is used to Make Ui Sync With Async Server Actions in Which it Assumes That The Server Action will Fires Successfully And It Change UI Before The Server action Fired , And In Case This ASync Server Action Failed => The UI Will Change And return Back As Nothing happend

  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    // CallBack Function that Change UI , Had Access To the Current State And The Payload That Send To Optmistic Delete Function
    (currBooking, bookingId) => {
      return currBooking.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDeleteReservations(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDeleteReservations}
        />
      ))}
    </ul>
  );
}

export default BookingsList;
