"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import OrderSummary from "./OrderSummary";

export default function SellForm({
  setIsModalOpen,
  setAmount,
  setPricePerToken,
  amount,
  pricePerToken,
}) {
  const platformFee = 0.02;
  const total = amount && pricePerToken ? amount * pricePerToken : 0;
  const fee = total * platformFee;
  const receive = total - fee;

  const handleSubmit = async () => {
    if (!amount || !pricePerToken) return toast.error("Enter amount and price!");
    setIsModalOpen(true);
  };

  return (
    <div className="rounded-xl text-white">
      <h2 className="text-[40px] text-center my-4 font-bebas-neue">
        CREATE NEW LISTING
      </h2>

      {/* Amount Field */}
      <label className="block text-xl mb-1 font-poppins">BTX Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        className="w-full px-6 font-poppins h-[47px] backdrop-blur-sm bg-[rgba(122,89,255,0.28)] rounded-lg mb-2
          text-white focus:outline-none focus:border-[#9b6cff] placeholder:text-white placeholder:font-light"
      />
      <p className="mb-6 text-xs text-white font-light font-poppins">
        Available Balance: 1250 BTX
      </p>

      {/* Price Field */}
      <label className="block text-xl mb-1 font-poppins">
        Your Price per BTX (USD)
      </label>
      <input
        type="number"
        value={pricePerToken}
        onChange={(e) => setPricePerToken(e.target.value)}
        placeholder="Set Your Price"
        className="w-full px-6 font-poppins h-[47px] backdrop-blur-sm bg-[rgba(122,89,255,0.28)] rounded-lg mb-2
          text-white focus:outline-none focus:border-[#9b6cff] placeholder:text-white placeholder:font-light"
      />
      <p className="text-xs text-white font-light mb-6 font-poppins">
        Set your own competitive price
      </p>

      {/* Order Summary */}
      <OrderSummary amount={amount} price={pricePerToken} fee={fee} receive={receive} />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="min-w-[450px] mt-12 mx-auto justify-center flex font-bebas-neue text-2xl bg-[rgba(122,89,255,1)] text-white rounded-md py-3 transition-colors"
      >
        LIST BTX FOR SALE
      </button>
    </div>
  );
}
