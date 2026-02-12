"use client"

import { Settings, Search, Bell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import bgImage from "@/assets/Images/BackgroundImage.png"
import ThemeBackground from "@/components/ThemeBackground"
import card1 from "@/assets/Images/creatorhub/card-1.jpg"
import card2 from "@/assets/Images/creatorhub/card-2.jpg"
import card3 from "@/assets/Images/creatorhub/card-3.jpg"
import card4 from "@/assets/Images/creatorhub/card-4.jpg"
import card5 from "@/assets/Images/creatorhub/card-5.jpg"
import card6 from "@/assets/Images/creatorhub/card-6.jpg"
import { useEffect, useRef, useState } from "react"

const Card = ({
  imageUrl,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  console.log(imageUrl)
  return (
    <div className="bg-[#3B2063B2] rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={300}
          className="w-full h-[220px] object-cover rounded-t-xl"
        />
      </div>
      <div className="p-6 flex flex-col">
        <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 text-base mb-6">{description}</p>
        <div className="flex justify-end mt-auto">
          <button
            onClick={() => window.open(buttonLink, "_blank")}
            className="cursor-pointer px-6 py-2 text-black bg-white text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-800 transition-colors duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

const CreateCommunityForm = ({ modalRef }) => {
  const [communityName, setCommunityName] = useState("")
  const [description, setDescription] = useState("")
  const [communityTags, setCommunityTags] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({
      communityName,
      description,
      communityTags,
      isPrivate,
    })
    alert("Community creation form submitted! Waiting for API's")
  }

  return (
    <div
      ref={modalRef}
      className="mt-[400px]  max-w-xl w-full mx-auto bg-[#7153EAC2] rounded-xl shadow-2xl p-8 transform transition-transform duration-300 hover:scale-100"
    >
      <div className="flex items-center justify-center mb-8">
        {/* Community icon (using inline SVG for simplicity) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white mr-3"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 0-6.761 1.028.75.75 0 0 1-.747 0 13.067 13.067 0 0 0-6.761-1.028.75.75 0 0 1-.364-.63v-.003ZM16.5 15.375a7.125 7.125 0 0 1 4.314 12.022.75.75 0 0 1-.232.877 13.067 13.067 0 0 0-6.761 1.028.75.75 0 0 1-.747 0 13.067 13.067 0 0 0-6.761-1.028.75.75 0 0 1-.364-.63v-.003ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 0-6.761 1.028.75.75 0 0 1-.747 0 13.067 13.067 0 0 0-6.761-1.028.75.75 0 0 1-.364-.63v-.003Z" />
        </svg>
        <h1 className="text-white text-3xl font-bold">CREATE NEW COMMUNITY</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Community Name */}
        <div className="mb-6">
          <label
            htmlFor="communityName"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Community Name
          </label>
          <input
            type="text"
            id="communityName"
            className="w-full px-4 py-2  border border-[#240B48] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Community Name"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border border-[#240B48] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-y"
            placeholder="Describe your community"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="communityTags"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Community Tags
          </label>
          <div className="relative">
            <input
              type="text"
              id="communityTags"
              className="w-full px-4 py-2  border border-[#240B48] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
              placeholder="Atleast add two tags"
              value={communityTags}
              onChange={(e) => setCommunityTags(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Add tag"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="communityBanner"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Community Banner
          </label>
          <div className="w-full h-40 border-2 border-dashed border-[#240B48] rounded-lg flex flex-col items-center justify-center text-gray-400  cursor-pointer hover:border-indigo-500 transition-colors duration-200">
            <input
              type="file"
              id="communityBanner"
              className="hidden"
              accept="image/png, image/jpeg, image/gif"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <p className="text-sm">Upload a banner or drag and drop</p>
            <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <label
              htmlFor="privateCommunity"
              className="block text-gray-300 text-sm font-semibold"
            >
              Private Community
            </label>
            <p className="text-gray-400 text-xs">
              Only members can see content
            </p>
          </div>
          <label
            htmlFor="privateCommunity"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="privateCommunity"
              className="sr-only peer"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white font-poppins bg-gradient-to-r from-[#280D96] to-[#8B45FF] px-10 py-2 rounded-xl cursor-pointer"
          >
            Create Community
          </button>
        </div>
      </form>
    </div>
  )
}

export default function AdminHome() {
  const [model, setModel] = useState(false)
  console.log("🚀 ~ AdminHome ~ model:", model)
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModel(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [modalRef])

  if (!model) {
    console.log("null")
  }

  const communities = [
    {
      title: "Xbox Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card1,
      imageAlt: "Xbox Controller",
    },
    {
      title: "Game Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card2,
      imageAlt: "Gamepad",
    },
    {
      title: "Solitaire Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card3,
      imageAlt: "Solitaire Cards",
    },
    {
      title: "Ludo Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card4,
      imageAlt: "Ludo Game",
    },
    {
      title: "Chess Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card5,
      imageAlt: "Chess Board",
    },
    {
      title: "Game Community",
      description:
        "A community for gamers to connect and share their gaming experiences.",
      buttonText: "Join",
      buttonLink: "#",
      imageUrl: card6,
      imageAlt: "Generic Game",
    },
  ]

  return (
    <>
      <div
        className={`w-full inset-0 bg-black/80 overflow-auto  p-4 sm:p-6 lg:p-8 font-sans fixed ${
          model ? "flex z-[999] items-center justify-center" : "hidden"
        } `}
      >
        <CreateCommunityForm modalRef={modalRef} />
      </div>
      <ThemeBackground />
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col p-10 max-w-7xl mx-auto">
        <div className="font-bebas-neue text-white text-center">
          <p className="font-medium text-6xl tracking-wide">Communities</p>
          <p className="font-poppins text-lg uppercase">
            Find your gaming tribe, join discussions, and connect <br /> with
            players who share your passion
          </p>
        </div>
        <div className="bg-[#3B206366] rounded-2xl p-10 my-12">
          <div className="flex justify-between gap-2 items-center w-full text-white">
            <h2 className="text-4xl font-bebas-neue">Gaming Communities</h2>
            <button
              onClick={() => setModel(true)}
              className="font-poppins bg-gradient-to-r from-[#280D96] to-[#8B45FF] px-10 py-2 rounded-xl cursor-pointer"
            >
              Create Community
            </button>
          </div>
          <div className="grid grid-cols-3 gap-10 my-10">
            {communities.map((community, index) => (
              <Card
                key={index}
                imageUrl={community.imageUrl}
                imageAlt={community.imageAlt}
                title={community.title}
                description={community.description}
                buttonText={community.buttonText}
                buttonLink={community.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
