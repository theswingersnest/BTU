import React from "react";
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

import { LuUsers } from "react-icons/lu";
import Container from "@/components/developer/Container";
import ContainerBar from "@/components/developer/DashContainerBar";

export default function WelcomeDev() {
  return (
    <>
      <div className="relative py-[64px] px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]"></div>

        {/* welcome dev text and cards */}
        <div className=" container relative mx-auto">
          <div className="py-2 gap-6 mb-5 flex flex-col">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white font-semibold text-2xl md:text-4xl">
                Welcome back, developer
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2">
                Here's an overview of your games and revenue
              </h2>
            </div>

            {/* cards */}
            <div className="flex md:flex-row flex-col gap-3">
              {/* card1 */}
              <div className="md:w-[33.33%] px-5 py-5 flex-col flex justify-between h-[158px] backdrop-blur-xl border border-[#7A59FF] rounded-2xl bg-[#59168B75]">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm">Active Players</h1>
                  <LuUsers />
                </div>
                <div>
                  <h1 className="text-2xl">12,845</h1>
                  <div className="flex gap-2 items-center mt-1">
                    <MdOutlineArrowOutward className="text-green-600" />
                    <h2>+12.5%</h2>
                  </div>
                </div>
              </div>

              {/* card2 */}
              <div className="md:w-[33.33%] px-5 py-5 flex-col flex justify-between h-[158px] backdrop-blur-xl border border-[#7A59FF] rounded-2xl bg-[#59168B75]">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm">Active Players</h1>
                  <LuUsers />
                </div>
                <div className="">
                  <h1 className="text-2xl">12,845</h1>
                  <div className="flex gap-2 items-center mt-1">
                    <MdOutlineArrowOutward className="text-green-600" />
                    <h2>+12.5%</h2>
                  </div>
                </div>
              </div>

              {/* card3 */}
              <div className="md:w-[33.33%] px-5 py-5 flex-col flex justify-between h-[158px] backdrop-blur-xl border border-[#7A59FF] rounded-2xl bg-[#59168B75]">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm">Active Players</h1>
                  <LuUsers />
                </div>
                <div className="">
                  <h1 className="text-2xl">12,845</h1>
                  <div className="flex gap-2 items-center mt-1">
                    <MdOutlineArrowOutward className="text-green-600" />
                    <h2>+12.5%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions container */}
        <div className="mb-5 md:w-full w-[91%] container relative mx-auto">
          <Container
            title="Quick Actions"
            subtitle="Common task to get started"
          >
            <div className="flex md:flex-row flex-col gap-3 mt-6">
              <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                <FaPlus className="text-3xl" />
                <h2>Upload Game</h2>
              </div>

              <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                <IoSettingsOutline className="text-3xl" />
                <h2>Manage Games</h2>
              </div>

              <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                <FiUpload className="text-3xl" />
                <h2>Upload Assets</h2>
              </div>
            </div>
          </Container>
        </div>

        {/* Recent games Container  */}
        <div className="container md:w-full w-[91%] relative mx-auto">
          <Container
            title="Recent Games"
            subtitle="Your most recently updated games"
          >
            <div className="mt-5 flex flex-col">
              <ContainerBar
                heading="Cyber Legends"
                subheading="Status: Published"
                children="8,234 players"
                subchildren="$12,450"
              ></ContainerBar>
            </div>

            <div className="mt-5 flex flex-col">
              <ContainerBar
                heading="Space Warriors"
                subheading="Status: Published"
                children="3,421 players"
                subchildren="$8,200"
              ></ContainerBar>
            </div>

            <div className="mt-5 flex flex-col">
              <ContainerBar
                heading="Fantasy Quest"
                subheading="Status: Draft"
                children="0 players"
                subchildren="$0"
              ></ContainerBar>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
