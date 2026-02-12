"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouting } from "@/context/RoutingContext"
import hogwarts from "@/assets/Images/hogwarts.jpg"
import gamesData from "@/app/games.json"

export default function Homes() {
  const router = useRouter()
  const { navigateWithLoading } = useRouting()

  const fadeSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto relative">
      <motion.div
        className="w-full text-white p-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Featured Game */}
        <div
          onClick={() => navigateWithLoading("/gameinfo")}
          className="cursor-pointer relative rounded-lg overflow-hidden"
        >
          <Image src={hogwarts} alt="hogwarts" className="min-h-64 w-full" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-3xl font-bold">HOGWARTS LEGACY</h2>
            <p className="text-sm mt-1 max-w-lg">
              Hogwarts Legacy is an immersive, open world action RPG set in the
              world first introduced in the Harry Potter books.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600">
                Buy now
              </button>
              <span className="text-lg font-semibold">$24.00</span>
              <span className="text-sm text-gray-300 line-through">$54.00</span>
            </div>
          </div>
        </div>

        {/* Casino Slots Section */}
        <h3 className="text-2xl font-bold my-4">Casino's Sites</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
          {gamesData?.casinos?.map((game, gameIdx) => (
            <motion.div
              key={game.title + gameIdx}
              className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer hover:scale-105"
              // onClick={() => navigateWithLoading("/gameinfo")}
              onClick={() => {
                const slug = game.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9\-]/g, "")
                router.push(`/casinos/${slug}`)
              }}
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative rounded-t-lg overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={100}
                  height={192}
                  unoptimized
                  className="w-full h-20 md:h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <h2 className="text-lg font-bold leading-5">{game.title}</h2>
                </div>
              </div>
              {/* <div className="flex justify-between items-center text-sm bg-[#9F2427] p-2">
                <span>{game.price}</span>
                <span className="flex items-center gap-1">
                  <span className="text-white">★</span> {game.rating}
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Casino Games Section */}
        <h3 className="text-xl font-bold my-4">Casino Games</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
          {gamesData?.casinoGames?.map((game, gameIdx) => (
            <motion.div
              key={game.title + gameIdx}
              className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer"
              onClick={() => navigateWithLoading("/casinos")}
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative rounded-t-lg overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={100}
                  height={192}
                  unoptimized
                  className="w-full h-20 md:h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <h2 className="text-sm font-bold leading-5">{game.title}</h2>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm bg-[#9F2427] p-2">
                <span>{game.price}</span>
                <span className="flex items-center gap-1">
                  <span className="text-white">★</span> {game.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  )
}
