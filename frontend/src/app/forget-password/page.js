import React from "react";
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";

export default function ForgetPassword() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col md:flex-row">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
          <Image
            src={bgImageMobile}
            alt="Background Mobile"
            fill
            className="object-fill pointer-events-none select-none -z-10 block md:hidden"
            priority
          />
          <Image
            src={bgImage}
            alt="Background Desktop"
            fill
            className="object-fill pointer-events-none select-none -z-10 hidden md:block"
            priority
          />
        </div>
      </div>
    </>
  );
}
