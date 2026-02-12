import React from "react";
export default function Container({ title, subtitle, children }) {
  return (
    <>
      <div className="px-5 py-6 border border-[#FFFFFF33] rounded-2xl bg-[#59168B75]">
        {title && <h1 className="text-white text-xl md:text-2xl mb-1">{title}</h1>}
        {subtitle && <p className="text-[#E9D4FF] text-xs md:text-base mb-4">{subtitle}</p>}
        <div>{children}</div>
      </div>
    </>
  );
}
