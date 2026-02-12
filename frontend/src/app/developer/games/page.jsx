'use client'
import React,{useState} from "react";
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import Container from "@/components/developer/Container";
import GameBar from "@/components/developer/GameContainerBar";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  primaryButtonText,
  onPrimaryAction,
  secondaryButtonText = "Cancel",
}) => {
  if (!isOpen) return null;

  // Function to handle the close action and prevent propagation
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  // Styles defined with Tailwind CSS to match the deep purple/white theme
  const modalBackgroundClass = 'fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4';
  const modalContentClass = 'bg-[#59168B] border border-[#AD46FF4D] rounded-xl shadow-xl w-full max-w-lg transform transition-all duration-300 scale-100 opacity-100';

  return (
    <div className={modalBackgroundClass} onClick={handleClose}>
      <div 
        className={modalContentClass}
        onClick={(e) => e.stopPropagation()} // Stop click propagation inside the modal content
      >
        {/* Modal Header */}
        <div className="p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white font-poppins">{title}</h2>
            <p className="text-sm text-gray-300 mt-1">{subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <RxCross2 className="size-[20px]" />

          </button>
        </div>

        {/* Modal Body (Custom Content) */}
        <div className="p-6 space-y-5">
          {children}
        </div>

        {/* Modal Footer (Action Buttons) */}
        <div className="p-6 pt-0 flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-6 py-2 rounded-xl text-black font-medium transition-colors bg-[#FFFFFF] hover:bg-gray-300"
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryAction}
            className="px-6 py-2 rounded-xl text-white font-medium bg-[#9810FA] hover:bg-[#8007E0] transition-all duration-200"
          >
            <div className="flex items-center gap-2">
                {/* <Upload className="w-4 h-4" /> */}
                {primaryButtonText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
const UploadGameForm = () => {
    return (
        <form className="space-y-4">
            {/* Game Name */}
            <div>
                <label htmlFor="game-name" className="block text-sm font-medium text-white mb-2">
                    Game Name
                </label>
                <input
                    type="text"
                    id="game-name"
                    placeholder="My Awesome Game"
                    className="w-full px-4 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg text-white placeholder-[#717182] focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition"
                />
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    rows="3"
                    placeholder="Describe your game..."
                    className="w-full px-4 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg text-white placeholder-[#717182] focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition resize-none"
                ></textarea>
            </div>

            {/* Category */}
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                    Category
                </label>
                <div className="relative">
                    <select
                        id="category"
                        className="w-full text-[#717182] px-4 py-4 appearance-none bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition cursor-pointer"
                        defaultValue=""
                    >
                        <option value="" disabled hidden>Select a category</option>
                        <option value="action" className='bg-gray-800 text-white'>Action</option>
                        <option value="puzzle" className='bg-gray-800 text-white'>Puzzle</option>
                        <option value="strategy" className='bg-gray-800 text-white'>Strategy</option>
                        <option value="rpg" className='bg-gray-800 text-white'>RPG</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default function Games() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = () => {
    // Implement game upload logic here
    console.log("Attempting to upload game...");
    setIsModalOpen(false); // Close modal after action (or handle error/success state)
  };

  return (
    <>
      <div className="relative py-[64px] md:px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        </div>

        {/* heading and button */}
        <div className="container relative mx-auto">
          <div className="px-4 py-2 mb-5 flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white font-semibold text-2xl md:text-4xl">
                My Games
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2">
                Manage all your games in one place
              </h2>
            </div>
            {/* button */}
            <div>
              <button
              onClick={() => setIsModalOpen(true)}
               className="bg-[#9810FA] px-3 py-3 text-sm md:text-base md:min-w-[168px] flex items-center rounded-xl md:px-5 gap-2 md:py-3">
                <FaPlus /> Upload Game
              </button>
            </div>
          </div>

          {/* 2. Custom Modal Usage for 'Upload Game' */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Upload Game"
        subtitle="Enter the basic details for your new game"
        primaryButtonText="Upload Game"
        onPrimaryAction={handleUpload}
      >
        {/* The reusable component renders the specific form content here */}
        <UploadGameForm />
      </CustomModal>
        </div>

        <div className="container md:w-full w-[91%] relative mx-auto">
          <Container>
            <div className="flex">
              <div className="flex items-center px-3 rounded-l-xl border-l border-t border-b border-[#FFFFFF33] bg-[#FFFFFF1A]">
                <CiSearch className="text-[#DAB2FF] text-xl" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search games..."
                className="py-2 px-2 w-full rounded-r-xl border-r border-t border-b border-[#FFFFFF33] text-[#DAB2FF] bg-[#FFFFFF1A] backdrop-blur-md"
              />
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <GameBar
                Name="Cyber Legends"
                Genre="Action"
                Players="8,234 Players"
              />
              <GameBar
                Name="Cyber Legends"
                Genre="Action"
                Players="8,234 Players"
              />
              <GameBar
                Name="Cyber Legends"
                Genre="Action"
                Players="8,234 Players"
              />
              <GameBar
                Name="Cyber Legends"
                Genre="Action"
                Players="8,234 Players"
              />
              <GameBar
                Name="Cyber Legends"
                Genre="Action"
                Players="8,234 Players"
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
