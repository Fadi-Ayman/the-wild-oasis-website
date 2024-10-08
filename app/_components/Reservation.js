import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/nextAuth";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
async function Reservation({ cabin }) {
  const [settings, bookedDates, session] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
    auth(),
  ]);

  return (
    <div className="grid gap-1 lg:gap-0 lg:grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />

      {session ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
