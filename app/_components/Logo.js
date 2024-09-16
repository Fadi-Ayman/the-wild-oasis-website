import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (

    <Link href="/" className="flex items-center gap-2 z-10 ">
      <div className={`size-7 md:size-16`}>
      <Image
        src={logo}
        height="100%"
        width="100%"
        quality={100}
        priority="true"
        alt="The Wild Oasis logo"
      />
      </div>
      <span className="md:text-xl text-xs sm:text-base font-semibold text-primary-100 hidden sm:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
