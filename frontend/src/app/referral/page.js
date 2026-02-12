"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png"
import bgImageWallet from "@/assets/Images/referralbg.png"
import AlexJohnson from "@/assets/Images/Alex Johnson.png"
import MariaGarcia from "@/assets/Images/Maria Garcia.png"
import JamesWilson from "@/assets/Images/James Wilson.png"
import SarahLee from "@/assets/Images/svg fill.png"
import DavidBrown from "@/assets/Images/David Brown.png"
import Image from "next/image"
import { FiCopy, FiSearch } from "react-icons/fi"
import filterIcon from "@/assets/Images/filter.png"
import { FaFacebookF, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa"
import toast from "react-hot-toast"

const referrals = [
  {
    name: "Alex Johnson",
    date: "2025-06-18",
    status: "Completed",
    reward: 100,
    icon: AlexJohnson,
  },
  {
    name: "Maria Garcia",
    date: "2025-06-15",
    status: "Completed",
    reward: 100,
    icon: MariaGarcia,
  },
  {
    name: "James Wilson",
    date: "2025-06-20",
    status: "Pending",
    icon: JamesWilson,
  },
  {
    name: "Sarah Lee",
    date: "2025-06-10",
    status: "Completed",
    reward: 100,
    icon: SarahLee,
  },
  {
    name: "David Brown",
    date: "2025-06-21",
    status: "Pending",
    icon: DavidBrown,
  },
]

// Animation variants for staggered appearance
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

export default function Leaderboard() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const [referralCode, setReferralCode] = useState("")
  const [referralList, setReferralList] = useState([])
  const [refCode, setRefCode] = useState("")
  const [activeTab, setActiveTab] = useState("All")
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)
  const referralUrl = inputRef.current?.value

  const filteredReferrals =
    activeTab === "All"
      ? referrals
      : referrals.filter((r) => r.status === activeTab)

  const totalRewards = referrals
    .filter((r) => r.status === "Completed")
    .reduce((sum, r) => sum + (r.reward || 0), 0)

  const copyToClipboard = () => {
    const textToCopy = inputRef.current?.value
    if (!textToCopy) return

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopied(true)
          toast.success("Copied Sucessfully")
          setTimeout(() => setCopied(false), 2000)
        })
        .catch((err) => {
          console.error("❌ Copy failed:", err)
        })
    } else {
      // Fallback for insecure context
      const textarea = document.createElement("textarea")
      textarea.value = textToCopy
      textarea.style.position = "fixed" // Avoid scrolling to bottom
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()

      try {
        const success = document.execCommand("copy")
        if (success) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
      } catch (err) {
        console.error("Fallback copy failed", err)
      }

      document.body.removeChild(textarea)
    }
  }

  const getReferralCode = async () => {
    try {
      let token

      if (typeof window !== "undefined") {
        token = localStorage.getItem("accessToken")
      }
      const codeResponse = await fetch(`${API_BASE_URL}/referral/code`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const codeData = await codeResponse.json()
      const code = codeData?.code
      if (!code) {
        throw new Error("Referral code not found in response")
      }

      const verifyResponse = await fetch(`${API_BASE_URL}/referral/verify/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      })

      const verifyData = await verifyResponse.json()

      if (verifyResponse.ok && verifyData.exists) {
        localStorage.setItem("referralCode", code)
        setRefCode(code)
        console.log("✅ Referral code verified:", verifyData)
      } else {
        console.warn("❌ Referral verification failed:", verifyData)
      }
    } catch (err) {
      console.error("Leaderboard fetch error:", err)
    } finally {
      console.log("Finally")
    }
  }

  const getReferrals = async () => {
    try {
      let token
      if (typeof window !== "undefined") {
        token = localStorage.getItem("accessToken")
      }
      const response = await fetch(`${API_BASE_URL}/referral/referred/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      setReferralList(data)
      console.log("🚀 ~ getReferrals ~ data:", data)
    } catch (err) {
      console.error("Leaderboard fetch error:", err)
    } finally {
      console.log("FInally")
    }
  }

  useEffect(() => {
    const code = localStorage.getItem("referralCode")
    if (code) {
      setReferralCode(code)
    } else {
      getReferralCode()
    }

    getReferrals()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative container m-auto pb-10"
    >
      <div className="min-h-screen text-white p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl px-6 py-4 min-h-[120px] space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-[#C084FC] to-[#3B82F6] bg-clip-text text-transparent text-2xl md:text-[30px]">
                REFERRAL PROGRAM
              </span>
            </h2>
            <p className="text-sm mt-1">
              Invite friends and earn rewards together
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1F1339] text-white rounded-xl p-4 md:p-6 space-y-4 w-full"
        >
          {/* Heading */}
          <div>
            <h3 className="text-sm font-semibold">Your Referral link</h3>
            <p className="text-xs text-white/60 mt-1">
              Share this code with friends to earn rewards
            </p>
          </div>

          {/* Referral link box and icons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="flex-1 flex items-center bg-[#2C1A52] rounded-md px-4 py-2 border border-purple-700">
              <input
                ref={inputRef}
                value={`http://thebigtimeuniverse.com/signup/${refCode || referralCode}`}
                className="bg-transparent text-white text-sm flex-1 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyToClipboard}
                className="cursor-pointer text-purple-400 hover:text-purple-200 transition"
              >
                <FiCopy />
              </motion.button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition"
                title="Share on Twitter"
              >
                <FaTwitter size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition"
                title="Share on Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition"
                title="Share on WhatsApp"
              >
                <FaWhatsapp size={16} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyToClipboard}
                className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition cursor-pointer"
              >
                <FaLink size={16} />
              </motion.button>
            </div>
          </div>

          {/* Bonus message + share button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p className="text-xs text-white/60">
              <span className="font-semibold text-white">Bonus:</span> Both you
              and your friend get 100 tokens when they join
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center gap-1 bg-gradient-to-r from-[#7F5AF0] to-[#9D4EDD] text-white text-sm font-semibold rounded-lg px-4 py-2 shadow-md transition hover:opacity-90"
            >
              <FaLink size={14} />
              Share Referral
            </motion.button>
          </div>
        </motion.div>
        <div className="min-h-screen text-white py-6 flex flex-col lg:flex-row gap-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1B123A] rounded-xl p-6 w-full lg:w-1/3 space-y-4 shadow-lg"
          >
            <h2 className="text-lg font-bold mb-4">Referral Stats</h2>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">12</p>
                <p>Total Referrals</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">3</p>
                <p>Pending</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">9</p>
                <p>Completed</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">{totalRewards}</p>
                <p>Total Rewards</p>
              </motion.div>
            </div>
            <div className="mt-6 text-sm">
              <p className="mb-1">Next reward tier</p>
              <div className="w-full bg-[#32275F] rounded-full h-2 mb-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="bg-[#7F5AF0] h-2 rounded-full"
                />
              </div>
              <p className="text-xs text-white/70">
                9/10 — 1 more completed referral to unlock bonus rewards
              </p>
            </div>
          </motion.div>

          {/* Referrals List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#1B123A] rounded-xl p-6 w-full lg:w-2/3 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Your Referrals</h2>
              <p className="text-sm text-white/50">{referrals.length} Total</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-4 text-sm">
              {["All", "Pending", "Completed"].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer px-4 py-1 rounded-full font-medium transition ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "bg-[#2A1B4F] text-white/70 hover:bg-[#3B2B67]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Referral List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3 text-sm"
            >
              {filteredReferrals.map((ref, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-between items-center bg-[#2A1B4F] p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src={ref.icon} alt={ref.name} />
                    </motion.div>
                    <div>
                      <p className="font-semibold">{ref.name}</p>
                      <p className="text-xs text-white/60">{ref.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {ref.reward && (
                      <span className="text-green-400 font-semibold">
                        +{ref.reward}
                      </span>
                    )}
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        ref.status === "Completed"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {ref.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-[#7F5AF0] hover:underline"
              >
                View All Referrals
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}