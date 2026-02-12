"use client"
import { useEffect, useState } from "react"
import {
  Home,
  User,
  Wallet,
  Gift,
  Sparkles,
  Settings,
  HelpCircle,
  Gamepad2,
} from "lucide-react"
import { useRouter } from "next/navigation"
import gamesData from "@/app/games.json"

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
import { Star, ThumbsUp, Eye, Share2 } from "lucide-react"
import { Banknote, ShieldCheck, Trophy, Gem } from "lucide-react" // You can customize icons

import toast from "react-hot-toast"

import gameDetailBG from "@/assets/Images/gameDetailBG.jpg"
import r1 from "@/assets/Images/recommended/r1.png"
import r2 from "@/assets/Images/recommended/r2.png"
import r3 from "@/assets/Images/recommended/r3.png"
import r4 from "@/assets/Images/recommended/r4.png"
import r5 from "@/assets/Images/recommended/r5.png"
import r6 from "@/assets/Images/recommended/r6.png"

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

const rewardData = [
  {
    title: "First Spin",
    desc: "Hit the slots for the first time.",
    rarity: "100.0%",
    isFreebie: true,
    wonYesterday: "132,678",
    wonEver: "19,999,423",
    icon: <Banknote size={32} />,
  },
  {
    title: "This is Blackjack",
    desc: "Hit your first natural 21.",
    rarity: "100.0%",
    isFreebie: true,
    wonYesterday: "155,461",
    wonEver: "23,456,619",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "High Roller",
    desc: "Bet $1000+ in a single hand.",
    rarity: "99%",
    isFreebie: true,
    wonYesterday: "189,678",
    wonEver: "1,449,423",
    icon: <Trophy size={32} />,
  },
  {
    title: "Diamond VIP",
    desc: "Reach VIP Diamond status.",
    rarity: "99%",
    isFreebie: true,
    wonYesterday: "189,678",
    wonEver: "1,449,423",
    icon: <Gem size={32} />,
  },
]

export default function Homes({ params }) {
  const router = useRouter()
  const { slug } = params
  const { casinoSlots } = gamesData
  const [showModal, setShowModal] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLike, setIsLike] = useState(false)
  const [activeTab, setActiveTab] = useState("About")
  const tabs = ["About"]

  const game = gamesData.casinoSlots.find(
    (g) =>
      g.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "") === slug,
  )

  const recommendedGames = [...casinoSlots]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)


    const copyToClipboard = () => {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard
          .writeText(gameLink)
          .then(() => {
            setCopied(true)
            toast.success("Link copied!")
            setTimeout(() => setCopied(false), 2000)
          })
          .catch((err) => {
            toast.error("Failed to copy link")
            console.error("Clipboard error:", err)
          })
      } else {
        toast.error("Clipboard not supported")
      }
    }
  
    useEffect(() => {
      const gameId = game?.id
      if (!gameId) return
  
      const likeStorage = JSON.parse(localStorage.getItem("likeStatus") || "{}")
      const favoriteStorage = JSON.parse(
        localStorage.getItem("favoriteStatus") || "{}",
      )
  
      setIsLike(likeStorage[gameId] || false)
      setIsFavorite(favoriteStorage[gameId] || false)
    }, [game?.id])
  
    const toggleFavorite = () => {
      const gameId = game?.id
      if (!gameId) return
      const favorites = JSON.parse(localStorage.getItem("favoriteStatus") || "{}")
      const newStatus = !favorites[gameId]
      favorites[gameId] = newStatus
      localStorage.setItem("favoriteStatus", JSON.stringify(favorites))
      setIsFavorite(newStatus)
    }
  
    const toggleLike = () => {
      const gameId = game?.id
      if (!gameId) return
      const likes = JSON.parse(localStorage.getItem("likeStatus") || "{}")
      const newStatus = !likes[gameId]
      likes[gameId] = newStatus
      localStorage.setItem("likeStatus", JSON.stringify(likes))
      setIsLike(newStatus)
    }

  const stats = [
    { label: "Active", value: "2,421" },
    { label: "Favorites", value: "815,965" },
    { label: "Visits", value: `55.3M+` },
    { label: "Voice Chat", value: "Not Supported" },
    { label: "Camera", value: "Not Supported" },
    { label: "Created", value: "3/28/2025" },
    { label: "Updated", value: "7/18/2025" },
    { label: "Server Size", value: "18" },
    { label: "Genre", value: "Casino" },
  ]

  return (
    <div className="relative min-h-screen flex flex-col pb-10">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10"
        priority
      />
      <div className="max-w-[1700px] mx-auto text-white p-6">
        <button
          onClick={() => router.push("/newhome")}
          className="cursor-pointer bg-[#301852] rounded-xl px-3 py-2 text-white flex items-center justify-center gap-1"
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
        </button>
        <main className="text-white my-4">
          <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={gameDetailBG} // Make sure to import this or use your image path
              alt="Royal Blackjack"
              layout="fill"
              objectFit="cover"
              className="brightness-[0.4]"
              priority
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                  {game.title}
                </h1>
                <p className="opacity-90">
                  By Vegas Casino Studios <span className="mx-1">/</span> <br />{" "}
                  Maturity: 18+ <span className="mx-1">•</span> Develop by Big
                  Time Universe
                </p>
              </div>

              {/* CTA + Footer Info */}
              <div>
                <a
                  href={game?.action}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-[#7A59FF] cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:bg-[#6746d6] transition"
                >
                  PLAY NOW
                </a>
                <div className="flex gap-3 mt-2 text-sm cursor-pointer h-[49px] mt-4">
                  {!isFavorite ? (
                    <div
                      onClick={() => {
                        toggleFavorite()
                        toast.success("Add To Favorite")
                      }}
                      className="flex flex-col items-center justify-center"
                    >
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1045_1839)">
                          <path
                            d="M21.0024 26.2208C20.8024 26.2208 20.7024 26.2208 20.5024 26.1208L14.0024 22.4207L7.50249 26.1208C7.20249 26.3208 6.80249 26.3208 6.40249 26.1208C6.10249 25.9208 5.90249 25.5208 6.00249 25.1208L6.90249 17.6208L2.20249 12.9207C1.90249 12.6207 1.80249 12.2207 2.00249 11.9207C2.10249 11.5207 2.40249 11.3208 2.80249 11.2208L9.30249 10.3208L13.1024 3.72075C13.5024 3.12075 14.5024 3.12075 14.8024 3.72075L18.6024 10.3208L25.1024 11.2208C25.5024 11.3208 25.8024 11.5207 25.9024 11.9207C26.0024 12.3207 25.9024 12.7207 25.7024 12.9207L21.0024 17.6208L21.9024 25.1208C21.9024 25.5208 21.8024 25.8208 21.5024 26.1208C21.4024 26.1208 21.2024 26.2208 21.0024 26.2208ZM14.0024 20.2208C14.2024 20.2208 14.3024 20.2208 14.5024 20.3208L19.8024 23.3208L19.0024 17.3208C19.0024 17.0208 19.1024 16.7208 19.3024 16.5208L22.9024 12.9207L17.9024 12.2208C17.6024 12.2208 17.3024 12.0208 17.2024 11.7208L14.0024 6.22075L10.9024 11.7208C10.7024 12.0208 10.5024 12.2208 10.2024 12.2208L5.20249 12.9207L8.80249 16.5208C9.00249 16.7208 9.10249 17.0208 9.10249 17.3208L8.30249 23.3208L13.6024 20.3208C13.7024 20.2208 13.8024 20.2208 14.0024 20.2208Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1045_1839">
                            <rect
                              width="28"
                              height="28"
                              fill="white"
                              transform="translate(0 0.220703)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span> Favorite</span>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        toggleFavorite()
                        toast.error("Removed from favorite")
                      }}
                      className="flex flex-col items-center justify-center"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>

                      <span> Favorited</span>
                    </div>
                  )}

                  {isLike ? (
                    <div
                      onClick={() => {
                        toggleLike()
                        toast.success("Liked this Game")
                      }}
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1045_1926)">
                          <path
                            d="M20 25.2206H10C9.9 25.2206 9.8 25.2206 9.7 25.1206L3.7 23.1206C3.3 23.0206 3 22.6206 3 22.2206V13.2206C3 12.6206 3.4 12.2206 4 12.2206H8.5L12.1 7.7206L13 3.9206C13.1 3.5206 13.5 3.12061 14 3.12061H17C17.4 3.12061 17.7 3.3206 17.9 3.7206L18.9 5.7206C19 5.9206 19 6.0206 19 6.2206V9.2206C19 9.4206 19 9.52061 18.9 9.62061L17.6 12.2206H23C23.4 12.2206 23.8 12.5206 23.9 12.9206L24.9 15.9206C25 16.2206 25 16.4206 24.8 16.7206L20.8 24.7206C20.7 25.0206 20.4 25.2206 20 25.2206ZM10.2 23.2206H19.4L22.9 16.1206L22.3 14.2206H16C15.7 14.2206 15.3 14.0206 15.1 13.7206C14.9 13.4206 14.9 13.0206 15.1 12.7206L17 8.9206V6.4206L16.4 5.2206H14.8L14 8.4206C14 8.5206 13.9 8.7206 13.8 8.8206L9.8 13.8206C9.6 14.1206 9.3 14.2206 9 14.2206H5V21.5206L10.2 23.2206Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1045_1926">
                            <rect
                              width="28"
                              height="28"
                              fill="white"
                              transform="translate(0 0.220703)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>10.8K</span>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        toggleLike()
                        toast.error("Unlike this Game")
                      }}
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7L14.17 2 7.59 8.59A2 2 0 0 0 7 10v9a2 2 0 0 0 2 2h9c.82 0 1.54-.5 1.84-1.22L22.54 12.6c.29-.68.46-1.4.46-2.1v-.5l-.01-.5H23z" />
                      </svg>

                      <span>10.8K</span>
                    </div>
                  )}

                  <div
                    onClick={() => setShowModal(true)}
                    className="flex flex-col items-center justify-center"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4974 13.9999C10.4974 14.7735 10.1901 15.5153 9.64312 16.0623C9.09614 16.6093 8.35428 16.9166 7.58073 16.9166C6.80718 16.9166 6.06532 16.6093 5.51833 16.0623C4.97135 15.5153 4.66406 14.7735 4.66406 13.9999C4.66406 13.2264 4.97135 12.4845 5.51833 11.9375C6.06532 11.3905 6.80718 11.0833 7.58073 11.0833C8.35428 11.0833 9.09614 11.3905 9.64312 11.9375C10.1901 12.4845 10.4974 13.2264 10.4974 13.9999Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.3333 7.58325L10.5 11.6666M16.3333 20.4166L10.5 16.3333"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22.1615 21.5833C22.1615 22.3569 21.8542 23.0987 21.3072 23.6457C20.7602 24.1927 20.0183 24.5 19.2448 24.5C18.4712 24.5 17.7294 24.1927 17.1824 23.6457C16.6354 23.0987 16.3281 22.3569 16.3281 21.5833C16.3281 20.8098 16.6354 20.0679 17.1824 19.5209C17.7294 18.974 18.4712 18.6667 19.2448 18.6667C20.0183 18.6667 20.7602 18.974 21.3072 19.5209C21.8542 20.0679 22.1615 20.8098 22.1615 21.5833ZM22.1615 6.41667C22.1615 7.19021 21.8542 7.93208 21.3072 8.47906C20.7602 9.02604 20.0183 9.33333 19.2448 9.33333C18.4712 9.33333 17.7294 9.02604 17.1824 8.47906C16.6354 7.93208 16.3281 7.19021 16.3281 6.41667C16.3281 5.64312 16.6354 4.90125 17.1824 4.35427C17.7294 3.80729 18.4712 3.5 19.2448 3.5C20.0183 3.5 20.7602 3.80729 21.3072 4.35427C21.8542 4.90125 22.1615 5.64312 22.1615 6.41667Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <span>Share</span>
                  </div>
                  {showModal && (
                    <>
                      <div className="fixed inset-0 z-50 h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
                        <div className="bg-gradient-to-b from-[#6C3386] to-[#562357] p-6 rounded-xl w-[90%] max-w-md shadow-xl text-white">
                          <h2 className="font-bebas-neue tracking-wider text-4xl font-normal mb-4">
                            SHARE GAME
                          </h2>

                          <p className="mb-2 text-sm font-semibold">
                            Game Link
                          </p>
                          <div className="flex">
                            <input
                              type="text"
                              value={gameLink}
                              readOnly
                              className="flex-1 px-3 py-2 rounded-l-md bg-gradient-to-r from-gray-300 to-gray-400 text-black text-sm"
                            />
                            <button
                              onClick={copyToClipboard}
                              className="cursor-pointer px-4 bg-[#301852] text-white text-sm font-semibold rounded-r-md hover:bg-[#301852bd]"
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
                              className="bg-[#301852] rounded-lg hover:bg-[#301852bd] py-2 px-10 text-white text-sm"
                            >
                              Twitter
                            </a>
                            <a
                              href={`https://discord.com/channels/@me`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#301852] rounded-lg hover:bg-[#301852bd] py-2 px-10 text-white text-sm"
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
                </div>
               
              </div>
            </div>
          </div>

          {/* Tabs section  */}
          <div className="w-full mt-6 px-2">
            <div className="grid grid-cols-3 p-1 rounded-xl shadow-inner overflow-hidden gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` w-full cursor-pointer text-sm sm:text-base py-2 px-4 rounded-xl transition-all duration-300 
              ${
                activeTab === tab
                  ? "bg-[#7A59FF] text-white"
                  : "bg-[#301852]  text-gray-300"
              }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab == "About" ? (
            <>
              {/* Detail Section  */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">{game.title}</h2>
                <p className="text-gray-300 text-sm mb-6">
                  {game.description} 🃏⚡
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-gray-300 text-sm mb-6 bg-[#7A59FF82] rounded-full py-2 px-3">
                    Maturity: 18+
                  </p>
                  <p className="text-gray-300 text-sm mb-6 bg-[#7A59FF82] rounded-full py-2 px-3">
                    Suitable for everyone
                  </p>
                </div>
              </div>

              {/* Stats Section  */}
              {/* <div className="rounded-xl my-5 border boder-[#FFFFFF0D] overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 text-white text-center overflow-hidden">
                  {stats.map((stat, index) => (
                    <div
                      key={`label-${index}`}
                      className="bg-[#301852] font-normal text-sm py-2"
                    >
                      {stat.label}
                    </div>
                  ))}
                  {stats.map((stat, index) => (
                    <div
                      key={`value-${index}`}
                      className="text-sm py-1 bg-black/[0.6]"
                    >
                      {stat.value}
                    </div>
                  ))}
                </div>
              </div> */}

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {rewardData.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-[#301852] text-white rounded-xl p-5 shadow-md text-center"
                  >
                    <div className="inline-flex p-5 rounded-full justify-center mb-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700]">
                      {reward.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{reward.desc}</p>
                    <p className="text-sm">
                      <span className="text-green-400 font-semibold">
                        Rarity: {reward.rarity}
                      </span>{" "}
                      {reward.isFreebie && <span>(Freebie)</span>}
                    </p>
                    <div className="mt-3 text-xs text-gray-200 space-y-1">
                      <p>
                        Won Yesterday:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonYesterday}
                        </span>
                      </p>
                      <p>
                        Won Ever:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonEver}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Recommended Experiences */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">
                  Recommended Experiences
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {recommendedGames?.map((game, index) => (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        const slug = game.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9\-]/g, "")
                        router.push(`/casinoslots/${slug}`)
                      }}
                    >
                      <div>
                        <Image
                          key={index}
                          src={game?.image}
                          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={230}
                          unoptimized
                          alt={`Screenshot R${index + 1}`}
                        />
                      </div>
                      <div className="mt-2">
                        <h4>{game?.title}</h4>
                        <div className="flex items-center gap-3 [&>span]:flex [&>span]:items-center [&>span]:gap-1">
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2503)">
                                <g clipPath="url(#clip1_1045_2503)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.203 7.62206C13.203 7.62206 12.149 7.62706 11.215 7.63006C10.679 7.69606 10.23 8.06906 10.1 8.60506L8.568 14.9501C8.474 15.3431 8.563 15.7511 8.813 16.0681C9.044 16.3621 9.384 16.5331 9.753 16.5591L11.685 16.5561C12.538 16.5561 13.273 15.9531 13.441 15.1161L14.525 9.71006C14.718 8.74906 14.105 7.84706 13.203 7.62206ZM7.306 14.7161L8.838 8.37106C8.903 8.10006 9.017 7.85106 9.165 7.62806L8.067 7.62306L8.885 3.17906C9.116 1.94706 8.171 0.810059 6.918 0.810059C6.561 0.810059 6.251 1.05406 6.166 1.39906L4.941 6.49206C4.762 7.19606 4.425 7.64306 3.789 7.64306C2.801 7.64306 2 8.44406 2 9.43306V14.7761C2 15.7651 2.801 16.5661 3.789 16.5661L7.659 16.5601C7.286 16.0201 7.15 15.3591 7.306 14.7161Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2503">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2503">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0 -31.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.rating}
                          </span>
                          <span>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2517)">
                                <g clipPath="url(#clip1_1045_2517)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.0409 14.8101C15.0409 12.8101 13.3309 10.9701 11.8809 9.81007C11.3623 9.37981 10.7738 9.04159 10.1409 8.81007C11.4331 8.42551 12.3195 7.23823 12.3209 5.89007V3.89007C12.321 3.08568 11.9981 2.31494 11.4247 1.75087C10.8512 1.1868 10.0752 0.876659 9.27094 0.890066H7.19094C5.53378 0.917202 4.20158 2.26272 4.19094 3.92007V5.92007C4.17798 7.27943 5.08072 8.47761 6.39094 8.84007C5.77438 9.0734 5.19758 9.40059 4.68094 9.81007C3.19094 10.9401 1.47094 12.8101 1.46094 14.8101V14.9501C1.46094 15.4301 4.87094 16.7601 8.25094 16.7601C11.6309 16.7601 15.0409 15.4301 15.0409 14.9501V14.8101ZM8.04094 15.2301C7.84773 15.3617 7.59814 15.3774 7.38989 15.2712C7.18164 15.165 7.04786 14.9537 7.04094 14.7201V11.0901C7.04786 10.8564 7.18164 10.6451 7.38989 10.5389C7.59814 10.4327 7.84773 10.4485 8.04094 10.5801L11.1909 12.9101L8.04094 15.2301Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2517">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.1875 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2517">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0.1875 -47.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.user_play}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : activeTab == "Store" ? (
            <>
              {/* Stats Section  */}
              <div className="rounded-xl my-5 border boder-[#FFFFFF0D] overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 text-white text-center overflow-hidden">
                  {stats.map((stat, index) => (
                    <div
                      key={`label-${index}`}
                      className="bg-[#301852] font-normal text-sm py-2"
                    >
                      {stat.label}
                    </div>
                  ))}
                  {/* Render the values for each statistic */}
                  {stats.map((stat, index) => (
                    <div
                      key={`value-${index}`}
                      className="text-sm py-1 bg-black/[0.6]"
                    >
                      {stat.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {rewardData.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-[#301852] text-white rounded-xl p-5 shadow-md text-center"
                  >
                    <div className="inline-flex p-5 rounded-full justify-center mb-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700]">
                      {reward.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{reward.desc}</p>
                    <p className="text-sm">
                      <span className="text-green-400 font-semibold">
                        Rarity: {reward.rarity}
                      </span>{" "}
                      {reward.isFreebie && <span>(Freebie)</span>}
                    </p>
                    <div className="mt-3 text-xs text-gray-200 space-y-1">
                      <p>
                        Won Yesterday:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonYesterday}
                        </span>
                      </p>
                      <p>
                        Won Ever:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonEver}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Recommended Experiences */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">
                  Recommended Experiences
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {recommendedGames?.map((game, index) => (
                    <div>
                      <div>
                        <Image
                          key={index}
                          src={game?.img}
                          alt={`Screenshot R${index + 1}`}
                          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2">
                        <h4>{game?.title}</h4>
                        <div className="flex items-center gap-3 [&>span]:flex [&>span]:items-center [&>span]:gap-1">
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2503)">
                                <g clipPath="url(#clip1_1045_2503)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.203 7.62206C13.203 7.62206 12.149 7.62706 11.215 7.63006C10.679 7.69606 10.23 8.06906 10.1 8.60506L8.568 14.9501C8.474 15.3431 8.563 15.7511 8.813 16.0681C9.044 16.3621 9.384 16.5331 9.753 16.5591L11.685 16.5561C12.538 16.5561 13.273 15.9531 13.441 15.1161L14.525 9.71006C14.718 8.74906 14.105 7.84706 13.203 7.62206ZM7.306 14.7161L8.838 8.37106C8.903 8.10006 9.017 7.85106 9.165 7.62806L8.067 7.62306L8.885 3.17906C9.116 1.94706 8.171 0.810059 6.918 0.810059C6.561 0.810059 6.251 1.05406 6.166 1.39906L4.941 6.49206C4.762 7.19606 4.425 7.64306 3.789 7.64306C2.801 7.64306 2 8.44406 2 9.43306V14.7761C2 15.7651 2.801 16.5661 3.789 16.5661L7.659 16.5601C7.286 16.0201 7.15 15.3591 7.306 14.7161Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2503">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2503">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0 -31.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.rating}
                          </span>
                          <span>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2517)">
                                <g clipPath="url(#clip1_1045_2517)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.0409 14.8101C15.0409 12.8101 13.3309 10.9701 11.8809 9.81007C11.3623 9.37981 10.7738 9.04159 10.1409 8.81007C11.4331 8.42551 12.3195 7.23823 12.3209 5.89007V3.89007C12.321 3.08568 11.9981 2.31494 11.4247 1.75087C10.8512 1.1868 10.0752 0.876659 9.27094 0.890066H7.19094C5.53378 0.917202 4.20158 2.26272 4.19094 3.92007V5.92007C4.17798 7.27943 5.08072 8.47761 6.39094 8.84007C5.77438 9.0734 5.19758 9.40059 4.68094 9.81007C3.19094 10.9401 1.47094 12.8101 1.46094 14.8101V14.9501C1.46094 15.4301 4.87094 16.7601 8.25094 16.7601C11.6309 16.7601 15.0409 15.4301 15.0409 14.9501V14.8101ZM8.04094 15.2301C7.84773 15.3617 7.59814 15.3774 7.38989 15.2712C7.18164 15.165 7.04786 14.9537 7.04094 14.7201V11.0901C7.04786 10.8564 7.18164 10.6451 7.38989 10.5389C7.59814 10.4327 7.84773 10.4485 8.04094 10.5801L11.1909 12.9101L8.04094 15.2301Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2517">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.1875 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2517">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0.1875 -47.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.user_play}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
