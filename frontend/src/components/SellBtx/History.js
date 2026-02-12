"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getApi } from "@/lib/apiClient";

export default function History() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getApi("/marketplace/my-listings/");
        setListings(res.results || []);
      } catch (error) {
        console.error("Error fetching history listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (listings.length === 0)
    return <p className="text-gray-300 text-center mt-10">No history found.</p>;

  return (
    <div className="mt-10 flex flex-col gap-7 font-poppins text-white w-full">
      {listings.map((item) => (
        <SellCard key={item.id} item={item} />
      ))}
    </div>
  );
}

const SellCard = ({ item }) => {
  const formattedDate = new Date(item.created_at).toLocaleDateString("en-GB");
  const statusColor =
    item.status === "sold"
      ? "bg-emerald-600"
      : item.status === "active"
      ? "bg-blue-600"
      : "bg-gray-500";

  return (
    <div className="flex justify-between gap-4 py-6 px-8 rounded-xl backdrop-blur-sm bg-[rgba(122,89,255,0.28)] text-white">
      {/* --- COL 1 --- */}
      <div className="flex flex-col justify-end gap-2 py-4 flex-1">
        <div className="flex gap-3 items-end">
          <span className="text-4xl font-semibold">{item.amount}</span>
          <span className="text-xl text-[rgba(209,213,219,1)]">BTX</span>
          <span
            className={`inline-block mt-1 mr-2 px-3 py-[2px] text-[12px] font-poppins text-[rgba(248,250,252,1)] rounded-md shadow-sm ${statusColor}`}
          >
            {item.status}
          </span>
        </div>

        <div className="text-sm font-light text-gray-300">Price / BTX</div>
        <div className="text-xl font-semibold">${item.price_per_token}</div>
      </div>

      {/* --- COL 2 --- */}
      <div className="flex flex-col justify-center items-center flex-1">
        <p className="text-gray-300 text-sm font-light">Total Value</p>
        <p className="text-xl font-semibold">${item.total_price}</p>
      </div>

      {/* --- COL 3 --- */}
      <div className="flex flex-col justify-center flex-1">
        <p className="text-gray-300 text-sm text-left font-light">Listed</p>
        <p className="text-xl font-semibold">{formattedDate}</p>
      </div>

      {/* --- COL 4 --- */}
      <div className="flex flex-col justify-center flex-1">
        <p className="text-gray-300 text-sm text-left font-light">Seller</p>
        <p className="text-xl font-semibold">@{item.seller_username}</p>
      </div>

      {/* --- COL 5 --- */}
      <div className="flex flex-col justify-center flex-1 items-end">
        {item.status === "sold" ? (
          <Image
            src="/assets/icons/check.svg"
            alt="Sold"
            width={64}
            height={64}
            className="rounded-lg"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
