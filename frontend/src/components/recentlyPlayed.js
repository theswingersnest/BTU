import React from "react";

export default function RecentlyPlayed() {
  const recentlyPlayed = [
    {
      name: "Hitman World of Assassination",
      color: "bg-[#2f3b49]",
      percent: 72,
    },
    {
      name: "Forza Horizon 5",
      color: "bg-[#209be5]",
      percent: 47,
    },
  ];
  return (
    <>
      <div className="bg-[#2b0a59] rounded-lg p-4 w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-semibold">Recently played</h3>
          <span className="text-purple-300 text-lg cursor-pointer">•••</span>
        </div>

        <ul className="space-y-4">
          {recentlyPlayed.map((game) => (
            <li key={game.name}>
              <div className="flex items-center gap-3">
                {/* Color box */}
                <div
                  className={`w-6 h-6 rounded ${game.color} flex-shrink-0`}
                ></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{game.name}</p>
                  <p className="text-purple-300 text-xs">{game.percent}%</p>
                  <div className="mt-1 h-1 w-full bg-purple-900 rounded">
                    <div
                      className="h-1 rounded bg-purple-500"
                      style={{ width: `${game.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
