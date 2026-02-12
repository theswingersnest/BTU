"use client";
import { useState } from "react";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImageWallet from "@/assets/Images/referralbg.png";
import AlexJohnson from "@/assets/Images/Alex Johnson.png";
import MariaGarcia from "@/assets/Images/Maria Garcia.png";
import JamesWilson from "@/assets/Images/James Wilson.png";
import SarahLee from "@/assets/Images/svg fill.png";
import DavidBrown from "@/assets/Images/David Brown.png";
import Image from "next/image";
import { FiCopy, FiSearch } from "react-icons/fi";
import filterIcon from "@/assets/Images/filter.png";
import { FaBolt, FaChartLine, FaFacebookF, FaLink, FaStar, FaTrophy, FaTwitter, FaUserFriends, FaWhatsapp } from "react-icons/fa";

const referrals = [
  {
    name: "Alex Johnson",
    date: "2025-06-18",
    status: "Completed",
    reward: 100,
    icon:AlexJohnson
  },
  {
    name: "Maria Garcia",
    date: "2025-06-15",
    status: "Completed",
    reward: 100,
    icon:MariaGarcia
  },
  { name: "James Wilson", date: "2025-06-20", status: "Pending",icon:JamesWilson },
  { name: "Sarah Lee", date: "2025-06-10", status: "Completed", reward: 100,icon:SarahLee },
  { name: "David Brown", date: "2025-06-21", status: "Pending",icon:DavidBrown },
];
const tiers = [
  {
    name: "Bronze Tier",
    required: 500,
    reward: 50,
    status: "claimable",
    color: "text-orange-400",
  },
  {
    name: "Silver Tier",
    required: 1000,
    reward: 100,
    status: "locked",
    color: "text-gray-300",
  },
  {
    name: "Gold Tier",
    required: 2000,
    reward: 250,
    status: "locked",
    color: "text-yellow-300",
  },
  {
    name: "Platinum Tier",
    required: 5000,
    reward: 500,
    status: "locked",
    color: "text-cyan-300",
  },
  {
    name: "Diamond Tier",
    required: 10000,
    reward: 1000,
    status: "locked",
    color: "text-blue-300",
  },
];
const achievements = [
  {
    title: "Login Daily Streak",
    description: "Login for 7 consecutive days",
    reward: 25,
    progress: 100,
    status: "claimable",
    icon: <FaBolt className="text-yellow-400" />,
  },
  {
    title: "Referral Master",
    description: "Refer 5 friends to the platform",
    reward: 50,
    progress: 60,
    status: "in-progress",
    icon: <FaUserFriends className="text-red-400" />,
  },
  {
    title: "Token Holder",
    description: "Hold token for 28 days",
    reward: 75,
    progress: 40,
    status: "in-progress",
    icon: <FaStar className="text-yellow-300" />,
  },
  {
    title: "Active Trader",
    description: "Complete 10 token transactions",
    reward: 55,
    progress: 70,
    status: "in-progress",
    icon: <FaChartLine className="text-cyan-400" />,
  },
];
export default function Leaderboard() {
 
const [activeTab, setActiveTab] = useState("rewards");
  const filteredReferrals =
    activeTab === "All"
      ? referrals
      : referrals.filter((r) => r.status === activeTab);

  const totalRewards = referrals
    .filter((r) => r.status === "Completed")
    .reduce((sum, r) => sum + (r.reward || 0), 0);

     const currentPoints = 750;
  const targetPoints = 1000;
  const progressPercent = (currentPoints / targetPoints) * 100;

  return (
    <div className="relative min-h-screen flex flex-col pb-10">
      {/* Background Images */}
      <Image
        src={bgImageMobile}
        alt="Background Mobile"
        fill
        className="object-cover pointer-events-none select-none -z-10 block md:hidden"
        priority
      />
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 hidden md:block"
        priority
      />

      <div className="min-h-screen  text-white p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl lg:px-6 py-4  min-h-[120px] space-y-4 md:space-y-0">
          <div className="w-full ">
            <h2 className="text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-[#C084FC] to-[#3B82F6] bg-clip-text text-transparent text-2xl md:text-[30px]">
               Rewards & Achievements
              </span>
            </h2>
           <div className="flex border border-white bg-[#280D50] rounded-lg overflow-hidden text-sm font-medium w-full p-2 my-3">
        <button
          className={`flex-1 px-4 py-2 text-center transition rounded-lg ${
            activeTab === "rewards"
              ? "bg-[#8B5CF6] text-white"
              : "bg-transparent text-purple-300 hover:bg-purple-900"
          }`}
          onClick={() => setActiveTab("rewards")}
        >
          Progress Rewards
        </button>
        <button
          className={`flex-1 px-4 py-2 text-center transition rounded-lg ${
            activeTab === "achievements"
              ? "bg-[#8B5CF6] text-white"
              : "bg-transparent text-purple-300 hover:bg-purple-900"
          }`}
          onClick={() => setActiveTab("achievements")}
        >
          Achievements
        </button>
      </div>

      {/* Tab Content Placeholder */}
      <div className="mt-4">
        {activeTab === "rewards" ? (
            <div>

          <div className="bg-[#321B67] text-white rounded-xl p-5 space-y-4 w-full  mx-auto">
      {/* Tier Info */}
      <div className="flex items-center gap-2 text-sm font-semibold">
        <FaTrophy className="text-yellow-400" />
        <span>
          Current Tier: <span className="text-white">Bronze</span>
        </span>
      </div>
      <p className="text-sm text-white/80">You have earned {currentPoints} points</p>

      {/* Progress Bar Label */}
      <div className="text-sm font-medium">Progress to Silver</div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-[#1f103f] rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-white transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
        <span className="absolute right-0 top-[-20px] text-xs text-white">
          {Math.round(progressPercent)}%
        </span>
      </div>

      {/* Progress Text */}
      <div className="text-xs text-white/60">
        {currentPoints} / {targetPoints} points needed
      </div>
    </div>
     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2  mx-auto mt-4">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`rounded-xl p-4 flex flex-col justify-between min-h-[130px] shadow-lg ${
            tier.status === "claimable"
              ? "bg-gradient-to-br from-[#5C3098] to-[#2E1254]"
              : "bg-[#6B21A84D] border border-white/10"
          }`}
        >
          {/* Tier Name and Icon */}
          <div className="flex items-center gap-2 mb-2">
            <FaTrophy className={tier.color} />
            <h3 className="font-semibold text-white text-sm">{tier.name}</h3>
          </div>

          {/* Details */}
          <p className="text-xs text-white/70">
            {tier.required} points required
          </p>
          <p className="text-xs text-white/70 mb-4">
            Reward: {tier.reward} tokens
          </p>

          {/* Action Button */}
          {tier.status === "claimable" ? (
            <button className="self-end bg-[#0F172A] text-[#F8FAFC] text-xs font-semibold px-3 py-1 rounded-md hover:opacity-90 transition">
              Claim
            </button>
          ) : (
            <button
              className="self-end bg-[#E2E8F0] text-[#020817] text-xs font-semibold px-3 py-1 rounded-md cursor-not-allowed"
              disabled
            >
              Locked
            </button>
          )}
        </div>
      ))}
    </div>
            </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2  mx-auto">
      {achievements.map((ach, index) => (
        <div
          key={index}
          className={`rounded-xl p-4 shadow-md flex flex-col justify-between min-h-[130px] ${
            ach.status === "claimable"
              ? "bg-gradient-to-br from-[#5C3098] to-[#2E1254]"
              : "bg-[#ffffff0a] border border-white/10"
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            {ach.icon}
            <h3 className="font-semibold text-white text-sm">{ach.title}</h3>
          </div>
          <p className="text-xs text-white/70 mb-1">{ach.description}</p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-[#1f103f] rounded-full overflow-hidden mb-2">
            <div
              className="bg-white h-full transition-all"
              style={{ width: `${ach.progress}%` }}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-auto">
            <span className="text-xs text-white/70">
              Reward: {ach.reward} tokens
            </span>
            {ach.status === "claimable" ? (
              <button className="bg-[#0F172A] text-[#F8FAFC] text-xs font-semibold px-3 py-1 rounded-md hover:opacity-90 transition">
                Claim
              </button>
            ) : (
              <button
                className="bg-[#E2E8F0] text-[#020817] text-xs font-semibold px-3 py-1 rounded-md"
                disabled
              >
                In Progress
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
        )}
      </div>
          </div>
      
        </div>
      
      </div>
    </div>
  );
}
