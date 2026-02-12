"use client"
import ThemeBackground from "@/components/ThemeBackground"
import { useState } from "react"

const PostCard = ({ post }) => {
  return (
    <div className="bg-indigo-800 rounded-xl p-4 shadow-lg">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center overflow-hidden mr-3">
          <img
            src={post.avatar}
            alt={`${post.username}'s avatar`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "https://placehold.co/40x40/6366F1/FFFFFF?text=U" // Fallback for user avatar
            }}
          />
        </div>
        <div>
          <p className="text-white font-semibold">{post.username}</p>
          <p className="text-gray-400 text-sm">{post.timeAgo}</p>
        </div>
      </div>
      <p className="text-gray-200 text-base mb-4">{post.content}</p>
      <div className="flex items-center text-gray-400 text-sm">
        <button className="flex items-center mr-4 hover:text-white transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {post.likes}
        </button>
        <button className="flex items-center mr-4 hover:text-white transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.756 3 12c0 1.087.333 2.126.932 3M12 20.25v-4.75A2.25 2.25 0 0 0 9.75 13.25H6.5M12 20.25h-.008v.008H12Z"
            />
          </svg>
          {post.comments}
        </button>
        <button className="flex items-center hover:text-white transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186A2.25 2.25 0 0 1 12 7.5c4.004 0 5.916 0 7.07 1.07a4.5 4.5 0 0 1 0 6.364l-3.182 3.182A4.5 4.5 0 0 1 12 21.75c-4.004 0-5.916 0-7.07-1.07a4.5 4.5 0 0 1 0-6.364l3.182-3.182Z"
            />
          </svg>
          Share
        </button>
      </div>
    </div>
  )
}

export default function communityJoinPage() {
  const [activeTab, setActiveTab] = useState("posts")
  const posts = [
    {
      id: 1,
      avatar: "https://placehold.co/40x40/FF5733/FFFFFF?text=FM",
      username: "FragMaster",
      timeAgo: "2 hours ago",
      content:
        "Just hit Diamond rank! Anyone want to team up for the push to Masters?",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      avatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=PM",
      username: "PathfinderMain",
      timeAgo: "5 hours ago",
      content:
        "New map rotation is live! What are your thoughts on the changes to World's Edge?",
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      avatar: "https://placehold.co/40x40/5733FF/FFFFFF?text=WT",
      username: "WraithTTV",
      timeAgo: "1 day ago",
      content:
        "Check out this insane 1v3 clutch I pulled off yesterday! Link to clip in comments.",
      likes: 78,
      comments: 23,
    },
  ]

  return (
    <>
      <ThemeBackground />
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col p-10 max-w-7xl mx-auto">
        <div className="bg-indigo-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
          <div className="max-w-3xl w-full mx-auto bg-indigo-950 rounded-xl p-4 sm:p-6 lg:p-8">
            {/* Tabs Navigation */}
            <div className="flex bg-indigo-800 rounded-xl p-2 mb-6 shadow-lg">
              <button
                className={`flex-1 py-3 px-4 rounded-lg text-center font-semibold transition-colors duration-200
            ${
              activeTab === "posts"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-300 hover:bg-indigo-700"
            }`}
                onClick={() => setActiveTab("posts")}
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25H21M7.5 12.75h-.75a.75.75 0 0 1-.75-.75V8.25a2.25 2.25 0 0 1 2.25-2.25h.75a.75.75 0 0 1 .75.75v.75m0 3.75H7.5m0 3.75H7.5"
                    />
                  </svg>
                  Posts
                </div>
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-lg text-center font-semibold transition-colors duration-200
            ${
              activeTab === "members"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-300 hover:bg-indigo-700"
            }`}
                onClick={() => setActiveTab("members")}
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.125A7.5 7.5 0 0 1 12 22.5C9.213 22.5 6.816 21.07 5.39 18.895M15 19.125a7.5 7.5 0 0 0 2.652-.663M15 19.125V2.25m-4.5 4.5V2.25m-4.5 4.5V2.25M12 2.25a7.5 7.5 0 0 0-7.5 7.5v6.75m7.5-6.75h.008v.008H12V5.25ZM6.75 6.75h.008v.008H6.75V6.75Zm9.75 0h.008v.008H16.5V6.75Z"
                    />
                  </svg>
                  Members
                </div>
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-lg text-center font-semibold transition-colors duration-200
            ${
              activeTab === "events"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-300 hover:bg-indigo-700"
            }`}
                onClick={() => setActiveTab("events")}
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 3h.008v.008H12V18Z"
                    />
                  </svg>
                  Events
                </div>
              </button>
            </div>

            {/* Share Something Input */}
            <div className="bg-indigo-800 rounded-xl p-4 mb-6 shadow-lg flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center overflow-hidden mr-3">
                {/* Placeholder for user's avatar */}
                <img
                  src="https://placehold.co/40x40/6366F1/FFFFFF?text=You"
                  alt="Your Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="text"
                placeholder="Share something with the community..."
                className="flex-1 px-4 py-2 bg-indigo-700 border border-indigo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Posts Section */}
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
