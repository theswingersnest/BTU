"use client";
import { useState } from "react";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImageWallet from "@/assets/Images/referralbg.png";
import paypalLogo from "@/assets/Images/paypal.png";
import wiseLogo from "@/assets/Images/Wise logo.png";
import P from "@/assets/Images/P.png";
import W from "@/assets/Images/W.png";
import Image from "next/image";
import { Lock } from "lucide-react";
export default function PaymentMethod() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("paypal");

  const handlePay = () => {
    alert(`Paying $${amount} with PayPal for ${email}`);
    // Add your payment integration logic here
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Paying $${amount} from ${email}`);
    // Handle API logic here
  };
  return (
    <div className="relative">
      {/* Background Images */}
      <Image
        src={bgImageMobile}
        alt="Background Mobile"
        fill
        className="object-cover pointer-events-none select-none -z-10 block md:hidden"
        priority
      />
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 hidden md:block"
        priority
      />

      <div className="bg-white/10 backdrop-blur-md  m-auto rounded-xl shadow-xl max-w-4xl w-full px-6 md:px-24 py-6 space-y-6">
   
        <h2 className="text-center text-xl font-semibold tracking-wide mb-4 uppercase text-white">
          Payment Method
        </h2>
        <div className="max-w-3xl mx-auto bg-white  rounded-2xl p-4 text-black">
          {/* Tab Buttons */}
          {/* <div className="flex justify-between bg-white rounded-xl overflow-hidden mb-2 bg-[#EFF6FF]">
        <button className="flex-1 py-3 flex justify-center items-center bg-white text-[#003087] font-semibold">
          <Image src={paypalLogo} alt="PayPal" className="mr-2" />
        
        </button>
        <button className="flex-1 py-3 flex justify-center items-center text-gray-400 hover:text-gray-600 transition">
          <Image src={wiseLogo} alt="Wise"  className="mr-2" />
          
        </button>
      </div> */}
          <div className="flex justify-between bg-[#EFF6FF] rounded-xl overflow-hidden mb-2">
            {/* PayPal Button */}
            <button
              className={`flex-1 py-3 flex justify-center items-center font-semibold transition ${
                selectedMethod === "wise"
                  ? "bg-white text-[#003087]"
                  : "bg-[#EFF6FF] text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => setSelectedMethod("paypal")}
            >
              <Image src={paypalLogo} alt="PayPal" className="mr-2" />
            </button>

            {/* Wise Button */}
            <button
              className={`flex-1 py-3 flex justify-center items-center font-semibold transition ${
                selectedMethod === "paypal"
                  ? "bg-white text-[#003087]"
                  : "bg-[#EFF6FF] text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => setSelectedMethod("wise")}
            >
              <Image src={wiseLogo} alt="Wise" className="mr-2" />
            </button>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center  rounded-xl p-3 text-gray-800 text-sm bg-[#EFF6FF]">
            <Image src={paypalLogo} alt="PayPal" className="h-6 w-16 md:h-auto md:w-auto mr-2" />
            <span>Fast, secure payments with PayPal</span>
          </div>
        </div>
        {/* PayPal form */}
       
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-b from-[#0070ba] to-[#1546a0] py-4 text-center h-[90] flex items-center justify-center">
            {
                selectedMethod=="paypal" ?
                <Image src={P} alt="PayPal" className=" mx-auto" />:
                 <Image src={W} alt="wise" className=" mx-auto" />
            }
            {/* Replace with your logo path */}
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-gray-800">
                {
                selectedMethod=="paypal" ?
               <h2 className="text-xl font-semibold">PayPal Checkout</h2>:
                  <h2 className="text-xl font-semibold">Wise Checkout</h2>
            }
          
            <p className="text-sm text-gray-500">
              Fast, secure payments with PayPal protection
            </p>

            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  $
                </span>
                <input
                  type="number"
                  required
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-7 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 bg-[#EFF6FF] py-3 px-2">
              <Lock className="w-4 h-4" />
              Secure, encrypted payment processing
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0070ba] hover:bg-[#005c9c] text-white font-semibold rounded-md transition"
            >
                    {
                selectedMethod=="paypal" ?
               <div>   Pay with PayPal</div>:
                  <div>   Pay with Wise</div>
            }
           
            </button>

            <p className="text-[10px] text-center text-gray-400 mt-2">
              By proceeding, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
