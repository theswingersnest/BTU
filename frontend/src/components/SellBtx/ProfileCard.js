"use client";

export default function ProfileCard() {
  return (
    <div
      className="flex justify-between items-center h-[182px] rounded-xl p-6 
        border border-indigo-500/50 bg-[rgba(122,89,255,0.05)] 
        shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
        backdrop-blur-sm"
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-indigo-400"
        />

        <div>
          <p className="font-poppins font-semibold text-[20px]">CryptoGamer</p>

          {/* Active Chip */}
          <span
            className="inline-block mt-1 mr-2 px-3 py-[2px] text-[12px] font-poppins 
              text-[rgba(248,250,252,1)] bg-emerald-600 rounded-md shadow-sm"
          >
            Active
          </span>

          {/* Playing Chip */}
          <span
            className="inline-block mt-1 px-3 py-[2px] text-[12px] font-poppins text-[rgba(233,213,255,1)]
              bg-[rgba(107,33,168,0.5)] border border-[rgba(192,132,252,1)] rounded-md"
          >
            Playing: Battle Arena (Lvl 42)
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="max-w-[400px] w-full text-right bg-[rgba(75,56,150,0.52)] backdrop-blur-xs h-[133px] flex justify-center flex-col px-7 rounded-lg"
      >
        <p className="text-[14px] text-white font-poppins text-left mb-2">
          BTX Balance
        </p>

        <div className="flex items-end gap-2">
          <p className="font-poppins font-semibold text-[26px] text-white leading-none">
            1,250.75 BTX
          </p>
          <span className="text-white text-[12px] bg-indigo-800 rounded-md px-2 py-[2px]">
            $625.38
          </span>
        </div>
      </div>
    </div>
  );
}
