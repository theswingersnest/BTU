"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import avatar from "@/assets/Images/rocketleague.png"
import bgImageWallet from "@/assets/Images/referralbg.png"
import Link from "next/link"

// Animation variants for staggered lists
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Layout({ children }) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const [profileData, setProfileData] = useState(null)
  const [friendsData, setFriendsData] = useState(null)
  console.log("🚀 ~ Layout ~ friendsData:", friendsData)

  const fetchProfile = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null
      const response = await fetch(`${API_BASE_URL}/auth/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      console.log("response.status", response.status)

      if (response.status === 401) {
        window.location.href = "/login"
        return
      }

      const data = await response.json()
      setProfileData(data)
    } catch (err) {
      console.error("Profile fetch error:", err)
    }
  }

  const getFriends = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null
      const response = await fetch(`${API_BASE_URL}/friends`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      setFriendsData(data)
    } catch (err) {
      console.error("Friends fetch error:", err)
    }
  }

  useEffect(() => {
    fetchProfile()
    getFriends()
  }, [])

  const friends = [
    { name: "StarCrusher", color: "bg-blue-500" },
    { name: "VoidWalker", color: "bg-purple-500" },
    { name: "CosmicRider", color: "bg-cyan-400" },
    { name: "NebulaKnight", color: "bg-indigo-400" },
  ]

  const [activeTab, setActiveTab] = useState("profile")

  const tournaments = [
    {
      name: "Speed Rush Tournament",
      stage: "Racing Pro",
      date: "2025-07-20",
      time: "15:30",
      prize: "2,500BTX",
      entry: "$25",
      level: "Intermediate",
      progress: "64/128",
      fillingFast: true,
    },
    {
      name: "Conqueror Trophy",
      stage: "Quarter-Final",
      date: "2025-07-20",
      time: "15:30",
      prize: "3700BTX",
      entry: "25BTX",
      level: "Intermediate",
      progress: "64/128",
      fillingFast: true,
    },
  ]
  const tabs = ["profile", "achievements", "inventory", "settings"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative container m-auto pb-10"
    >
      <div className="min-h-screen text-white p-6">
        <section className="w-full px-4 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bebas-neue tracking-wider text-center text-xl sm:text-5xl font-extrabold mb-2 text-white"
          >
            Profile & Avatar
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 my-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 capitalize w-[120px] rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-[#8A2BE2] text-white"
                      : "bg-[#3B206366] text-gray-300 hover:bg-[#9333EA] hover:text-white"
                  }
                `}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-12 lg:col-span-3"
            >
              <div className="bg-[#301852] border border-[#301852] rounded-xl p-5">
                <div className="relative z-10 flex flex-col items-center text-white">
                  {/* Profile Image and Level */}
                  <div className="relative flex-shrink-0 mb-6">
                    <Image
                      src="https://placehold.co/80x80/8A2BE2/FFFFFF?text=User"
                      alt="User Avatar"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md transform translate-x-1/4 translate-y-1/4">
                      Lv. 42
                    </div>
                  </div>

                  {/* User Name and XP */}
                  <h1 className="text-2xl font-bold mb-2">
                    {profileData?.username}
                  </h1>
                  <div className="w-full bg-purple-600 rounded-full h-2.5 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-blue-400 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-purple-300 text-sm mb-6">
                    7,500 / 10,000 XP
                  </p>

                  {/* Quick Stats Section */}
                  <div className="w-full text-left mb-8">
                    <h2 className="text-purple-200 text-lg font-semibold mb-3">
                      Quick Stats
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-2"
                    >
                      <motion.div variants={itemVariants} className="flex justify-between items-center">
                        <p className="text-purple-300">Battles Won</p>
                        <p className="text-blue-300 font-medium">1,247</p>
                      </motion.div>
                      <motion.div variants={itemVariants} className="flex justify-between items-center">
                        <p className="text-purple-300">Achievements</p>
                        <p className="text-yellow-300 font-medium">89</p>
                      </motion.div>
                      <motion.div variants={itemVariants} className="flex justify-between items-center">
                        <p className="text-purple-300">Rank</p>
                        <p className="text-pink-300 font-medium">Diamond</p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Friends Online Section */}
                  <div className="w-full text-left">
                    <h2 className="text-white text-lg font-semibold mb-4">
                      Friends ({friendsData?.length || "0"})
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-3"
                    >
                      {friendsData?.map((data, index) => (
                        <motion.div variants={itemVariants} className="flex items-center" key={data.id || index}>
                          <Image
                            src="https://placehold.co/32x32/4A0E4B/FFFFFF?text=S"
                            alt="StarCrusher"
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full mr-3 object-cover"
                          />
                          <p className="text-white flex-grow">
                            {data.friend_username}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="col-span-12 lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#301852] border border-[#301852] rounded-xl p-5"
              >
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Profile Image and Level */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src="https://placehold.co/120x120/8A2BE2/FFFFFF?text=User"
                      alt="User Avatar"
                      width={120}
                      height={120}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-400 object-cover shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform translate-x-1/4 translate-y-1/4">
                      Lv. 42
                    </div>
                  </div>

                  {/* User Info and Stats */}
                  <div className="flex-grow text-white text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-1">
                      {profileData?.username}
                    </h1>
                    <p className="text-purple-200 text-sm md:text-base mb-2">
                      Galactic Explorer • Online
                    </p>
                    <p className="text-purple-300 text-sm md:text-base mb-4">
                      7,500 / 10,000 XP to next level
                    </p>

                    {/* Badges/Icons */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex justify-center md:justify-start space-x-3 mb-6"
                    >
                      <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg
                          className="w-6 h-6 text-purple-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg
                          className="w-6 h-6 text-purple-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11.085 19.085a2 2 0 01-2.17 0L1 10.915V1a1 1 0 011-1h16a1 1 0 011 1v9.915l-7.915 8.17zM10 16.5l-5-5V4h10v7.5l-5 5z" />
                        </svg>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} variants={itemVariants} className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg
                          className="w-6 h-6 text-purple-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-5 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-9.192 7.778l-1.414 1.414a2 2 0 000 2.828l5.657 5.657a2 2 0 002.828 0l1.414-1.414L10.586 15l-7.071-7.071z" />
                        </svg>
                        Edit Profile
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-5 py-2 bg-[#3B82F6] hover:bg-purple-800 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Share Profile
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-5 py-2 bg-[#3B82F6] hover:bg-purple-800 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Add Friend
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-5 py-2 bg-[#3B82F6] hover:bg-purple-800 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.173-.953L2 17l1.339-3.124A7.94 7.94 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Message
                      </motion.button>
                    </div>
                    <div className="space-y-4 md:space-y-0 md:space-x-4 ">
                      <Link href="/leaderboard">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full md:w-auto px-8 py-3 bg-[#3B206336] border boder-[#FFFFFF1A] text-white text-lg rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Leaderboard
                        </motion.button>
                      </Link>
                      <Link href="/shop">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full md:w-auto px-8 py-3 bg-[#3B206336] border boder-[#FFFFFF1A] text-white text-lg rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Shop
                        </motion.button>
                      </Link>
                      <Link href="/tournaments">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full md:w-auto px-8 py-3 bg-[#3B206336] border boder-[#FFFFFF1A] text-white text-lg rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Tournaments
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-[#301852] border border-[#301852] rounded-xl overflow-hidden p-10 my-5"
              >
                {activeTab == "profile" ? (
                  <div className="relative z-10">
                    <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                      PROFILE - RECENT ACTIVITY
                    </h2>
                    <p className="text-purple-300 text-sm md:text-base mb-6">
                      Track your progress and unlock new rewards
                    </p>

                    {/* Activity List */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {/* Activity Item 1 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Defeated Cosmic Dragon
                          </p>
                          <p className="text-purple-300 text-sm">2 hours ago</p>
                        </div>
                      </motion.div>

                      {/* Activity Item 2 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11.085 19.085a2 2 0 01-2.17 0L1 10.915V1a1 1 0 011-1h16a1 1 0 011 1v9.915l-7.915 8.17zM10 16.5l-5-5V4h10v7.5l-5 5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Reached Diamond Rank
                          </p>
                          <p className="text-purple-300 text-sm">1 day ago</p>
                        </div>
                      </motion.div>

                      {/* Activity Item 3 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Completed Weekly Challenges
                          </p>
                          <p className="text-purple-300 text-sm">3 days ago</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : activeTab == "achievements" ? (
                  <div className="relative z-10">
                    <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                      Achievements
                    </h2>
                    <p className="text-purple-300 text-sm md:text-base mb-6">
                      Track your progress and unlock new rewards{" "}
                    </p>

                    {/* Activity List */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {/* Activity Item 1 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Master Explorer - Discover 50 Planets{" "}
                          </p>
                          <p className="text-purple-300 text-sm">2 hours ago</p>
                        </div>
                      </motion.div>

                      {/* Activity Item 2 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11.085 19.085a2 2 0 01-2.17 0L1 10.915V1a1 1 0 011-1h16a1 1 0 011 1v9.915l-7.915 8.17zM10 16.5l-5-5V4h10v7.5l-5 5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Legendary Warrior - Win 1000 Battles{" "}
                          </p>
                          <p className="text-purple-300 text-sm">1 day ago</p>
                        </div>
                      </motion.div>

                      {/* Activity Item 3 */}
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center bg-purple-800/50 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Next Task Uploaded Soon{" "}
                          </p>
                          <p className="text-purple-300 text-sm">3 days ago</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : activeTab == "inventory" ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden"
                  >
                    <div className="relative z-10 text-white">
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        INVENTORY SYSTEM
                      </h2>
                      <p className="text-purple-300 text-sm md:text-base mb-8">
                        Manage your weapons, armor, and consumables here.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Inventory Item: Weapons */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.057 11.952 11.952 0 005.174 13.31a12.083 12.083 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Weapons (12)</p>
                        </motion.div>

                        {/* Inventory Item: Armor */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Armor (8)</p>
                        </motion.div>

                        {/* Inventory Item: Items */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Items (24)</p>
                        </motion.div>

                        {/* Inventory Item: Consumables */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 7h.01M7 3h5.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-5.5c-.69 0-1.25-.56-1.25-1.25V4.25C5.75 3.56 6.31 3 7 3zm10.5 0h.01M17.5 3h.01M17.5 3h-5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25V4.25C18.75 3.56 18.19 3 17.5 3z"
                            />
                          </svg>
                          <p className="text-lg font-medium">
                            Consumables (15)
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="relative z-10 text-white">
                      <h2 className="text-xl md:text-2xl font-bold mb-8">
                        SETTINGS & PREFERENCES
                      </h2>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        {/* Setting Item: Audio Settings */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19V6l12-3v13M9 19c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12-3c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zM9 9l12-3"
                            />
                          </svg>
                          <p className="text-lg font-medium">Audio Settings</p>
                        </motion.div>

                        {/* Setting Item: Controls */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Controls</p>
                        </motion.div>

                        {/* Setting Item: Display */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 18l-4 4H4l4-4m-4-4h.01M16 18l4 4h-4l-4-4z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Display</p>
                        </motion.div>

                        {/* Setting Item: Privacy */}
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center justify-center p-4 bg-purple-800/50 rounded-lg shadow-md hover:bg-purple-700/60 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                          <svg
                            className="w-10 h-10 text-white mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <p className="text-lg font-medium">Privacy</p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}