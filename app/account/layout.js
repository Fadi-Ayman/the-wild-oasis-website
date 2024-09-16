import SideNavigation from "@/app/_components/SideNavigation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { SideNavigationMini } from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="lg:grid lg:grid-cols-[16rem_1fr]  lg:gap-12 h-[calc(100vh-7rem-64px)] md:h-[calc(100vh-9rem-64px)]">
      <SideNavigation />
      <SideNavigationMini />

      <div className=" h-full overflow-auto no-scrollbar w-full">
        <Suspense fallback={<Spinner />} key={children}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
