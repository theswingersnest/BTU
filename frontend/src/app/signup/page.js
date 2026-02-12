"use client"
import Image from "next/image"
import bgImage from "@/assets/Images/BackgroundImage.png"
import google from "@/assets/Images/google.png"
import facebook from "@/assets/Images/facebook.png"
import user from "@/assets/Images/user.png"
import Logo from "@/assets/Images/Logo.png"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export default function signup({ referralCode = "" }) {
  const pathname = usePathname()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    referral_code: "",
  })
  const [referralLocked, setReferralLocked] = useState(false)

  useEffect(() => {
    if (referralCode) {
      setFormData((prev) => ({
        ...prev,
        referral_code: referralCode,
      }))
      setReferralLocked(true)
    }
  }, [referralCode])

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          referral_code: formData.referral_code,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Signup successful", data)
        // router.push("/otp");
        router.push(`/otp?email=${encodeURIComponent(formData.email)}`)
      } else {
        console.error("Signup failed", data)
        alert(data?.message || "Signup failed")
      }
    } catch (error) {
      console.error("Error during signup:", error)
      alert("An error occurred. Please try again.")
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // Handle social login here
  }
  return (
    <div className="relative min-h-screen flex">
      {/* Background */}
      <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover pointer-events-none select-none -z-10"
          priority
        />
      </div>

      <div className="font-poppins min-h-screen flex items-center justify-center p-4 w-full max-w-4xl mx-auto">
        <div className="mb-8 absolute top-5 left-5">
          <Image src={Logo} alt="Big Time Logo" width={96} />
        </div>
        <div className="w-full flex">
          {/* Sign Up Form */}
          <div className="p-8 w-full">
            <h1 className="text-[30px] md:text-[60px] font-bold text-white text-center mb-8">
              SIGN UP
            </h1>

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter Your First Name"
                      className="w-full bg-[#261046] border border-white/20 rounded-lg px-10 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Your Last Name"
                      className="w-full bg-[#261046] border border-white/20 rounded-lg px-10 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent "
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    UserName
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="username"
                      className="w-full bg-[#261046] border-2 border-white/20 rounded-lg px-10 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-blue-300 "
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      className="w-full bg-[#261046] border-2 border-white/20 rounded-lg px-10 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-blue-300 "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Your Phone Number"
                      className="w-full bg-[#261046] border border-white/20 rounded-lg px-10 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Your Password"
                      className="w-full bg-[#261046] border border-white/20 rounded-lg px-10 pr-12 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent "
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Enter Your Confirm Password"
                      className="w-full bg-[#261046] border border-white/20 rounded-lg px-10 pr-12 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent "
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Referral Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="referral_code"
                      value={formData.referral_code}
                      onChange={handleInputChange}
                      placeholder="Enter Referral Code"
                      readOnly={referralLocked}
                      className={`w-full bg-[#261046] border border-white/20 rounded-lg px-10 pr-12 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent ${
                        referralLocked ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              {/* Sign Up Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className="w-full max-w-sm cursor-pointer mx-auto bg-[#3B2063] text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
              <div className="max-w-sm mx-auto">
                {/* Divider */}
                <div className="flex items-center justify-center my-6">
                  <div className="border-t border-white/20 flex-grow"></div>

                  <div className="border-t border-white/20 flex-grow"></div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
                  <label className="inline-flex items-center">
                    <span className=" text-[white]">Or continue with</span>
                  </label>
                  <label className="inline-flex items-center">
                    <span className="ml-2 cursor-pointer text-[white]">
                      HAVE AN ACCOUNT?
                      <span
                        className="text-[white] ml-1"
                        onClick={(e) => {
                          e.preventDefault()
                          router.push("/login")
                        }}
                      >
                        LOGIN
                      </span>{" "}
                    </span>
                  </label>
                </div>
                {/* Social Login Buttons */}
                <div className="flex-[1] flex gap-1 justify-center w-full">
                  <button className="flex w-full cursor-pointer items-center justify-center gap-2  bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-3 rounded-xl">
                    <Image src={google} alt="google" />
                  </button>
                  <button className="flex w-full items-center cursor-pointer justify-center gap-2  bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-3 rounded-xl">
                    <Image src={facebook} alt="facebook" />
                  </button>
                </div>

                {/* Login Link */}
                <p className="mt-4 text-xs text-white text-start">
                  By registering you agree with our{" "}
                  <Link href="/terms" className="text-[#9D5CE9]">
                    Terms and Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
