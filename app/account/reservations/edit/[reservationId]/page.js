import FormSubmitButton from "../../../../_components/FormSubmitButton";
import { updateReservation } from "../../../../_lib/actions";
import { getBooking, getCabin } from "../../../../_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.reservationId;
  const { observations, cabinId } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateReservation}
        className="bg-primary-900 md:py-8  py-4 md:px-12 px-6  text-base sm:text-lg flex sm:gap-6 gap-3 flex-col"
      >
        <div className="space-y-2">
          <label  htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input type="hidden" value={reservationId} name="reservationId" />
        </div>

        <div className="space-y-2">
          <label  htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm sm:min-h-[8rem] sm:max-h-[15rem] max-h-[10rem] min-h-[6rem]"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <FormSubmitButton
            label={"Update Reservation"}
            loadingLabel={"Updating..."}
          />
        </div>
      </form>
    </div>
  );
}
