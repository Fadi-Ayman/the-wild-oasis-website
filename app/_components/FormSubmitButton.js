"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function FormSubmitButton({ label, loadingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 flex gap-2"
    >
      {pending ? (
        <>
          <span>
            <SpinnerMini />
          </span>{" "}
          <span>{loadingLabel}</span>
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default FormSubmitButton;
