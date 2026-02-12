"use client"
import { useState } from "react"
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
import bgImageWallet from "@/assets/Images/referralbg.png"

import Image from "next/image"
import { useRouter } from "next/navigation"
import gamesData from "@/app/games.json"

import RootHeader from "@/components/RootHeader"

const TokenIcon = () => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.07812 1.39502C9.26674 0.732644 10.7332 0.73273 11.9219 1.39502L17.5918 4.55518C18.7784 5.2166 19.4999 6.43182 19.5 7.73779V14.0581C19.4999 15.3641 18.7784 16.5793 17.5918 17.2407L11.9219 20.4009C10.7332 21.0632 9.26674 21.0633 8.07812 20.4009L2.40918 17.2407C1.22227 16.5792 0.500052 15.364 0.5 14.0581V7.73779C0.500052 6.4319 1.22227 5.21666 2.40918 4.55518L8.07812 1.39502ZM11.6895 1.7124C10.6432 1.12982 9.3567 1.1297 8.31055 1.7124L2.63184 4.87842C1.58386 5.46214 0.928889 6.54767 0.928711 7.73193V14.064C0.92889 15.2482 1.58386 16.3338 2.63184 16.9175L8.31055 20.0835C9.3567 20.6662 10.6432 20.6661 11.6895 20.0835L17.3691 16.9175C18.4172 16.3336 19.0711 15.2479 19.0713 14.064V7.73193C19.0711 6.62186 18.4962 5.59834 17.5605 4.99365L17.3691 4.87842L11.6895 1.7124Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M7.27072 12.05L9.75186 14.3534C9.81766 14.4145 9.90688 14.4488 9.99991 14.4488C10.0929 14.4488 10.1822 14.4145 10.248 14.3534L12.7291 12.05C12.7949 11.9889 12.8841 11.9546 12.9771 11.9546C13.0702 11.9546 13.1594 11.9889 13.2252 12.05L14.317 13.0632C14.3828 13.1243 14.4197 13.2072 14.4197 13.2936C14.4197 13.38 14.3828 13.4628 14.317 13.5239L10.248 17.3026C10.1822 17.3636 10.0929 17.3979 9.99991 17.3979C9.90688 17.3979 9.81766 17.3636 9.75186 17.3026L5.68351 13.5239C5.61774 13.4628 5.58079 13.38 5.58079 13.2936C5.58079 13.2072 5.61774 13.1243 5.68351 13.0632L6.77533 12.05C6.84112 11.9889 6.93034 11.9546 7.02337 11.9546C7.1164 11.9546 7.20562 11.9889 7.27142 12.05H7.27072ZM15.7569 9.61625L15.8053 9.65404L16.8971 10.6673C16.9552 10.7212 16.9911 10.7923 16.9986 10.8683C17.006 10.9443 16.9845 11.0202 16.9378 11.083L16.8971 11.1286L15.8053 12.1419C15.7472 12.1958 15.6706 12.2292 15.5888 12.2361C15.507 12.243 15.4252 12.223 15.3576 12.1797L15.3092 12.1419L14.2174 11.128C14.1595 11.074 14.1239 11.003 14.1166 10.9271C14.1093 10.8513 14.1308 10.7755 14.1774 10.7129L14.2174 10.6673L15.3092 9.65404C15.3598 9.607 15.4248 9.57548 15.4953 9.56372C15.5657 9.55195 15.6384 9.5605 15.7035 9.58823L15.7569 9.61625ZM4.69133 9.65404L5.78315 10.6673C5.84892 10.7284 5.88587 10.8112 5.88587 10.8976C5.88587 10.984 5.84892 11.0669 5.78315 11.128L4.69133 12.1425C4.62554 12.2036 4.53632 12.2379 4.44329 12.2379C4.35026 12.2379 4.26103 12.2036 4.19524 12.1425L3.10272 11.128C3.03695 11.0669 3 10.984 3 10.8976C3 10.8112 3.03695 10.7284 3.10272 10.6673L4.19454 9.65404C4.26033 9.59296 4.34955 9.55865 4.44258 9.55865C4.53561 9.55865 4.62554 9.59296 4.69133 9.65404ZM10.1995 9.61625L10.2487 9.65404L11.3398 10.6673C11.3979 10.7212 11.4338 10.7923 11.4412 10.8683C11.4487 10.9443 11.4272 11.0202 11.3805 11.083L11.3398 11.1286L10.2487 12.1419C10.1906 12.1958 10.114 12.2292 10.0322 12.2361C9.95039 12.243 9.86856 12.223 9.80098 12.1797L9.75186 12.1419L8.66075 11.128C8.60281 11.0741 8.56701 11.0031 8.55958 10.9273C8.55214 10.8514 8.57354 10.7756 8.62005 10.7129L8.66075 10.6673L9.75186 9.65404C9.8025 9.607 9.86743 9.57548 9.93793 9.56372C10.0084 9.55195 10.0811 9.5605 10.1462 9.58823L10.1995 9.61625ZM10.2487 4.49334L14.317 8.27134C14.3828 8.33243 14.4197 8.41529 14.4197 8.50168C14.4197 8.58807 14.3828 8.67092 14.317 8.73202L13.2252 9.74591C13.1594 9.80699 13.0702 9.8413 12.9771 9.8413C12.8841 9.8413 12.7949 9.80699 12.7291 9.74591L10.2487 7.4425C10.2161 7.41216 10.1773 7.38808 10.1347 7.37166C10.0921 7.35523 10.0464 7.34678 10.0003 7.34678C9.95411 7.34678 9.90842 7.35523 9.86579 7.37166C9.82317 7.38808 9.78445 7.41216 9.75186 7.4425L7.27142 9.74591C7.20562 9.80699 7.1164 9.8413 7.02337 9.8413C6.93034 9.8413 6.84112 9.80699 6.77533 9.74591L5.68351 8.73202C5.61774 8.67092 5.58079 8.58807 5.58079 8.50168C5.58079 8.41529 5.61774 8.33243 5.68351 8.27134L9.75186 4.49334C9.81766 4.43226 9.90688 4.39795 9.99991 4.39795C10.0929 4.39795 10.1829 4.43226 10.2487 4.49334Z"
      fill="white"
    />
  </svg>
)

// Premium Icon (a stylized hexagon, similar to the image)
const PremiumIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2 text-purple-400"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L2 7L12 2L22 7L12 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 12L2 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M22 7L12 12L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

// Checkmark Icon (for list items)
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2 text-green-400"
  >
    <path
      d="M5 13L9 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const tokenPacks = [
  {
    id: "pack1",
    price: "$199.99",
    mobileConsole: "22,500",
    computerWeb: "24,000",
    bonus: "+1,500 more",
  },
  {
    id: "pack2",
    price: "$99.99",
    mobileConsole: "10,000",
    computerWeb: "11,000",
    bonus: "+1,500 more",
  },
  {
    id: "pack3",
    price: "$49.99",
    mobileConsole: "4,500",
    computerWeb: "5,250",
    bonus: "+700 more",
  },
]

export default function Homes() {
  const { casinoSlots } = gamesData
  const { casinoGames } = gamesData
  const recommendedGames = [...casinoSlots]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  const router = useRouter()

  // const casinoGames = [
  //   {
  //     title: "Legends",
  //     image: legend,
  //     rating: "95%",
  //   },
  //   {
  //     title: "Manhattan Mirage",
  //     image: migrane,
  //     rating: "99%",
  //   },
  //   {
  //     title: "King Chita",
  //     image: king,
  //     rating: "79%",
  //   },
  //   {
  //     title: "Fire Shot Link",
  //     image: fire,
  //     rating: "69%",
  //   },
  //   {
  //     title: "Pyramid Cash Bar",
  //     image: pyramid,
  //     rating: "89%",
  //   },
  //   {
  //     title: "Twist & Link",
  //     image: twist,
  //     rating: "92%",
  //   },
  //   {
  //     title: "Professor Chiflado",
  //     image: professor,
  //     rating: "93%",
  //   },
  //   {
  //     title: "Manhattan Party",
  //     image: party,
  //     rating: "93%",
  //   },
  // ]

  return (
    <>
      <div className="relative min-h-screen flex flex-col pb-10">
        <Image
          src={bgImageWallet}
          alt="Background Desktop"
          fill
          className="object-cover pointer-events-none select-none -z-10 "
          priority
        />

        <div className="min-h-screen m-auto text-white p-6">
          <div className="mt-3 mb-5">
            <h2 className="font-bebas-neue tracking-wide text-5xl">Home</h2>
          </div>

          {/* Casino Slot */}
          <div className="bg-[#1F1339] text-white rounded-xl p-4 md:p-6 space-y-4 w-full my-10">
            <h3 className="font-poppins text-xl font-semibold">Casino Slots</h3>
            <div className="grid md:grid-cols-5 gap-5">
              {casinoSlots.map((game, index) => (
                <div
                  className="game-card cursor-pointer rounded-xl"
                  key={index}
                  onClick={() => {
                    const slug = game.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9\-]/g, "")
                    router.push(`/casinoslots/${slug}`)
                  }}
                >
                  <div className="h-[230px] ">
                    <Image
                      src={game.image}
                      alt={game.title}
                      height={230}
                      width={230} // Replace with actual width
                      unoptimized // Optional if you don't want Next to optimize external images
                      className="h-[230px] w-full object-cover rounded-xl"
                    />
                  </div>

                  <h4 className="font-poppins text-base font-semibold my-2">
                    {game.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1045_7866)">
                        <path
                          d="M9.5295 15.5464H10.4598C11.2969 15.5464 12.0201 15.4929 12.4958 15.3789C13.4198 15.1512 13.9958 14.5084 13.9958 13.6846C13.9951 13.5212 13.9703 13.3588 13.9221 13.2026C14.3841 12.8678 14.6449 12.3521 14.6449 11.7964C14.6449 11.5221 14.5915 11.2541 14.4912 11.0329C14.7992 10.7184 14.9866 10.2561 14.9866 9.76721C14.9866 9.45264 14.9066 9.11778 14.7658 8.87664C14.9601 8.60235 15.0672 8.23378 15.0672 7.82521C15.0672 6.82749 14.2901 6.03749 13.2926 6.03749H10.7612C10.6006 6.03749 10.4935 5.96378 10.4935 5.82978C10.4935 5.10007 11.6318 3.40578 11.6318 2.04635C11.6318 1.12235 10.9889 0.452637 10.0984 0.452637C9.44207 0.452637 9.00007 0.794065 8.56493 1.62464C7.74779 3.19149 6.7835 4.57778 5.18979 6.51949H3.9175C2.2635 6.51949 0.9375 8.38807 0.9375 10.6715C0.9375 12.9281 2.3975 14.8029 4.17179 14.8029H6.38179C7.26579 15.2652 8.33721 15.5464 9.52921 15.5464M10.4664 14.5352L9.53579 14.5218C6.73007 14.5018 4.82836 12.9146 4.82836 10.6378C4.82836 9.19149 5.14979 8.26721 6.06036 7.04864C7.07179 5.70264 8.46436 4.08864 9.46893 2.08664C9.73664 1.55092 9.8775 1.46378 10.0984 1.46378C10.4264 1.46378 10.6206 1.67149 10.6206 2.04664C10.6206 3.13121 9.48236 4.77864 9.48236 5.82978C9.48236 6.58664 10.1118 7.04864 10.9086 7.04864H13.2926C13.7346 7.04864 14.0561 7.38349 14.0561 7.82549C14.0561 8.14692 13.9555 8.35435 13.6944 8.60892C13.6275 8.67578 13.5938 8.74292 13.5938 8.81635C13.5938 8.87007 13.6138 8.93035 13.6609 8.98378C13.8818 9.30521 13.9755 9.50607 13.9755 9.76721C13.9755 10.0889 13.8215 10.3566 13.5201 10.5909C13.3929 10.6846 13.3258 10.7918 13.3258 10.9058C13.3258 10.9458 13.3326 10.9929 13.3595 11.0398C13.5538 11.4081 13.6338 11.5552 13.6338 11.7964C13.6338 12.1581 13.4064 12.4326 12.9244 12.6804C12.8238 12.7338 12.7635 12.8144 12.7635 12.9146C12.7635 12.9546 12.7769 12.9949 12.7969 13.0418C12.9644 13.4504 12.9844 13.5172 12.9844 13.6846C12.9844 14.0129 12.7435 14.2741 12.2546 14.3946C11.8595 14.4949 11.2298 14.5418 10.4664 14.5352ZM4.17236 13.7918C2.98693 13.7918 1.94893 12.3655 1.94893 10.6715C1.94893 8.94378 2.87979 7.53064 3.91779 7.53064H4.53379C4.0315 8.46835 3.81721 9.45264 3.81721 10.6178C3.81721 11.8766 4.27264 12.9615 5.08293 13.7921L4.17236 13.7918Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1045_7866">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 -0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>{game.rating || "4.5"} Rating</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended  */}
          <div className="bg-[#1F1339] rounded-xl p-4 md:p-6 space-y-4 w-full">
            <h3 className="font-poppins text-xl font-semibold">
              Recommended For You
            </h3>
            <div className="grid md:grid-cols-4 gap-5">
              {recommendedGames.map((game, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-xl border border-white bg-white"
                  onClick={() => {
                    const slug = game.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9\-]/g, "")
                    router.push(`/casinoslots/${slug}`)
                  }}
                >
                  <div className="h-[230px]">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={400}
                      height={230}
                      className="h-[230px] w-full object-cover rounded-t-2xl"
                      unoptimized
                    />
                  </div>
                  <div className="text-black px-3">
                    <h4 className="font-poppins text-base font-semibold my-2">
                      {game.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1045_7866)">
                          <path
                            d="M9.5295 15.5464H10.4598C11.2969 15.5464 12.0201 15.4929 12.4958 15.3789C13.4198 15.1512 13.9958 14.5084 13.9958 13.6846C13.9951 13.5212 13.9703 13.3588 13.9221 13.2026C14.3841 12.8678 14.6449 12.3521 14.6449 11.7964C14.6449 11.5221 14.5915 11.2541 14.4912 11.0329C14.7992 10.7184 14.9866 10.2561 14.9866 9.76721C14.9866 9.45264 14.9066 9.11778 14.7658 8.87664C14.9601 8.60235 15.0672 8.23378 15.0672 7.82521C15.0672 6.82749 14.2901 6.03749 13.2926 6.03749H10.7612C10.6006 6.03749 10.4935 5.96378 10.4935 5.82978C10.4935 5.10007 11.6318 3.40578 11.6318 2.04635C11.6318 1.12235 10.9889 0.452637 10.0984 0.452637C9.44207 0.452637 9.00007 0.794065 8.56493 1.62464C7.74779 3.19149 6.7835 4.57778 5.18979 6.51949H3.9175C2.2635 6.51949 0.9375 8.38807 0.9375 10.6715C0.9375 12.9281 2.3975 14.8029 4.17179 14.8029H6.38179C7.26579 15.2652 8.33721 15.5464 9.52921 15.5464M10.4664 14.5352L9.53579 14.5218C6.73007 14.5018 4.82836 12.9146 4.82836 10.6378C4.82836 9.19149 5.14979 8.26721 6.06036 7.04864C7.07179 5.70264 8.46436 4.08864 9.46893 2.08664C9.73664 1.55092 9.8775 1.46378 10.0984 1.46378C10.4264 1.46378 10.6206 1.67149 10.6206 2.04664C10.6206 3.13121 9.48236 4.77864 9.48236 5.82978C9.48236 6.58664 10.1118 7.04864 10.9086 7.04864H13.2926C13.7346 7.04864 14.0561 7.38349 14.0561 7.82549C14.0561 8.14692 13.9555 8.35435 13.6944 8.60892C13.6275 8.67578 13.5938 8.74292 13.5938 8.81635C13.5938 8.87007 13.6138 8.93035 13.6609 8.98378C13.8818 9.30521 13.9755 9.50607 13.9755 9.76721C13.9755 10.0889 13.8215 10.3566 13.5201 10.5909C13.3929 10.6846 13.3258 10.7918 13.3258 10.9058C13.3258 10.9458 13.3326 10.9929 13.3595 11.0398C13.5538 11.4081 13.6338 11.5552 13.6338 11.7964C13.6338 12.1581 13.4064 12.4326 12.9244 12.6804C12.8238 12.7338 12.7635 12.8144 12.7635 12.9146C12.7635 12.9546 12.7769 12.9949 12.7969 13.0418C12.9644 13.4504 12.9844 13.5172 12.9844 13.6846C12.9844 14.0129 12.7435 14.2741 12.2546 14.3946C11.8595 14.4949 11.2298 14.5418 10.4664 14.5352ZM4.17236 13.7918C2.98693 13.7918 1.94893 12.3655 1.94893 10.6715C1.94893 8.94378 2.87979 7.53064 3.91779 7.53064H4.53379C4.0315 8.46835 3.81721 9.45264 3.81721 10.6178C3.81721 11.8766 4.27264 12.9615 5.08293 13.7921L4.17236 13.7918Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1045_7866">
                            <rect
                              width="16"
                              height="16"
                              fill="black"
                              transform="translate(0 -0.000488281)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>{game.rating || "4.7"} Rating</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* coins section  */}
          <div className="bg-[#1F1339] rounded-xl p-4 md:p-6 space-y-4 w-full mt-10">
            <h3 className="font-poppins text-xl font-semibold">Tokens Pack</h3>
            <div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 p-4 sm:p-6 rounded-xl shadow-xl border border-white">
                  <div className="grid grid-cols-3 text-gray-300 text-sm sm:text-base font-semibold border-b border-gray-700 pb-3 mb-3">
                    <div className="text-left">Price</div>
                    <div className="text-center">Mobile & console</div>
                    <div className="text-center">
                      Computer, web & gift cards
                    </div>
                  </div>

                  {tokenPacks.map((pack) => (
                    <div
                      key={pack.id}
                      className="grid grid-cols-3 items-center py-4 border-b border-gray-800 last:border-b-0"
                    >
                      {/* Price */}
                      <div className="text-white text-lg text-left">
                        {pack.price}
                      </div>

                      {/* Mobile & Console Tokens */}
                      <div className="text-gray-200 text-base flex items-center justify-center">
                        <TokenIcon /> &nbsp; {pack.mobileConsole}
                      </div>

                      {/* Computer, Web & Gift Cards Tokens with Bonus */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        <span className="text-gray-200 text-base flex items-center  px-5 py-2 border border-white rounded-lg">
                          <TokenIcon /> &nbsp; {pack.computerWeb}
                        </span>
                        <button className="bg-[#FFDE67] text-black text-xs px-2 py-1 rounded-full transition duration-200 whitespace-nowrap">
                          {pack.bonus}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Section: Big Time Premium */}
                <div className="lg:w-1/3 bg-[#2C1A4A] border border-white p-6 rounded-xl shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <PremiumIcon />
                      <h3 className="text-white text-xl font-bold">
                        Big Time Premium
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Subscribers can get up to 35% more value on BTX purchases
                      on computer, web, and with gift cards.
                    </p>
                    <p className="text-white text-2xl font-bold mb-6">
                      $9.99 / month
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 mb-8">
                      <li className="flex items-center">
                        <CheckIcon /> 1000 BTX each month
                      </li>
                      <li className="flex items-center">
                        <CheckIcon /> Up to 35% more on BTX purchases
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => router.push("/wallet")}
                    className="bg-[#7A59FF4D] w-[200px] cursor-pointer hover:bg-purple-800 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg"
                  >
                    Get Premium
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Games section  */}
          <div className="bg-[#1F1339] text-white rounded-xl p-4 md:p-6 space-y-4 w-full">
            <h3 className="font-poppins text-xl font-semibold">Games Foryou</h3>
            <div className="grid md:grid-cols-5 gap-5">
              {casinoGames.map((game, index) => (
                <div
                  className="game-card cursor-pointer rounded-xl"
                  key={index}
                  onClick={() => {
                    const slug = game.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9\-]/g, "")
                    router.push(`/casinogames/${slug}`)
                  }}
                >
                  <div className="h-[230px] ">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={300}
                      height={230}
                      unoptimized
                      className="h-[230px] w-full object-cover rounded-xl"
                    />
                  </div>

                  <h4 className="font-poppins text-base font-semibold my-2">
                    {game.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1045_7866)">
                        <path
                          d="M9.5295 15.5464H10.4598C11.2969 15.5464 12.0201 15.4929 12.4958 15.3789C13.4198 15.1512 13.9958 14.5084 13.9958 13.6846C13.9951 13.5212 13.9703 13.3588 13.9221 13.2026C14.3841 12.8678 14.6449 12.3521 14.6449 11.7964C14.6449 11.5221 14.5915 11.2541 14.4912 11.0329C14.7992 10.7184 14.9866 10.2561 14.9866 9.76721C14.9866 9.45264 14.9066 9.11778 14.7658 8.87664C14.9601 8.60235 15.0672 8.23378 15.0672 7.82521C15.0672 6.82749 14.2901 6.03749 13.2926 6.03749H10.7612C10.6006 6.03749 10.4935 5.96378 10.4935 5.82978C10.4935 5.10007 11.6318 3.40578 11.6318 2.04635C11.6318 1.12235 10.9889 0.452637 10.0984 0.452637C9.44207 0.452637 9.00007 0.794065 8.56493 1.62464C7.74779 3.19149 6.7835 4.57778 5.18979 6.51949H3.9175C2.2635 6.51949 0.9375 8.38807 0.9375 10.6715C0.9375 12.9281 2.3975 14.8029 4.17179 14.8029H6.38179C7.26579 15.2652 8.33721 15.5464 9.52921 15.5464M10.4664 14.5352L9.53579 14.5218C6.73007 14.5018 4.82836 12.9146 4.82836 10.6378C4.82836 9.19149 5.14979 8.26721 6.06036 7.04864C7.07179 5.70264 8.46436 4.08864 9.46893 2.08664C9.73664 1.55092 9.8775 1.46378 10.0984 1.46378C10.4264 1.46378 10.6206 1.67149 10.6206 2.04664C10.6206 3.13121 9.48236 4.77864 9.48236 5.82978C9.48236 6.58664 10.1118 7.04864 10.9086 7.04864H13.2926C13.7346 7.04864 14.0561 7.38349 14.0561 7.82549C14.0561 8.14692 13.9555 8.35435 13.6944 8.60892C13.6275 8.67578 13.5938 8.74292 13.5938 8.81635C13.5938 8.87007 13.6138 8.93035 13.6609 8.98378C13.8818 9.30521 13.9755 9.50607 13.9755 9.76721C13.9755 10.0889 13.8215 10.3566 13.5201 10.5909C13.3929 10.6846 13.3258 10.7918 13.3258 10.9058C13.3258 10.9458 13.3326 10.9929 13.3595 11.0398C13.5538 11.4081 13.6338 11.5552 13.6338 11.7964C13.6338 12.1581 13.4064 12.4326 12.9244 12.6804C12.8238 12.7338 12.7635 12.8144 12.7635 12.9146C12.7635 12.9546 12.7769 12.9949 12.7969 13.0418C12.9644 13.4504 12.9844 13.5172 12.9844 13.6846C12.9844 14.0129 12.7435 14.2741 12.2546 14.3946C11.8595 14.4949 11.2298 14.5418 10.4664 14.5352ZM4.17236 13.7918C2.98693 13.7918 1.94893 12.3655 1.94893 10.6715C1.94893 8.94378 2.87979 7.53064 3.91779 7.53064H4.53379C4.0315 8.46835 3.81721 9.45264 3.81721 10.6178C3.81721 11.8766 4.27264 12.9615 5.08293 13.7921L4.17236 13.7918Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1045_7866">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 -0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>{game.rating || "4.7"} Rating</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
