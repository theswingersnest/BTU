import React from "react";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import Logo from "@/assets/Images/Logo.png";
import { RiDeleteBinLine } from "react-icons/ri";
import Avatar1 from "@/assets/Images/avatar 1.jpg";
import Avatar2 from "@/assets/Images/avatar 2.jpg";
import AddProfile from "@/assets/Images/add profile.jpg";
import Image from "next/image";

export default function WelcomeProfiles() {
  const profiles = [
    {
      profile: "Profile 1",
      avatar: Avatar1,
      name: "Joe_89",
    },
    {
      profile: "Profile 2",
      avatar: Avatar2,
      name: "Beck98",
    },
  ];
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
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

        <div className="flex flex-col items-center gap-3 p-2">
          {/* big time logo */}
          <Image
            src={Logo}
            alt="big time logo"
            className="md:h-[66px] h-[40px] w-[100px] md:w-[163px]"
          ></Image>

          {/* heading */}
          <h1 className="text-white text-center font-poppins text-2xl font-medium  md:text-[50px]">
            Who's using BigTime?
          </h1>

          {/* paragraph */}
          <p className="font-poppins text-sm md:text-xl text-center font-thin ">
            With Bigtime profiles, you can separate all your stuff. Create{" "}
            <br  className="md:block hidden"/> profiles for friends and family
          </p>

          <div className="grid grid-cols-1 md:justify-start justify-center md:grid-cols-3 gap-3 md:gap-6">
            {profiles.map((pro, index) => (
              <div
                className="md:h-[292px] h-[250px] w-[220px] px-4 py-3 flex flex-col md:w-[260px] backdrop-blur-lg bg-[#3B206380] rounded-lg"
                key={index}
              >
                <div className="flex justify-end">
                  <RiDeleteBinLine className="text-lg" />
                </div>

                <div className="flex gap-4 flex-col items-center">
                  <h1 className="font-poppins text-lg md:text-xl font-light">
                    {pro.profile}
                  </h1>
                  <div
                    // style={{
                    //   backgroundImage: `url(${pro.avatar})`,
                    //   backgroundRepeat: "no-repeat",
                    //   backgroundSize : "cover",
                    //   backgroundPosition: "center center"
                    // }}
                    className="md:h-[150px] h-[120px] w-[120px] md:w-[150px] bg-amber-200 rounded-full"
                  >
                    <Image
                      src={pro.avatar}
                      width={120}
                      height={40}
                      className="object-cover rounded-full size-[120px] md:size-[150px]"
                    ></Image>
                  </div>
                  <h1 className="font-poppins text-lg md:text-xl font-light">
                    {pro.name}
                  </h1>
                </div>
              </div>
            ))}



            <div className="md:h-[292px] h-[220px] w-[220px] py-8 flex flex-col md:w-[260px] backdrop-blur-lg bg-[#3B206380] rounded-lg">
              <div className="flex gap-4 flex-col items-center">
                  <h1 className="font-poppins text-lg md:text-xl font-light">
                    Add Profile
                  </h1>
                  <div
                    className="md:h-[150px] h-[120px] w-[120px] md:w-[150px] bg-amber-200 rounded-full"
                  >
                    <Image
                      src={AddProfile}
                      width={120}
                      height={40}
                      className="object-cover rounded-full size-[120px] md:size-[150px]"
                    ></Image>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
