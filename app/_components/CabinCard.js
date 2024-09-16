import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex  border-primary-800 border w-full ">
      <div className="flex-grow relative min-w-[50%]  lg:min-w-[50%] xl:min-w-[35%] ">
        <Image
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className=" bg-primary-950 ">
          <h3 className="text-accent-500 font-semibold text-xl lg:text-2xl mb-3 text-center sm:text-start pt-2 sm:ps-2">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center sm:ps-2 w-full">
            <UsersIcon className="h-5 w-5 text-primary-600 hidden sm:block " />
            <p className="w-full text-base lg:text-2xl mb-3 text-center sm:text-start pt-2 sm:ps-2 text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-1 sm:gap-3 justify-end items-baseline pe-2 sm:pe-3">
            {discount > 0 ? (
              <>
                <span className=" lg:text-3xl md:text-2xl text-xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 lg:text-2xl text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="lg:text-3xl md:text-2xl text-xl  font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200 ">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4  px-3 sm:px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 sm:text-base text-xs  w-full lg:w-fit"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
