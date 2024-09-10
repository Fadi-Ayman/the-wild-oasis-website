"use client";
import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDeleteReservation() {
    const warningMsg = confirm(
      "Are you sure you want to delete this reservation?"
    );
    if (warningMsg === false) return;
    startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      disabled={isPending}
      onClick={handleDeleteReservation}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 disabled:bg-gray-500"
    >
      <TrashIcon
        className={`h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors ${
          isPending ? "hidden" : ""
        }`}
      />
      {isPending ? (
        <span className="mx-auto">
          {" "}
          <SpinnerMini />{" "}
        </span>
      ) : (
        <span className="mt-1">Delete</span>
      )}
    </button>
  );
}

export default DeleteReservation;
