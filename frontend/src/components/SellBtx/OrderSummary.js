"use client";

export default function OrderSummary({ amount, price, fee, receive }) {
  return (
    <div className="backdrop-blur-sm bg-[rgba(122,89,255,0.28)] rounded-xl px-8 py-6 text-white">
      <h3 className="text-base font-semibold font-poppins mb-3">Order Summary</h3>

      <p className="text-sm font-poppins flex justify-between mb-2">BTX Amount: <span>{amount || 0} BTX</span> </p>
      <p className="text-sm font-poppins flex justify-between mb-2">Price per BTX: <span> ${price || 0}</span></p>
      <p className="text-sm font-poppins flex justify-between mb-2">Platform Fee (2%): <span>${fee.toFixed(2)}</span></p>
      
      <p className="text-sm font-poppins flex justify-between">You'll Receive: <span>${receive.toFixed(2)}</span></p>
    </div>
  );
}
