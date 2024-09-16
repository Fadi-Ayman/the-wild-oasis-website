import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";


function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5 flex flex-col h-[4rem]  md:h-[7rem]">
      <div className="flex justify-between items-center max-w-[90rem] mx-auto w-full">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
