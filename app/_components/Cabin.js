import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <>
    <div className="lg:grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 hidden">
    <div className="relative scale-[1.15] -translate-x-3 ">
      <Image
        src={image}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"

        className="object-cover"
        alt={`Cabin ${name}`}
      />
    </div>

    <div>
      <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
        Cabin {name}
      </h3>

      <p className="text-lg text-primary-300 mb-10">
        <TextExpander>{description}</TextExpander>
      </p>

      <ul className="flex flex-col gap-4 mb-7">
        <li className="flex gap-3 items-center">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <MapPinIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            Located in the heart of the
            <span className="font-bold">Dolomites</span> (Italy)
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <EyeSlashIcon className="h-5 w-5 text-primary-600" />
          <span className="text-lg">
            Privacy <span className="font-bold">100%</span> guaranteed
          </span>
        </li>
      </ul>
    </div>
  </div>

{/* SM SCREANS */}

    <div className=" flex flex-col gap-8 items-center justify-center border border-primary-800 py-3 mb-12 px-1 lg:hidden">

        <h3 className="text-accent-100 font-black text-4xl bg-primary-950 text-center pt-3">
          Cabin {name}
        </h3>

        <div className="w-[88%]">
        <div className="relative scale-[1.15]  h-60 sm:h-96 w-full overflow-hidden ">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>
        </div>
      <div>


        <p className="text-center text-primary-300 mb-10 mt-3 px-2">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7 ps-[5%]">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base">
              Located in the heart of the
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
          </>
  );
}

export default Cabin;



