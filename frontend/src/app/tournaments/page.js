"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("Tournaments")
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
  const tabs = ["Tournaments", "Live Matches", "Results"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container m-auto relative">
      <div className="min-h-screen text-white p-6">
        <section className="w-full px-4 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bebas-neue tracking-wider text-center text-xl sm:text-5xl font-extrabold mb-2 text-white"
          >
            UPCOMING TOURNAMENTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-white mb-8 text-sm sm:text-base"
          >
            Join competitive tournaments and win amazing prizes
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-[120px] rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-[#9333EA] text-white"
                      : "bg-[#14182C] text-gray-300 hover:bg-[#9333EA] hover:text-white"
                  }
                `}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {tournaments.map((t, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-[#111827] to-[#581C87] rounded-xl p-5 relative border border-purple-800"
              >
                {/* Filling Fast badge */}
                {t.fillingFast && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    className="absolute top-3 right-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    🔥 Filling Fast
                  </motion.span>
                )}

                {/* Title and Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                  <div>
                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                      🏆 {t.name}
                    </h3>
                    <div>
                      <p className="text-sm text-gray-400">{t.stage}</p>
                      <p className="text-sm text-gray-300">
                        {t.date} • {t.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prize and Entry Fee */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row justify-between gap-3 mb-4"
                >
                  <div
                    className="flex-1 bg-[#1F293780] border border-[#374151] p-3 rounded text-center"
                  >
                    <p className="text-green-400 font-bold">{t.prize}</p>
                    <p className="text-xs text-gray-400 mt-1">Prize Pool</p>
                  </div>
                  <div
                    className="flex-1 bg-[#1F293780] border border-[#374151] p-3 rounded text-center"
                  >
                    <p className="text-blue-400 font-bold">{t.entry}</p>
                    <p className="text-xs text-gray-400 mt-1">Entry Fee</p>
                  </div>
                </motion.div>

                {/* Level and Progress */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-xs text-white bg-purple-700 px-2 py-1 rounded-full w-max">
                    {t.level}
                  </span>
                  <p className="text-sm text-gray-400">{t.progress}</p>
                </div>

                {/* Join Button */}
                <button
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded text-sm font-semibold hover:opacity-90"
                >
                  Join Tournament →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
}