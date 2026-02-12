"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { FiSave } from "react-icons/fi";

import HeadingButton from "@/components/developer/HeadingWithButton";
import Container from "@/components/developer/Container";

export default function GamesSettings() {
  const [activeTab, setActiveTab] = useState("General");

  const [dateRange, setDateRange] = useState("Action");

  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDateDropdown(false);
      }
    };

    if (showDateDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDateDropdown]);

  return (
    <>
      <div className="relative py-7 px-3 md:py-[64px] md:px-[64px] gap-2 min-h-screen md:gap-6 flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]"></div>
        {/* back to games button */}
        <div className="md:px-4 w-full mb-6 md:mb-7">
          <Link
            className="flex text-xs md:text-base gap-3 items-center"
            href="/developer/games"
          >
            <FaArrowLeft />
            Back To Games
          </Link>
        </div>
        {/* heading */}
        <div className="container relative mx-auto w-full mb-5">
          <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between md:items-center">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white text-[30px] md:text-4xl">
                Game Settings
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2 text-gray-300">
                Configure your game's details and settings
              </h2>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="flex md:max-w-[390px] rounded-2xl mb-6 bg-[#FFFFFF1A]">
            <button
              onClick={() => setActiveTab("General")}
              className={`md:px-8 px-3 py-2 text-sm md:text-base transition-colors ${
                activeTab === "General"
                  ? "text-white rounded-3xl bg-[#9810FA]"
                  : "text-[#FFFFFF] hover:text-gray-300"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("Appearance")}
              className={`md:px-8 px-3 py-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "Appearance"
                  ? "text-white rounded-3xl bg-[#9810FA]"
                  : "text-[#FFFFFF] hover:text-gray-300"
              }`}
            >
              Appearance
            </button>
            <button
              onClick={() => setActiveTab("Publishing")}
              className={`md:px-8 px-3 py-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "Publishing"
                  ? "text-white rounded-3xl bg-[#9810FA]"
                  : "text-[#FFFFFF] hover:text-gray-300"
              }`}
            >
              Publishing
            </button>
          </div>
        </div>

        {/* General Tab Content */}
        {activeTab === "General" && (
          <div className="w-full">
            <Container
              title="Basic Information"
              subtitle="Update your game's basic details"
            >
              <div className="flex gap-2 mt-10 flex-col">
                <label htmlFor="Game Name">Game Name</label>
                <input
                  className="py-2 px-3 text-[#DAB2FF] bg-[#9333EA2E] rounded-xl"
                  type="text"
                  name="Game Name"
                  placeholder="Cyber Legends"
                  readOnly
                />
              </div>

              <div className="flex gap-2 mt-4 flex-col">
                <label htmlFor="Game Name">Description</label>
                <input
                  className="py-6 px-3 bg-[#9333EA2E] rounded-xl"
                  type="text"
                  readOnly
                  name="Description"
                  placeholder="An action-packed adventure in a cyberpunk world"
                />
              </div>
              <div className="flex gap-2 mt-4 flex-col">
                <label htmlFor="Game Name">Category</label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDateDropdown(!showDateDropdown)}
                    className="bg-[#9333EA2E] text-[#DAB2FF] text-xs md:text-sm w-full justify-between flex items-center rounded-xl px-4 md:px-8 gap-2 py-2"
                  >
                    <p className="text-nowrap">{dateRange}</p>

                    <IoChevronDown
                      className={`size-4 transition-transform ${
                        showDateDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showDateDropdown && (
                    <div className="absolute right-0 mt-2 px-4 w-full bg-[#9810FA] rounded-xl overflow-hidden z-10 shadow-lg">
                      {["Action", "Action", "Action", "Action"].map(
                        (option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setDateRange(option);
                              setShowDateDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#9810FA]/30 transition-colors"
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* Appearance Tab Content */}
        {activeTab === "Appearance" && (
          <div className="w-full">
            <Container
              title="Game Icon"
              subtitle="Upload an icon for your game (recommended: 512x512px)"
            >
              <div className="flex w-full items-center gap-7 md:flex-row flex-col">
                <div className="bg-[linear-gradient(135deg,#AD46FF_0%,#2B7FFF_100%)] w-[60px] h-[60px] md:h-[120px] md:w-[120px] rounded-2xl"></div>
                <button className="bg-[#9810FA] text-white md:text-base text-xs md:min-w-[180px] flex items-center rounded-xl px-5 md:gap-3 gap-2 py-3">
                  <FiUpload /> Upload icon
                </button>
              </div>
            </Container>

            <div className="mt-5 md:w-full w-[91%] container relative mx-auto">
              <Container
                title="Screenshots & Media"
                subtitle="Add screenshots and promotional images"
              >
                <div className="flex md:flex-row flex-col gap-3 mt-6">
                  <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                    <FiUpload className="text-3xl" />
                    <h2>Upload</h2>
                  </div>

                  <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                    <FiUpload className="text-3xl" />
                    <h2>Upload</h2>
                  </div>

                  <div className="md:w-1/3 h-[110px] bg-[#9333EA57] border rounded-md flex-col flex items-center justify-center gap-2 border-[#7A59FF]">
                    <FiUpload className="text-3xl" />
                    <h2>Upload</h2>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        )}

        {/* Publishing Tab Content */}
        {activeTab === "Publishing" && (
          <div className="w-full">
            <Container
              title="Privacy Settings"
              subtitle="Control who can see and play your game"
            >
              <div className="flex items-center mt-7 justify-between">
                <div>
                  <h1 className="text-white mb-1 text-sm">Public Game</h1>
                  <h2 className="md:text-xs text-[9px] text-[#DAB2FF]">
                    Anyone can discover and play your game
                  </h2>
                </div>
                <button
                  id="toggleBtn"
                  class="w-10 h-5 bg-[#DAB2FF] rounded-full relative transition-colors duration-300"
                >
                  <span
                    id="toggleCircle"
                    class="w-4 h-4 bg-[#9810FA] rounded-full absolute top-0.5 left-0.5 transition-all duration-300"
                  ></span>
                </button>
              </div>
            </Container>

            <div className="mt-6">
              <Container
                title="Publish Status"
                subtitle="Make your game available to players"
              >
                <div className="flex items-center mt-7 justify-between">
                  <div>
                    <h1 className="text-white mb-1 text-sm">Published</h1>
                    <h2 className="md:text-xs text-[9px] text-[#DAB2FF]">
                      Your game is live and accessible to players
                    </h2>
                  </div>
                  <button
                    id="toggleBtn"
                    class="w-10 h-5 bg-[#DAB2FF] rounded-full relative transition-colors duration-300"
                  >
                    <span
                      id="toggleCircle"
                      class="w-4 h-4 bg-[#9810FA] rounded-full absolute top-0.5 left-0.5 transition-all duration-300"
                    ></span>
                  </button>
                </div>
              </Container>
            </div>

            <div className="mt-6">
              <Container title="Version Control" subtitle="Manage game updates">
                <div className="flex gap-2 mt-10 flex-col">
                  <label htmlFor="Game Name">Current Version</label>
                  <input
                    className="py-2 px-3 text-[#DAB2FF] bg-[#9333EA2E] rounded-xl"
                    type="text"
                    name="Game Name"
                    placeholder="1.0.0"
                    readOnly
                  />
                </div>

                <div className="flex gap-2 mt-4 flex-col">
                  <label htmlFor="Game Name">Changelog</label>
                  <input
                    className="py-6 px-4 bg-[#9333EA2E] rounded-xl"
                    type="text"
                    readOnly
                    name="Description"
                    placeholder="Describe what's new in this version..."
                  />
                </div>
                <div className="flex justify-start mt-4 items-center">
                  <button className="py-2 px-4 rounded-lgde md:text-base text-xs flex gap-2 items-center bg-[#9810FA]">
                    Update Game
                  </button>
                </div>
              </Container>
            </div>
          </div>
        )}

        {/* buttons */}
        <div className="flex w-full mt-5 justify-end items-center gap-3">
          <button className="py-2 border rounded-xl md:text-base text-xs border-[#FFFFFF45] px-4">
            Cancel
          </button>
          <button className="py-2 px-4 rounded-xl md:text-base text-xs flex gap-2 items-center bg-[#9810FA]">
            <FiSave className="size-[20px]" />
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
