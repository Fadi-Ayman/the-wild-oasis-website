import SideNavigation from "@/app/_components/SideNavigation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">
        <Suspense fallback={<Spinner />} key={children}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
