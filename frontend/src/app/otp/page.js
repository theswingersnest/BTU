"use client"
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import google from "@/assets/Images/google.png";
import facebook from "@/assets/Images/facebook.png";
import Logo from "@/assets/Images/Logo.png";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { useRef, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function OTPForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  
  /** refs allow us to imperatively focus the next / previous box */
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    // accept only digits
    const digit = value.replace(/\D/g, "");
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // auto‑focus next field if a digit was typed
    if (digit && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      // if current box is empty, move focus back
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const code = otp.join("");
    console.log("OTP entered:", code);
    
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: code,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("OTP verified successfully", data);
        router.push("/login"); // Navigate to login or dashboard
      } else {
        console.error("Verification failed", data);
        alert(data?.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Left side – branding */}
      <div className="font-semibold w-1/2 flex-col justify-center px-16 hidden md:flex">
        <div className="mb-8 absolute top-5 left-5">
          <Image src={Logo} alt="Big Time Logo" width={96} />
        </div>
        <h1 className="font-bebas-neue text-[72px] font-bold text-white leading-tight">
          BIG TIME
        </h1>
        <div className="leading-none">
          <p className="text-[36px] md:text-[40px] text-white uppercase">
            OTP Verification
          </p>
        </div>
      </div>

      {/* Right side – login form */}
      <div className="font-poppins w-full md:w-1/2 flex items-center justify-center px-16">
        <div className="w-full max-w-md text-white rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-white">Verification Code</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-[#B6B6B6] mt-3 pb-5">
                We have sent the verification code to your email address
              </label>
            </div>

            <div className="flex justify-between gap-1 sm:gap-2 mb-10">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-center text-xl sm:text-2xl md:text-3xl bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  disabled={isLoading}
                />
              ))}
            </div>
            <div className="w-3/4 m-auto">
              <button
                type="submit"
                disabled={isLoading || otp.some(digit => !digit)}
                className="w-full py-3 bg-gradient-to-r from-[#653DCD]  to-[#7A59FF] cursor-pointer text-white rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? "Confirming..." : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function OTPLoading() {
  return (
    <div className="relative min-h-screen flex">
      <div className="w-full flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    </div>
  );
}

// Main component with Suspense wrapper
export default function OTP() {
  return (
    <Suspense fallback={<OTPLoading />}>
      <OTPForm />
    </Suspense>
  );
}