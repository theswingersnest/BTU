"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
// import HeadingButton from "@/components/developer/HeadingWithButton";
import Container from "@/components/developer/Container";

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
  const modalBackgroundClass =
    "fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4";
  const modalContentClass =
    "bg-[#59168B] border border-[#AD46FF4D] rounded-xl shadow-xl w-full max-w-lg transform transition-all duration-300 scale-100 opacity-100";

  return (
    <div className={modalBackgroundClass} onClick={handleClose}>
      <div
        className={modalContentClass}
        onClick={(e) => e.stopPropagation()} // Stop click propagation inside the modal content
      >
        {/* Modal Header */}
        <div className="px-6 py-5 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white font-poppins">
              {title}
            </h2>
            <p className="text-sm text-[#DAB2FF] mt-1">{subtitle}</p>
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
        <div className="px-6 py-3 space-y-5">{children}</div>

        {/* Modal Footer (Action Buttons) */}
        <div className="p-6 pt-3 flex justify-end gap-3">
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
const SubmitIssueForm = () => {
  return (
    <form className="space-y-4">
       {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-white mb-2"
        >
          Category
        </label>
        <div className="relative">
          <select
            id="category"
            className="w-full text-[#717182] px-4 py-4 appearance-none bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select a category
            </option>
            <option value="action" className="bg-gray-800 text-white">
              Action
            </option>
            <option value="puzzle" className="bg-gray-800 text-white">
              Puzzle
            </option>
            <option value="strategy" className="bg-gray-800 text-white">
              Strategy
            </option>
            <option value="rpg" className="bg-gray-800 text-white">
              RPG
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
       {/* Priority */}
      <div>
        <label
          htmlFor="Priority"
          className="block text-sm font-medium text-white mb-2"
        >
          Priority
        </label>
        <div className="relative">
          <select
            id="category"
            className="w-full text-[#717182] px-4 py-4 appearance-none bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Priority
            </option>
            <option value="action" className="bg-gray-800 text-white">
              Vip
            </option>
            <option value="puzzle" className="bg-gray-800 text-white">
              Local
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Subject */}
      <div>
        <label
          htmlFor="game-name"
          className="block text-sm font-medium text-white mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="Subject"
          placeholder="Brief description of the issue"
          className="w-full px-4 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg text-white placeholder-[#717182] focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Provide detailed information about your issue..."
          className="w-full px-4 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-lg text-white placeholder-[#717182] focus:ring-2 focus:ring-[#9810FA] focus:outline-none transition resize-none"
        ></textarea>
      </div>
    </form>
  );
};

export default function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = () => {
    // Implement game upload logic here
    console.log("Attempting to upload game...");
    setIsModalOpen(false); // Close modal after action (or handle error/success state)
  };

  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          id: "getting-started-1",
          question: "How do I create my first game?",
          answer:
            "To create your first game, navigate to the Games section and click on 'Create New Game'. Follow the step-by-step wizard to set up your game details, upload assets, and configure your game settings.",
        },
        {
          id: "getting-started-2",
          question: "What file formats are supported?",
          answer:
            "We support a wide range of file formats including FBX, OBJ, GLTF, PNG, JPG, MP4, and more. Check our documentation for a complete list of supported formats.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          id: "technical-1",
          question: "What are the API rate limits?",
          answer:
            "Our API has rate limits to ensure fair usage. Free tier accounts have 100 requests per hour, while premium accounts have 1000 requests per hour. Contact support for enterprise limits.",
        },
        {
          id: "technical-2",
          question: "How do I report a bug?",
          answer:
            "You can report bugs by submitting a ticket through the Support section or by emailing support@example.com. Please include detailed information about the issue, steps to reproduce, and any error messages.",
        },
      ],
    },
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <>
      <div className="relative py-7 md:py-[64px] md:px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]"></div>

        {/* heading and button */}

        <div className="container px-5 relative mx-auto">
          <div className="py-2 mb-5 flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white text-[30px] md:text-4xl">
                Support
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2">
                Get help with your games and development questions
              </h2>
            </div>
            {/* button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#9810FA] text-white md:text-base text-xs md:min-w-[180px] flex items-center rounded-xl px-5 md:gap-3 gap-2 py-3"
              >
                <IoMdAdd className="size-[17px] md:size-[20px]" />
                Submit Ticket
              </button>
            </div>
          </div>
        </div>

        {/* 2. Custom Modal Usage for 'Upload Game' */}
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Submit Support Ticket"
          subtitle="Describe your issue and we'll get back to you soon"
          primaryButtonText="Submit Ticket"
          onPrimaryAction={handleUpload}
        >
          {/* The reusable component renders the specific form content here */}
          <SubmitIssueForm />
        </CustomModal>

        <div className="flex md:px-0 px-3 flex-col gap-6 w-full">
          {/* FAQ Categories */}
          <Container>
            <h2 className="text-white text-xl">Frequently Asked Questions</h2>
            <p className="mt-1 text-[#E9D4FF] text-sm mb-[25px]">
              Find quick answers to common questions
            </p>
            {/* Search Bar */}
            <div className="w-full">
              <div className="flex">
                <div className="flex items-center ps-3 pr-1 rounded-l-xl border-l border-t border-b border-[#50009852] bg-[#50009852]">
                  <CiSearch className="text-white text-normal" />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search FAQs..."
                  className="py-2 px-2 w-full rounded-r-xl border-r border-t border-b border-[#50009852] text-white text-sm bg-[#50009852] backdrop-blur-md placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="flex flex-col">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="flex flex-col gap-4">
                  <h3 className="text-white text-lg mt-6">
                    {category.category}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {category.questions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full text-left rounded-xl border bg-[#50009854] backdrop-blur-md border-[#FFFFFF1A]"
                      >
                        <div className="flex items-center justify-between px-4 py-3 md:px-4 md:py-4">
                          <div className="flex items-center gap-3 flex-1">
                            <HiQuestionMarkCircle className="text-[#DAB2FF] text-normal flex-shrink-0" />
                            <span className="text-white text-sm font-medium">
                              {item.question}
                            </span>
                          </div>
                          <IoChevronDown
                            className={`text-[#DAB2FF] text-normal flex-shrink-0 transition-transform duration-200 ${
                              openQuestion === item.id
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {openQuestion === item.id && (
                          <div className="px-4 pb-3 md:px-6 md:pb-4 pl-11 md:pl-14">
                            <p className="text-[#DAB2FF] text-sm">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
