import Link from "next/link";
import { auth } from "../_lib/nextAuth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 md:text-xl text-sm sm:text-base">
      <ul className="flex xl:gap-16 gap-3 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        <li className="ml-1">
 
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex lg:gap-4 gap-2 items-center justify-center"
          >
            Guest area

            {session?.user && (
            <Image
              className="h-8 rounded-full  "
              referrerPolicy="no-referrer"
              src={session?.user?.image}
              alt={session?.user?.name}
              width={32}
              height={32}
            />
          )}
          </Link>
          
        </li>
      </ul>
    </nav>
  );
}
