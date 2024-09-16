import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "../../_lib/nextAuth";
import { getGuest } from "../../_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const userDetails = await getGuest(session?.user?.email);

  return (
    <div>
      <h2 className="font-semibold lg:text-2xl text-lg text-accent-400 lg:mb-3 mb-2">
        Update your guest profile
      </h2>

      <p className="text-base lg:text-base lg:mb-6 mb-4 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm userDetails={userDetails}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="lg:px-5 px-2 py-2 lg:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={userDetails.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
