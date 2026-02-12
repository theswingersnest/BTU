"use client";
import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import HeadingButton from "@/components/developer/HeadingWithButton";
import Container from "@/components/developer/Container";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImage from "@/assets/Images/BackgroundImage.png";
import { LuClock4 } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import { FiEye, FiUsers, FiDollarSign  } from "react-icons/fi";

export default function Analytics() {
  const [dateRange, setDateRange] = useState("Last 7 days");
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

  // KPI Cards Data
  const kpiCards = [
    {
      icon: FiUsers,
      cardName: "Active Players",
      value: "12,845",
      change: "+25.3% from last week",
      label: "Active Players"
    },
    {
      icon: FiEye,
      cardName: "Total Visits",
      value: "48,392",
      change: "+18.2% from last week",
      label: "Total Visits"
    },
    {
      icon: FiDollarSign,
      cardName: "Revenue",
      value: "$8,900",
      change: "This week",
      label: "Revenue"
    },
    {
      icon: LuClock4,
      cardName: "Avg. Session",
      value: "24m",
      change: "Per player",
      label: "Avg. Session"
    }
  ];

  // Active Players Line Chart Data
  // const activePlayersData = [
  //   { date: "Jan 1", value: 3500 },
  //   { date: "Jan 8", value: 5500 },
  //   { date: "Jan 15", value: 7200 },
  //   { date: "Jan 22", value: 8900 },
  //   { date: "Jan 29", value: 10500 },
  //   { date: "Feb 12", value: 12000 }
  // ];

  // // Revenue Bar Chart Data
  // const revenueData = [
  //   { date: "Jan 1", value: 2500 },
  //   { date: "Jan 8", value: 3500 },
  //   { date: "Jan 15", value: 4500 },
  //   { date: "Jan 22", value: 6000 },
  //   { date: "Jan 29", value: 7500 },
  //   { date: "Feb 5", value: 8500 },
  //   { date: "Feb 12", value: 9800 }
  // ];

  // Top Performing Games
  const topGames = [
    {
      name: "Cyber Legends",
      players: "8,234",
      avgSession: "28m",
      revenue: "$12,450"
    },
    {
      name: "Space Warriors",
      players: "3,421",
      avgSession: "22m",
      revenue: "$8,200"
    },
    {
      name: "Racing Madness",
      players: "5,623",
      avgSession: "18m",
      revenue: "$15,230"
    }
  ];

  // // Helper functions for chart calculations
  // const chartPadding = { left: 50, right: 20, top: 20, bottom: 35 };
  
  // // Calculate line chart path with proper scaling
  // const getLinePath = (data, chartWidth, chartHeight, maxValue) => {
  //   if (data.length === 0) return '';
  //   const points = data.map((d, i) => {
  //     const x = chartPadding.left + (i / (data.length - 1)) * chartWidth;
  //     const y = chartPadding.top + chartHeight - (d.value / maxValue) * chartHeight;
  //     return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  //   }).join(' ');
  //   return points;
  // };

  return (
    <>
      <div className="relative py-7 md:py-[64px] md:px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        </div>

        {/* heading */}
        <div className="container px-4 relative mx-auto w-full mb-5">
          <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between md:items-center">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white text-[30px] md:text-4xl">
                Analytics
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2 text-gray-300">
                Track your game performance and player engagement
              </h2>
            </div>
            {/* Date Range Selector */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowDateDropdown(!showDateDropdown)}
                className="bg-[#9333EA70] border border-[#FFFFFF45] text-white text-xs md:text-sm flex items-center rounded-xl px-4 md:px-8 gap-2 py-2 hover:bg-[#9810FA]/90 transition-colors"
              >
                <p className="text-nowrap">
                  {dateRange}
                </p>
                
                <IoChevronDown className={`size-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDateDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-[#59168B] border border-[#FFFFFF33] rounded-xl overflow-hidden z-10 shadow-lg">
                  {["Last 7 days", "Last 30 days", "Last 90 days", "This year"].map((option) => (
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
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex px-4 py-4 flex-col gap-6 w-full container relative mx-auto">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {kpiCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={index}
                    className="rounded-2xl bg-[#9333EA70] border border-[#FFFFFF45] backdrop-blur-md p-4 md:p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-[#E9D4FF] gap-3 items-center">
                        <Icon className="text-lg md:text-xl" />
                        <h1 className="text-sm md:text-base font-medium">
                          {card.cardName}
                        </h1>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-white mb-4">
                      {card.value}
                    </h3>
                    <p className="text-xs md:text-sm text-[#DAB2FF]">
                      {card.change}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Graphs */}
            <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Active Players Line Chart */}
              <div className="w-full px-4 py-5 rounded-2xl bg-[#9333EA70] border border-[#FFFFFF45]">
                <h3 className="text-lg md:text-xl text-white mb-1">
                  Active Players
                </h3>
                <p className="text-sm text-[#E9D4FF] mb-6">
                  Player count over time
                </p>
                
                  <Image src="/Graph.png" className="object-cover w-full" width={420} alt="line chart" height={10}/>
                
              </div>

              {/* Revenue Bar Chart */}
              <div className="w-full px-4 py-5 rounded-2xl bg-[#9333EA70] border border-[#FFFFFF45]">
                <h3 className="text-lg md:text-xl text-white mb-1">
                  Revenue
                </h3>
                <p className="text-sm text-[#E9D4FF] mb-6">
                  Daily revenue trends
                </p>
        
                 <Image src="/Graph chart.png" className="object-cover w-full" width={420} alt="line chart" height={10}/>
              
              </div>
            </div>
            </div>

          {/* Second Container: Top Performing Games */}
            <div className="flex flex-col gap-4">
              <div className="mb-3">
                  <h1 className="text-white text-base md:text-xl">Top Performing Games</h1>
                  <h2 className="text-[#E9D4FF] text-xs md:text-sm">Your most popular games this week</h2>
              </div>
            <div className="flex rounded-2xl py-5 px-5 bg-[#9333EA70] flex-col gap-3 md:gap-4">
              {topGames.map((game, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col justify-between gap-6 md:gap-4 p-3 md:p-4 rounded-xl border border-[#9333EA70] bg-[#FFFFFF05] transition-colors"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    {/* Game Icon Placeholder */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[linear-gradient(135deg,#AD46FF_0%,#2B7FFF_100%)] flex items-center justify-center">
                    </div>
                    
                    {/* Game Info */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="text-white text-sm md:text-base">
                        {game.name}
                      </h3>
                      <p className="text-[#DAB2FF] text-xs md:text-sm mt-0.5">
                        {game.players} players • {game.avgSession} avg. session
                      </p>
                    </div>
                  </div>
                  
                  {/* Revenue */}
                  <div className="text-right">
                    <p className="text-white text-base md:text-lg">
                      {game.revenue}
                    </p>
                    <p className="text-xs text-[#DAB2FF] md:text-sm">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
      </div>
    </>
  );
}