"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Logo from "@/assets/Images/Logo.png"

/**
 * LoadingSpinner Component
 * 
 * Props:
 * - type: "default" | "logo" | "dots" | "pulse" - The type of spinner animation
 * - message: string - The main loading text
 * - subtitle: string - The subtitle text below the main message
 * - showLogo: boolean - Whether to show the logo (deprecated, use type="logo" instead)
 * 
 * Usage Examples:
 * 
 * // Basic usage
 * <LoadingSpinner />
 * 
 * // With custom message
 * <LoadingSpinner message="Loading profile..." subtitle="Fetching your data" />
 * 
 * // With logo spinner
 * <LoadingSpinner type="logo" message="Loading..." />
 * 
 * // With dots animation
 * <LoadingSpinner type="dots" message="Processing..." />
 * 
 * // With pulse animation
 * <LoadingSpinner type="pulse" message="Saving..." />
 * 
 * // Navigation with custom loader
 * navigateWithLoading("/profile", "Loading profile...", "Fetching your data", "logo")
 */

export default function LoadingSpinner({ 
  type = "default", 
  message = "Loading...", 
  subtitle = "",
  showLogo = false 
}) {
  const renderSpinner = () => {
    switch (type) {
      case "logo":
        return (
          <motion.div
            className="w-16 h-16 mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Image src={Logo} alt="Logo" width={64} height={64} />
          </motion.div>
        )
      
      case "dots":
        return (
          <div className="flex space-x-2 mb-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ 
                  duration: 0.6, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        )
      
      case "pulse":
        return (
          <motion.div
            className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      
      default:
        return (
          <motion.div
            className="w-16 h-16 mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="44 44"
                strokeDashoffset="44"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="44;0;44"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="50%" stopColor="#7A59FF" />
                  <stop offset="100%" stopColor="#977EFD" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-[#2b0a59]/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Spinner/Logo */}
        {renderSpinner()}
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg font-semibold"
        >
          {message}
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-purple-300 text-sm mt-2"
        >
          {subtitle}
        </motion.div>
      </div>
    </div>
  )
}
