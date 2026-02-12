"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  User,
  Trophy,
  Wallet,
  Gift,
  Sparkles,
  Settings,
  HelpCircle,
  Gamepad2,
} from "lucide-react"
import { useRouter } from "next/navigation"
import bgImageWallet from "@/assets/Images/referralbg.png"
import hogwarts from "@/assets/Images/hogwarts.jpg"
import spiderman from "@/assets/Images/spiderman.jpeg"
import mortal from "@/assets/Images/mortal.jpg"
import forza from "@/assets/Images/forza.jpg"
import pubg from "@/assets/Images/pubg.jpg"
import hitman from "@/assets/Images/hitman.jpg"
import minecraft from "@/assets/Images/minecraft.jpg"
import forza1 from "@/assets/Images/forza1.jpg"
import gta from "@/assets/Images/gta.jpg"
import roblox from "@/assets/Images/roblox.jpg"
import Image from "next/image"
import Link from "next/link"
import { FaStar, FaDatabase, FaStarHalfAlt } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { MdStorage } from "react-icons/md"
import toast from "react-hot-toast"

const stats = [
  {
    value: "4.8",
    label: "Rating",
    icon: <FaStar className="text-yellow-400 text-lg" />,
  },
  {
    value: "2.5M",
    label: "Players",
    icon: <FaUserGroup className="text-pink-400 text-lg" />,
  },
  {
    value: "13+",
    label: "Age",
    icon: <FaDatabase className="text-green-400 text-lg" />,
  },
  {
    value: "85GB",
    label: "Size",
    icon: <MdStorage className="text-blue-400 text-lg" />,
  },
]

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

const reviewItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function Homes() {
  const [copied, setCopied] = useState(false)
  const gameLink = `https://gaming-app.com/1`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gameLink)
    setCopied(true)
    toast.success("Link copied!")
    setTimeout(() => setCopied(false), 2000)
  }

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    const fav = localStorage.getItem("favoriteStatus")
    setIsFavorite(fav === "true")
    const followingStatus = localStorage.getItem("followingStatus")
    setIsFollowing(followingStatus === "true")
  }, [])

  const toggleFavorite = () => {
    const newStatus = !isFavorite
    setIsFavorite(newStatus)
    localStorage.setItem("favoriteStatus", newStatus.toString())
  }
  const toggleFollowing = () => {
    const newStatus = !isFollowing
    setIsFollowing(newStatus)
    localStorage.setItem("followingStatus", newStatus.toString())
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [active, setActive] = useState("Home")
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const images = [roblox, spiderman, hogwarts, gta]

  const reviews = [
    {
      user: "Hermione_Granger",
      house: "Gryffindor",
      houseColor: "bg-red-600",
      stars: 5,
      text: "The attention to detail in recreating the wizarding world is absolutely magical! The spell-casting mechanics feel incredibly immersive.",
    },
    {
      user: "Draco_Malfoy",
      house: "Slytherin",
      houseColor: "bg-green-600",
      stars: 4.5,
      text: "Even someone of my refined taste can appreciate the dark arts implementation. The graphics are simply superior, as expected.",
    },
    {
      user: "Luna_Lovegood",
      house: "Ravenclaw",
      houseColor: "bg-blue-500",
      stars: 5,
      text: "The magical creatures are beautifully rendered! I spent hours just observing the Nargles… I mean, the fantastic beasts.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container m-auto relative px-10 py-10"
    >
      <div className="">
        <div className="w-full relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/newhome")}
            className="absolute top-3 z-10 left-3 cursor-pointer bg-[#301852] rounded-xl px-3 py-2 text-white flex items-center justify-center gap-1"
          >
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.47734 0.300781H5.14531C4.79961 0.992188 4.53887 1.47852 4.36309 1.75977C4.19316 2.03516 3.88262 2.4541 3.43145 3.0166H17.45V3.9043H3.43145C4.04082 4.53711 4.6209 5.44238 5.17168 6.62012H4.48613C3.73027 5.77637 3.07988 5.1377 2.53496 4.7041C1.99004 4.26465 1.42754 3.9043 0.847462 3.62305V3.22754C1.35723 3.01074 1.89629 2.67969 2.46465 2.23438C3.03301 1.78906 3.70391 1.14453 4.47734 0.300781Z"
                fill="white"
              />
            </svg>
            Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-[#1f093a] to-[#1f093a] border border-[#7A59FF] drop-shadow-[0_4px_6px_rgba(255,215,0,0.3)] rounded-lg p-8 text-center shadow-lg"
          >
            <h1 className="font-bebas-neue tracking-wider text-5xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              HOGWARTS LEGACY
            </h1>
            <p className="mt-2 text-sm sm:text-base text-purple-200">
              ⚡ Developed by Portkey Games • Published by Warner Bros. Games ⚡
            </p>
          </motion.div>
        </div>
        <main className="text-white my-10">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Image + Play Button + Price */}
            <div className="lg:col-span-2 flex flex-col space-y-4 ">
              {/* Game Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col gap-5 bg-[#1A0B2EF2] p-5 border border-2 border-[#6A0DAD] rounded-xl"
              >
                <div className=" rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={hogwarts}
                    alt="hogwarts"
                    className="h-[200px] md:h-[300px]"
                  />
                  {/* Play Button */}
                </div>
                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toast.error("Game is in Development")}
                    className="cursor-pointer bg-[#8A2BE2] px-10 py-2 rounded-md text-sm font-semibold"
                  >
                    Play
                  </motion.button>
                  {/* Price Overlay */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className=" text-lg font-bold"
                  >
                    59$
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-r from-[#1A0B2EE5] to-[#16213EE5] rounded-xl p-6 border border-purple-700"
              >
                <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                  🏰 Game Statistics
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-[#3B2063] rounded-lg p-4 text-center flex flex-col items-center justify-center"
                    >
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2 text-sm text-gray-300">
                        {stat.icon}
                        <span>{stat.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-gradient-to-r from-[#1b003a] to-[#240451] rounded-xl p-6 border border-purple-700"
              >
                <h2 className="text-lg font-bold mb-4">About This Game</h2>
                <p className="text-gray-300 text-sm mb-6">
                  Experience the wizarding world like never before in this
                  immersive, open-world action RPG. Set in the 1800s, you are a
                  student who holds the key to an ancient secret that threatens
                  to tear the wizarding world apart.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-lg overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        className="rounded-lg object-cover w-full h-24 hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Section - Pricing + Galleon Economy + Buttons */}
            <div className="flex flex-col space-y-6">
              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-b from-[#22153E] to-[#321C55] rounded-xl p-6"
              >
                <h2 className="text-lg font-bold mb-2">💰 Pricing</h2>
                <p>
                  <span className="font-semibold">Base Game:</span> $59.99
                </p>
                <p>
                  <span className="font-semibold">Deluxe Edition:</span> $79.99
                </p>
                <p className="text-xs text-gray-300 mt-2">
                  In-Game Purchases Available
                </p>
              </motion.div>

              {/* Galleon Economy */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-transparent border border-purple-700 rounded-xl p-6"
              >
                <h2 className="text-lg font-bold mb-4">Galleon Economy</h2>

                {/* Progress Bar */}
                <div className="w-full bg-[#3e0a64] rounded-full h-3 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                  ></motion.div>
                </div>

                <p className="text-sm text-gray-300">
                  Earn Galleons through quests, exploration, and magical
                  achievements. Use them for premium spells, cosmetics, and
                  exclusive content.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col space-y-3"
              >
                {!isFavorite ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      toggleFavorite()
                      toast.success("Add To Favorite")
                    }}
                    className="cursor-pointer flex items-center justify-center gap-3 border border-[#9B59B6] bg-[#503BA4] py-2 px-4 rounded text-sm font-semibold text-white"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.84649 11.8248L6.99648 9.92477L10.1465 11.8498L9.32148 8.24977L12.0965 5.84977L8.44648 5.52477L6.99648 2.12477L5.54648 5.49977L1.89648 5.82477L4.67148 8.24977L3.84649 11.8248ZM6.99648 11.1018L3.36648 13.2938C3.25982 13.3464 3.16082 13.3678 3.06948 13.3578C2.97882 13.3471 2.89048 13.3158 2.80448 13.2638C2.71782 13.2104 2.65248 13.1351 2.60848 13.0378C2.56448 12.9404 2.56048 12.8341 2.59648 12.7188L3.56248 8.60877L0.367484 5.83877C0.277484 5.76544 0.218151 5.67777 0.189485 5.57577C0.160818 5.47377 0.167151 5.3761 0.208485 5.28277C0.249818 5.18944 0.304818 5.11277 0.373485 5.05277C0.442818 4.99477 0.536151 4.95544 0.653485 4.93477L4.86948 4.56677L6.51348 0.67477C6.55882 0.56477 6.62415 0.485436 6.70949 0.436769C6.79482 0.388103 6.89048 0.36377 6.99648 0.36377C7.10248 0.36377 7.19848 0.388103 7.28448 0.436769C7.37048 0.485436 7.43548 0.56477 7.47948 0.67477L9.12348 4.56677L13.3385 4.93477C13.4565 4.95477 13.5502 4.99444 13.6195 5.05377C13.6888 5.11244 13.7442 5.18877 13.7855 5.28277C13.8262 5.3761 13.8322 5.47377 13.8035 5.57577C13.7748 5.67777 13.7155 5.76544 13.6255 5.83877L10.4305 8.60877L11.3965 12.7188C11.4338 12.8328 11.4302 12.9388 11.3855 13.0368C11.3408 13.1348 11.2752 13.2101 11.1885 13.2628C11.1032 13.3161 11.0148 13.3478 10.9235 13.3578C10.8328 13.3678 10.7342 13.3464 10.6275 13.2938L6.99648 11.1018Z"
                        fill="white"
                      />
                    </svg>
                    Add to Favorites
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      toggleFavorite()
                      toast.error("Removed from favorite")
                    }}
                    className="cursor-pointer flex items-center justify-center gap-3 border border-[#9B59B6] bg-[#3B2063] py-2 px-4 rounded text-sm font-semibold text-white"
                  >
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.32831 14.9231L4.56831 9.61013L0.445312 6.03813L5.87631 5.56813L8.00331 0.557129L10.1303 5.56713L15.5603 6.03713L11.4373 9.60913L12.6783 14.9221L8.00331 12.1021L3.32831 14.9231Z"
                        fill="white"
                      />
                    </svg>
                    Added
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer border border-[#9B59B6] bg-[#3B2063] py-2 rounded text-sm font-semibold"
                >
                  📤 Share This Game
                </motion.button>
                {showModal && (
                  <>
                    <div className="fixed inset-0 z-50 h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
                      <div className="bg-gradient-to-b from-[#6C3386] to-[#562357] p-6 rounded-xl w-[90%] max-w-md shadow-xl text-white">
                        <h2 className="font-bebas-neue tracking-wider text-4xl font-normal mb-4">
                          SHARE GAME
                        </h2>

                        <p className="mb-2 text-sm font-semibold">Game Link</p>
                        <div className="flex">
                          <input
                            type="text"
                            value={gameLink}
                            readOnly
                            className="flex-1 px-3 py-2 rounded-l-md bg-gradient-to-r from-gray-300 to-gray-400 text-black text-sm"
                          />
                          <button
                            onClick={copyToClipboard}
                            className="px-4 bg-gray-800 text-white text-sm font-semibold rounded-r-md hover:bg-gray-700"
                          >
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>

                        <hr className="my-5 border-gray-500" />

                        <p className="text-center mb-3 text-sm">
                          Share on Social Media
                        </p>
                        <div className="flex justify-center gap-4">
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                              gameLink,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2C2C2C] rounded-lg hover:bg-gray-900 py-2 px-10 text-white text-sm"
                          >
                            Twitter
                          </a>
                          <a
                            href={`https://discord.com/channels/@me`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2C2C2C] rounded-lg hover:bg-gray-900 py-2 px-10 text-white text-sm"
                          >
                            Discord
                          </a>
                        </div>

                        <div className="text-right mt-4">
                          <button
                            onClick={() => setShowModal(false)}
                            className="text-sm text-white hover:underline"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {!isFollowing ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      toggleFollowing()
                      toast.success("Following Developer")
                    }}
                    className="cursor-pointer border border-[#9B59B6] bg-[#503BA4] py-2 rounded text-sm font-semibold"
                  >
                    Follow Developer
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      toggleFollowing()
                      toast.success("UnFollow Developer")
                    }}
                    className="cursor-pointer border border-[#9B59B6] bg-[#3B2063] py-2 rounded text-sm font-semibold"
                  >
                    Following
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="w-full bg-gradient-to-r from-[#1A0B2EE5] to-[#533A71E5] border border-purple-700 rounded-xl p-4 sm:p-6 mt-5"
          >
            <h2 className="text-base sm:text-lg font-bold flex items-center gap-2 mb-4 sm:mb-6">
              ✨ WIZARD REVIEWS
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {reviews.map((r, index) => (
                <motion.div
                  key={index}
                  variants={reviewItemVariants}
                  className="bg-[#2E0B48] border border-[#FFD7004D] rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-base sm:text-lg font-bold">
                      {r.user[0]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      {/* Username + House */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-sm sm:text-base">
                          {r.user}
                        </span>
                        <span
                          className={`text-xs text-white px-2 py-1 rounded-xl ${r.houseColor}`}
                        >
                          {r.house}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex text-yellow-400">
                        {Array.from({ length: Math.floor(r.stars) }).map(
                          (_, i) => (
                            <FaStar key={i} className="w-4 h-4" />
                          ),
                        )}
                        {r.stars % 1 !== 0 && (
                          <FaStarHalfAlt className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 text-xs sm:text-sm mt-2">
                      "{r.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center gap-3 bg-[#2E0B48] rounded-lg text-white py-2 px-10"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 14V11.53L12.88 4.65C13.08 4.45 13.39 4.45 13.59 4.65L15.36 6.42C15.56 6.62 15.56 6.93 15.36 7.13L8.47 14H6ZM17 14H10.5L12.5 12H17C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z"
                      fill="white"
                    />
                  </svg>
                  Write a review
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}