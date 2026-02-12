import React from "react";

export default function ContainerBar({
  heading,
  subheading,
  children,
  subchildren,
}) {
  return (
    <>
      <div className="px-3 py-3 border flex justify-between border-[#7A59FF] rounded-2xl bg-transparent">
        <div className="flex gap-4">
          <div className="h-[50px] w-[50px] rounded-xl bg-purple-500"></div>
          <div>
            <h1 className="font-medium">{heading}</h1>
            <h2 className="text-sm text-gray-400">{subheading}</h2>
          </div>
        </div>
        <div className="text-end">
          <h1 className="font-medium">{children}</h1>
          <h2 className="text-sm text-gray-400">{subchildren}</h2>
        </div>
      </div>
    </>
  );
}
