"use client";
import { useState } from "react";

export default function AssetTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex gap-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`pb-2 text-lg font-medium ${
              activeTab === tab?.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab?.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab?.id && (
              <div key={tab?.id} className="grid md:grid-cols-3 gap-5">
                {tab?.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}