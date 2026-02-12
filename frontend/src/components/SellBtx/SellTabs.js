"use client";

export default function SellTabs({ activeTab, setActiveTab }) {
  const tabs = ["SELL BTX", "ACTIVE", "HISTORY"];

  return (
    <div className="text-center">
      <div className="flex space-x-4 border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex h-[38px] tracking-wider items-center pt-1 rounded-lg px-4 font-bebas-neue text-white transition-colors border-[rgba(77,35,139,1)] relative 
              ${
                activeTab === tab
                  ? "bg-[rgba(84,42,255,1)]"
                  : "bg-[rgba(122,89,255,1)]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
