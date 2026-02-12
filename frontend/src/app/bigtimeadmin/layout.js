"use client"

import Link from "next/link"
import Image from "next/image"
import bgImage from "@/assets/Images/BackgroundImage.png"

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-[#160430]/60 z-10" />
      </div>
      <div className="min-h-screen text-white flex">
        <div className="fixed w-64 h-screen bg-[#210c43a8] p-4">
          <Link
            href="/home"
            className="inline-block px-4 py-2 mb-4 w-full text-white bg-[#4c2d80] rounded hover:bg-[#5d37a2] transition"
          >
            Visit Big Time Universe
          </Link>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav>
            <Link
              href="/admin"
              className="block py-2 px-4 bg-purple-900 rounded mb-2"
            >
              Dashboard
            </Link>
            <Link
              href="/bigtimeadmin/users"
              className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
            >
              Users
            </Link>
            <Link
              href="/bigtimeadmin/moderation"
              className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
            >
              Moderation
            </Link>
            <Link
              href="/bigtimeadmin/issues"
              className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
            >
              Issues
            </Link>
            <Link
              href="/bigtimeadmin/content"
              className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
            >
              Content
            </Link>
            {/* <Link
              href="/bigtimeadmin/rewards"
              className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
            >
              Rewards & Achievements
            </Link> */}
            <Link
              href="/bigtimeadmin/developer-portal"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Developer Portal
            </Link>
            {/* <Link
              href="/bigtimeadmin/settings"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Settings
            </Link> */}
          </nav>
        </div>
        <div className="relative float-right ml-auto w-[calc(100%-256px)]">
          {children}
        </div>
      </div>
    </>
  )
}
