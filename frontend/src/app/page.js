"use client";
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import Logo from "@/assets/Images/Logo.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/home");
  // }, []);
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover pointer-events-none select-none -z-10"
          priority
        />
      </div>

      {/* Logo in the top‑left corner */}
      <div className="p-5">
        <Image src={Logo} alt="Logo" width={96} />
      </div>

      {/* Centered BIG TIME heading */}
      <div className="flex-1 flex items-center justify-center flex-col gap-10">
        <div className="text-center">
          <div className="font-bebas-neue text-[80px] md:text-[65px] tracking-wide text-white">
            BIG TIME
          </div>
          <div className="flex flex-col leading-none font-poppins font-bold tracking-wide">
            <div className="text-[25px] md:text-[40px]  text-white">
              Welcome To The
            </div>
            <div className="text-[60px] md:text-[40px] bg-gradient-to-r from-[#BA83CB] to-[#AE69FF] bg-clip-text text-transparent">
              Adventure!
            </div>
          </div>
        </div>
        <button
          className="font-poppins uppercase bg-gradient-to-r from-[#501794]  to-[#3E70A1] text-white rounded-2xl cursor-pointer py-3 px-10"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
