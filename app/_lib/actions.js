// Use Server Used For Server Actions
"use server";

import { revalidatePath } from "next/cache";
import {
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { auth, signIn } from "./nextAuth";
import { signOut } from "./nextAuth";
import { redirect } from "next/navigation";
import { supabase } from "./supabase";

export async function updateProfileAction(formData) {
  // We need To Get Session To get GuestID
  const session = await auth();
  // We Must Handle That There Is A Session (as User is Authenticated)
  if (!session) throw new Error("Not signed in");

  // PrePare Data To Update
  const id = session?.user.guestId;
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalID = formData.get("nationalID");

  if (!nationalID || !nationality || !countryFlag)
    throw new Error("please fill in all fields");

  // Check if national id is 14 digits
  const regex = /^\d{14}$/;
  if (!regex.test(nationalID)) {
    throw new Error(
      `National ID should be 14 digits and you entered only ${nationalID.length} digits`
    );
  }

  // Update Guest Info after All Checks
  const updatedGuestInfo = {
    id,
    nationality,
    countryFlag,
    nationalID,
  };
  await updateGuest(id, updatedGuestInfo);

  // Revalidate Path to get Updated Data instead of State , beacause there is no state in Server component
  revalidatePath("account/profile");
}

// Booking Data is That Passed Using Bind Method
export async function createBooking(bookingData, formData) {
  // We Must Handle That There Is A Session (as User is Authenticated)
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // PrePare New Cabin Data
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  // Create New Booking In DB
  const { error } = await supabase.from("bookings").insert([newBooking]);
  if (error) throw new Error("Booking could not be created");

  // Revalidate Path To Making Disabled DateSelector Updates in UI & Redirect To Thankyou Page in successfully booking
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function deleteReservation(bookingId) {
  // Check if user is authenicated or not & get GuestId
  const session = await auth();
  if (!session) throw new Error("Not signed in");
  const guestId = session?.user.guestId;

  // Get all booking ids of the user
  const userReservations = await getBookings(guestId);
  const ids = userReservations.map((booking) => booking.id);

  // Check if The user is The owner of the Reservation (Booking)
  if (!ids.includes(bookingId))
    throw new Error(`You Are Not Allowed To Delete This Booking`);

  // Delete The Booking
  await deleteBooking(bookingId);

  revalidatePath("account/reservations");
}

export async function updateReservation(formData) {
  // Check auth
  const session = await auth();
  if (!session) throw new Error("Not signed in");
  const guestId = session?.user.guestId;

  // destructure  formData

  const numGuests = Number(formData.get("numGuests"));
  // Make a Limit for Input , maybe sql injection
  const observations = formData.get("observations").split("", 3000).join("");
  const reservationId = Number(formData.get("reservationId"));

  // Get all booking ids of the user
  const userReservations = await getBookings(guestId);
  const ids = userReservations.map((booking) => booking.id);

  // Check if The user is The owner of the Reservation (Booking)
  if (!ids.includes(reservationId))
    throw new Error(`You Are Not Allowed To Update This Reservation`);

  // update Booking In Db
  await updateBooking(reservationId, { numGuests, observations });

  // redirect user To Reservations Page
  redirect("/account/reservations");
}

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
