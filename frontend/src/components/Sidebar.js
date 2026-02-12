import Image from "next/image";
import avatar from "@/assets/Images/rocketleague.png"; // Replace with your actual avatar

const friends = [
  { name: "StarCrusher", color: "bg-blue-500" },
  { name: "VoidWalker", color: "bg-purple-500" },
  { name: "CosmicRider", color: "bg-cyan-400" },
  { name: "NebulaKnight", color: "bg-indigo-400" },
];

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#1B1339] text-white p-4 space-y-6 border-r border-white/10 min-h-screen pt-[80px]">
      {/* Avatar + Name */}
      <div className="text-start space-y-2">
        <div className="relative w-20 h-20 ">
          <Image
            src={avatar}
            alt="Avatar"
            className="rounded-full"
            fill
            style={{ objectFit: "cover" }}
          />
          <span className="absolute -bottom-2 right-0  bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full">
            Lv. 42
          </span>
        </div>
        <h2 className="font-bold text-lg mt-4 text-[#8A2BE2]">CyberNinja</h2>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
          <div className="w-[75%] bg-blue-500 h-2 rounded-full"></div>
        </div>
        <p className="text-xs text-gray-300">7,500 / 10,000 XP</p>
      </div>

      {/* Quick Stats */}
      <div>
        <h3 className="text-purple-300 text-sm font-semibold mb-1">Quick Stats</h3>
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span>Battles Won</span>
            <span className="text-green-400 font-semibold">1,247</span>
          </div>
          <div className="flex justify-between">
            <span>Achievements</span>
            <span className="text-yellow-300 font-semibold">89</span>
          </div>
          <div className="flex justify-between">
            <span>Rank</span>
            <span className="text-blue-400 font-semibold">Diamond</span>
          </div>
        </div>
      </div>

      {/* Friends Online */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Friends Online ({friends.length})</h3>
        <div className="bg-[#2C2153] rounded-xl p-3 space-y-2">
          {friends.map((friend, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${friend.color}`}></div>
                <span className="text-sm">{friend.name}</span>
              </div>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
