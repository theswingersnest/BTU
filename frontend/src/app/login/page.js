"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import google from "@/assets/Images/google.png";
import facebook from "@/assets/Images/facebook.png";
import Logo from "@/assets/Images/Logo.png";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem("accessToken");
    const rememberedEmail = localStorage.getItem("rememberedEmail");

    if (token) {
      router.push("/newhome");
    }

    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: rememberedEmail,
        rememberMe: true,
      }));
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Logged in successfully!");
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("role", data.role);

        if (formData.rememberMe) {
          localStorage.setItem("rememberedEmail", formData.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        if(data.role == "user"){
          router.push("/home");
        }else{
          router.push("/bigtimeadmin");
        }

      } else {
        toast.error(data?.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        <Image
          src={bgImageMobile}
          alt="Background Mobile"
          fill
          className="object-fill pointer-events-none select-none -z-10 block md:hidden"
          priority
        />
        <Image
          src={bgImage}
          alt="Background Desktop"
          fill
          className="object-fill pointer-events-none select-none -z-10 hidden md:block"
          priority
        />
      </div>

      {/* Left Side */}
      <div className="font-bold w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 mt-20">
        <div className="mb-8 absolute top-5 left-5">
          <Image src={Logo} alt="Big Time Logo" width={96} />
        </div>
        <h1 className="font-bebas-neue font-medium text-[96px] text-white leading-tight">BIG TIME</h1>
        <div className="font-poppins leading-none">
          <p className="text-[25px] md:text-[40px] text-white uppercase">Sign in to your</p>
          <p className="text-[25px] md:text-[40px] uppercase bg-gradient-to-r from-[#BA83CB] to-[#AE69FF] bg-clip-text text-transparent">
            adventure!
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="font-poppins w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md text-white rounded-xl">
          <h2 className="text-[48px] font-bold text-white mb-3">LOGIN</h2>
          <form className="space-y-3" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-1">Enter your email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="pl-11 bg-[#190733] w-full py-3 text-white rounded-xl theme-inner-shadow placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-1">Enter your password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="pl-11 pr-11 bg-[#190733] text-white py-3 w-full rounded-xl theme-inner-shadow placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#3B2063] text-white rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="flex justify-between items-center text-sm text-gray-300">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <span className="ml-2 font-semibold">Remember me</span>
              </label>
              {/* <span className="ml-2 cursor-pointer font-semibold">Forget password</span> */}
            </div>
          </form>

          <div className="mt-6 text-center text-gray-300 text-sm border-t pt-3 border-[#727272]">
            {/* Don’t have an account? <Link href="/signup" className="text-[#9D5CE9]">Sign up</Link> */}
          </div>

            {/* <div className="mt-3">
              <p className="text-start text-gray-300 mb-3">Or continue with</p>
              <div className="flex gap-1 justify-center w-full">
                <button className="flex w-full items-center justify-center gap-2 bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-2 rounded-xl">
                  <Image src={google} alt="google" />
                </button>
                <button className="flex w-full items-center justify-center gap-2 bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-2 rounded-xl">
                  <Image src={facebook} alt="facebook" />
                </button>
              </div>
            </div> */}

          <p className="mt-4 text-xs text-gray-400 text-start">
            By registering you agree with our{" "}
            <Link href="/terms" className="text-[#9D5CE9]">Terms and Conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
