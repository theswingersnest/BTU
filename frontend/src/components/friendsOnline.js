import React from 'react'

export default function FriendsOnline() {
    
const friends = [
    { name: "CrimsonTiger67", game: "Resident Evil 4" },
    { name: "st3alth_sniper", game: "Fortnite" },
    { name: "IceDragon", game: "ROBLOX" },
    { name: "BlitzkriegG6", game: "EA Sports FC 24" },
    { name: "phoenix_rising", game: "Rocket League" },
    { name: "neonNova", game: "GTA V" },
    ];
  return (
    <div className="bg-[#2b0a59] rounded-lg p-4 w-full">
      <h3 className="text-white text-lg font-semibold mb-4">Friends online</h3>
      <ul className="space-y-3">
        {friends.map((friend) => (
          <li
            key={friend.name}
            className="flex items-center gap-3 text-sm text-purple-100"
          >
            {/* Circle avatar with gradient */}
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-white">{friend.name}</p>
              <p className="text-xs text-purple-300">Playing {friend.game}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
