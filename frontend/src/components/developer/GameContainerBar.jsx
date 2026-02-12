import React from "react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

export default function GameBar({ Name, Genre, Players }) {
  return (
    <>
      <div className="px-3 py-5 border md:flex-row flex-col flex md:gap-0 gap-2 justify-between border-[#FFFFFF33] bg-[#FFFFFF1A] rounded-2xl">
        <div className="flex gap-4">
          <div className="md:h-[60px] h-[30px] min-w-[30px] md:w-[60px] rounded-xl bg-purple-500"></div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 md:gap-3">
              <h1 className="font-medium text-xs md:text-base">{Name}</h1>
              <div className="flex md:flex-row gap-2 flex-col md:gap-2">
                <button className="bg-[#9810FA] md:py-0.2 py-2 md:p-1 text-xs md:text-base rounded-md px-2">
                Published
              </button>
              <button className="md:p-1 md:py-0 py-1 rounded-md px-2 text-xs border border-[#FFFFFF33]">
                Public
              </button>
              </div>
            </div>
            <h2 className="md:text-sm text-xs text-gray-400">
              {Genre}• {Players}
            </h2>
          </div>
        </div>

        <div className="flex justify-end md:justify-start items-center">
          <Link href={
            "/developer/games/settings"
          }>
            <button className="bg-[#9810FA]  md:w-[107.6px] md:h-[36px] flex items-center gap-2 md:py-0 py-2 px-3 rounded-xl text-white">
            <IoSettingsOutline />
            Manage
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
