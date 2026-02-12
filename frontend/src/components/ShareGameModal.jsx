"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ShareGameModal({ gameId, onClose }) {
  const [copied, setCopied] = useState(false);
  const gameLink = `https://gaming-app.com/${gameId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gameLink);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      <div className="bg-gradient-to-b from-[#6C3386] to-[#562357] p-6 rounded-xl w-[90%] max-w-md shadow-xl text-white">
        <h2 className="font-bebas-neue tracking-wider text-4xl font-normal mb-4">SHARE GAME</h2>

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

        <p className="text-center mb-3 text-sm">Share on Social Media</p>
        <div className="flex justify-center gap-4">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(gameLink)}`}
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
            onClick={onClose}
            className="text-sm text-white hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
