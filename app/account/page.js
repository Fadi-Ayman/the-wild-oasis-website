import Link from "next/link";
import { auth } from "../_lib/nextAuth";
import { getBookings } from '@/app/_lib/data-service';

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session =  await auth()
  const userReservations = await getBookings(session.user.guestId)

  const firstName = session.user.name.split(' ').at(0)
  return (
    <>
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
    <p className="font-semibold text-base lg:text-xl text-white ">
      You Have {userReservations.length} Reservations  <Link className="text-accent-400 underline " href="/account/reservations">Check your reservations &rarr;</Link>
    </p>
    </>
  );
}
