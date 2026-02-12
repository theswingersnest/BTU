"use client";

import Image from "next/image";
import RootHeader from "@/components/RootHeader";
import { useSidebar } from "@/context/SidebarContext";
import RootSidebar from "@/components/RootSidebar";
import bgImageWallet from "@/assets/Images/referralbg.png";
import { usePathname } from "next/navigation";
import DeveloperSidebar from "./DeveloperSidebar";

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const { isSidebarOpen } = useSidebar();

  const isDeveloperRoute = pathname.startsWith("/developer");

  return (
    <>
      {!isDeveloperRoute && <RootHeader />}

      <main className={`${!isDeveloperRoute && 'mt-[64px]'} transition-all duration-300 flex`}>
        {/* CONDITIONAL SIDEBAR */}
        {isDeveloperRoute ? <DeveloperSidebar /> : <RootSidebar />}

        <div
          className={`relative float-right ml-auto ${
            isSidebarOpen ? "w-[calc(100%-256px)]" : "w-[calc(100%-80px)]"
          }`}
        >
          <div className="min-h-[calc(100vh-64px)] ">
            <Image
              src={bgImageWallet}
              alt="Background"
              fill
              className="object-cover pointer-events-none select-none -z-10"
              priority
            />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
