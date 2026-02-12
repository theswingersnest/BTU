"use client"

import { Image, BoxIcon } from "lucide-react"
import { useState } from "react"


// Tab Titles
const TABS = [
  "Game Upload",
  "Metadata Editor",
  "Revenue Dashboard",
  "SDK Documentation",
  "Sand Box Launch",
]

// Tab Button Component
const NavTab = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={` rounded-lg w-full text-center p-2 font-semibold cursor-pointer transition-all duration-300
      ${
        active
          ? "from-[#240B48] to-[#3B82F680] bg-gradient-to-r text-white shadow-md"
          : "bg-[#4920878A] text-white hover:bg-white/10"
      }`}
  >
    {title}
  </button>
)

// Game Upload Section
const GameUploadSection = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <h2 className="text-2xl font-bold mb-4">Upload Your Game</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block mb-2">Game Name *</label>
        <input
          type="text"
          placeholder="Enter your game"
          className="w-full p-2 bg-[#7A59FF80] rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Game Bundle (.zip) *</label>
        <div className="w-full p-4 bg-[#7A59FF80] rounded flex flex-col gap-3 items-center justify-center">
          <BoxIcon size={30} />
          <div className="text-center text-sm">
            <p>Click to upload your game bundle</p>
            <p>(.zip file only, max 500MB)</p>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-2">Description *</label>
        <textarea
          placeholder="Describe your game..."
          className="w-full p-2 bg-[#7A59FF80] rounded h-32"
        ></textarea>
      </div>
      <div>
        <label className="block mb-2">Cover Image</label>
        <div className="w-full p-4 bg-[#7A59FF80] rounded flex flex-col gap-5 items-center justify-center">
          <Image size={55} />
          <span>Upload cover image</span>
        </div>
      </div>
    </div>
    <div className="mt-6 flex space-x-4">
      <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
        Continue to Metadata
      </button>
    </div>
  </div>
)

// Metadata Section
const MetadataEditor = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <h2 className="text-2xl font-bold mb-4">Metadata Editor</h2>
    <div>
      <label className="block mb-2">Game Name *</label>
      <input
        type="text"
        placeholder="Enter your game"
        className="w-full p-2 bg-[#7A59FF80] rounded"
      />
    </div>
    <div className="mt-4">
      <label className="block mb-2">Game Types *</label>
      <div className="flex items-center gap-2 w-full p-2 bg-[#7A59FF80] rounded">
        <p className="bg-[#5D3AEC80] px-4 py-2 rounded-xl">Single Player</p>
        <p className="bg-[#5D3AEC80] px-4 py-2 rounded-xl">Double Player</p>
        <p className="bg-[#5D3AEC80] px-4 py-2 rounded-xl">PvP</p>
      </div>
    </div>
    <div className="mt-4">
      <label className="block mb-2">Tokens Usage *</label>
      <input
        type="text"
        placeholder="50+ Tokens Per day "
        className="w-full p-2 bg-[#7A59FF80] rounded"
      />
    </div>
    <div className="mt-6 flex space-x-4">
      <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
        Save Meta Data
      </button>
    </div>
  </div>
)

// Revenue Dashboard
const RevenueDashboard = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <h2 className="text-2xl font-bold mb-4">Revenue Dashboard</h2>
    <div className="space-y-3">
      <div className="flex justify-between items-center bg-[#7A59FF80] rounded-2xl border border-[#210C43] p-3">
        <div>
          <p className="text-xl font-normal">$12,450</p>
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
        </div>
        <div className="text-[#4ADE80] p-3">+15.3%</div>
      </div>
      <div className="flex justify-between items-center bg-[#7A59FF80] rounded-2xl border border-[#210C43] p-3">
        <div>
          <p className="text-xl font-normal">$12,450</p>
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
        </div>
        <div className="text-[#4ADE80] p-3">+15.3%</div>
      </div>
      <div className="flex justify-between items-center bg-[#7A59FF80] rounded-2xl border border-[#210C43] p-3">
        <div>
          <p className="text-xl font-normal">$12,450</p>
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
        </div>
        <div className="text-[#4ADE80] p-3">+15.3%</div>
      </div>
      <div className="flex justify-between items-center bg-[#7A59FF80] rounded-2xl border border-[#210C43] p-3">
        <div>
          <p className="text-xl font-normal">$12,450</p>
          <h3 className="text-sm text-gray-400">Total Revenue</h3>
        </div>
        <div className="text-[#4ADE80] p-3">+15.3%</div>
      </div>
    </div>
  </div>
)

const Sidebar = () => (
  <div class="w-64 h-full bg-[#7A59FF80] rounded-xl p-4">
    <input
      type="text"
      placeholder="Search docs..."
      class="w-full p-2 mb-4 bg-purple-900 rounded"
    />
    <nav>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded mb-2">
        Installation
      </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded mb-2">
        Quick Start
      </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded mb-2">
        API Reference
      </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded mb-2">
        Webhooks
      </a>
      <a href="#" class="block py-2 px-4 hover:bg-gray-700 rounded mb-2">
        Examples
      </a>
    </nav>
  </div>
)

const CodeBlock = ({ code }) => (
  <pre class="bg-gray-800 p-4 rounded mt-2 overflow-auto">
    <code>{code}</code>
  </pre>
)

// Sand Box Launch
const SDK = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <div class="flex">
      <Sidebar />
      <main class="flex-1 px-8">
        <h1 class="text-2xl font-bold mb-4">SDK Documentation</h1>
        <div class="bg-[#7A59FF80] p-4 rounded mb-4">
          <h2 class="text-xl font-semibold">Getting Started</h2>
          <p class="mt-2">
            The BigTime SDK allows you to integrate your games with the BigTime
            ecosystem, enabling token transactions, user authentication, and
            platform features.
          </p>
          <CodeBlock code="npm install bigtime-sdk" />
        </div>
        <div class="bg-purple-800 p-4 rounded">
          <h2 class="text-xl font-semibold">Initialize SDK</h2>
          <p class="mt-2">
            Example SDK usage - replace with actual implementation
          </p>
          <CodeBlock
            code={`// Example SDK usage - replace with actual implementation
                    const apiKey = "{your-api-key}";
                    const environment = "sandbox"; // or "production"

                    const gameApi = new BigTimeSDK(environment);

                    const authenticate = async (key) => {
                    const response = await fetch('/api/auth', {
                        method: 'POST',
                        body: JSON.stringify({ apiKey: key }),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const { score } = await response.json();
                    submitScore({ score });
                    };

                    const submitScore = async (score) => {
                    await fetch('/api/scores', {
                        method: 'POST',
                        body: JSON.stringify({ score }),
                    });
                };`}
          />
        </div>
      </main>
    </div>
  </div>
)

const ConsoleLog = ({ logs }) => (
  <pre class="bg-gray-900 p-4 rounded mt-4 overflow-auto">
    <code>{logs}</code>
  </pre>
)

// Sand Box Launch
const SandBoxLaunch = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <div class="bg-[#7A59FF73] p-4 rounded mb-4">
      <h1 class="text-xl font-bold">Test Environment</h1>
      <p class="text-gray-400">
        The sandbox allows you to test your game integration without affecting
        production data or real token transactions.
      </p>
      <div class="flex items-center mt-2">
        <span class="mr-2">Sandbox Mode</span>
        <span class="w-4 h-4 bg-purple-600 rounded-full"></span>
      </div>
      <button class="w-full mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Launch Test Environment
      </button>
    </div>
    <div class="bg-[#7A59FF73] p-4 rounded mb-4">
      <h2 class="text-lg font-semibold">Sandbox Features</h2>
      <ul class="list-disc list-inside mt-2 text-gray-300">
        <li>Mock token transactions</li>
        <li>Simulated user accounts</li>
        <li>API testing without limits</li>
        <li>Debug logging enabled</li>
      </ul>
    </div>
    <div class="bg-[#7A59FF73]-700 p-4 rounded">
      <h2 class="text-lg font-semibold">Console Logs</h2>
      <ConsoleLog
        logs={`[12:34:56] Sandbox environment initialized
                [12:34:57] SDK connection established
                [12:34:58] Warning: Using test tokens
                [12:35:00] User session started
                [12:35:01] Token transaction simulated: 100 TEST_TOKENS
                [12:35:02] API call: getUserProfile() - Success
            `}
      />
    </div>
  </div>
)

export default function DeveloperPortalPage() {
  const [activeTab, setActiveTab] = useState("Game Upload")

  return (
    <div className="p-6 text-white">
      <h1 className="font-bebas-neue text-center text-5xl mb-6">
        BIGTIME DEVELOPER PORTAL
      </h1>

      {/* Tabs */}
      <div className="grid grid-cols-5 gap-3 mb-8">
        {TABS.map((tab) => (
          <NavTab
            key={tab}
            title={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Game Upload" ? (
        <GameUploadSection />
      ) : activeTab === "Metadata Editor" ? (
        <MetadataEditor />
      ) : activeTab === "Revenue Dashboard" ? (
        <RevenueDashboard />
      ) : activeTab === "Sand Box Launch" ? (
        <SandBoxLaunch />
      ) : (
        <SDK />
      )}
    </div>
  )
}
