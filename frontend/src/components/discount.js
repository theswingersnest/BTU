import React from "react";

export default function Discount() {
  return (
    <>
      <div className="mt-6 bg-[#5d37a2] p-4 rounded text-center text-sm">
        <p className="font-semibold mb-2">50% discount</p>
        <p className="text-xs text-white/70 mb-3">
          on the games in the selection!
        </p>
        <button className="w-full py-2 rounded bg-white text-[#5d37a2] font-semibold hover:bg-purple-100 transition">
          Go to library
        </button>
      </div>
    </>
  );
}
