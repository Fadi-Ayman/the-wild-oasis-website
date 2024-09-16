"use client";

import { updateProfileAction } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import FormSubmitButton from "./FormSubmitButton";

function UpdateProfileForm({ userDetails, children }) {
  const { fullName, email, nationalID, countryFlag } = userDetails;

  return (
    <form
      action={updateProfileAction}
      className="bg-primary-900 py-5 px-6 lg:px-12 lg:text-base text-sm flex gap-4 flex-col"
    >
      <div className="lg:space-y-2 space-y-1">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          defaultValue={fullName}
          name="fullName"
          disabled
          className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="lg:space-y-2 space-y-1">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          defaultValue={email}
          name="email"
          disabled
          className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="lg:space-y-2 space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="lg:space-y-2 space-y-1">
        <label htmlFor="nationalID">National ID number</label>
        <input
          id="nationalID"
          name="nationalID"
          defaultValue={nationalID}
          className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <FormSubmitButton label={"Update"} loadingLabel={"Updating..."} />
      </div>
    </form>
  );
}

export default UpdateProfileForm;
