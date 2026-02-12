import React from "react";
import { FaRegFileImage } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function AssetContainer({ Name, Size, Date, Downloads }) {
  return (
    <div className="px-3 py-5 border md:gap-0 gap-3 flex md:flex-row flex-col md:justify-between border-[#9333EA2E] bg-[#50009854] rounded-2xl">
      <div className="flex md:px-2 gap-2 items-start md:gap-4">
        <div className="md:h-[50px] h-[40px] min-w-[40px] w-[40px] flex items-center justify-center md:w-[50px] rounded-md md:rounded-xl bg-[#9810FA4D] border-1 border-[#C27AFF4D]">
          <FaRegFileImage className="md:size-[20px] text-[#DAB2FF]" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="md:text-base text-xs text-white font-medium">{Name}</h1>
          <h2 className="text-sm text-[#DAB2FF]">
            {Size} • Uploaded {Date} • {Downloads} downloads
          </h2>
        </div>
      </div>

      <div className="flex md:justify-start justify-end gap-7 px-5 items-center">
        <FiDownload className="text-[#E9D4FF] md:size-[18px] "/>
        <RiDeleteBinLine className="text-[#FFA2A2]  md:size-[18px]"/>
      </div>    
    </div>
  );
}