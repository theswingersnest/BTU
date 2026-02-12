import { useState } from "react";

export default function ShopTabs({ tabs = [], onChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  return (
    <div className="rounded-xl shadow-2xl bg-gradient-to-r from-[#1E012B66] to-[#A855F74D] p-1 flex gap-2 justify-between w-3/4 mx-auto px-10 py-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={`w-full text-center bg-gradient-to-r text-white px-6 py-2 rounded-lg font-semibold cursor-pointer ${
            activeTab === index
              ? "from-[#240B48] to-[#3B82F680] bg-gradient-to-r text-white shadow-md"
              : "bg-[#4920878A] text-white hover:bg-white/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
