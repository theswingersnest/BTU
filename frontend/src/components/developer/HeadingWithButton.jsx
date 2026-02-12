import React from "react";
export default function HeadingButton({title, subtitle, btnText, Icon}) {
  return (
    <>
      <div className="container px-5 relative mx-auto">
        <div className="py-2 mb-5 flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between">
          <div className="w-full">
            <h1 className="font-poppins capitalize text-white text-[30px] md:text-4xl">
              {title}
            </h1>
            <h2 className="font-poppins text-xs md:text-base font-thin mt-2">
              {subtitle}
            </h2>
          </div>
          {/* button */}
          <div>
            <button className="bg-[#9810FA] text-white md:text-base text-xs md:min-w-[180px] flex items-center rounded-xl px-5 md:gap-3 gap-2 py-3">
              {Icon && <Icon className='size-[17px] md:size-[20px]'/>}{btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}