"use client"

import { useState } from "react"
import { ShoppingCart, Star, User } from "lucide-react"
import marketPlaceItems from "@/app/marketPlaceItems.json"
import Image from "next/image"

export default function MarketplaceItem({ params }) {
  const { slug } = params

  const item = marketPlaceItems.find(
    (g) =>
      g.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "") === slug,
  )

  console.log(item)

  const handleAction = (action) => {}

  const product = {
    name: "adidas Cute Yeti",
    creator: "By adidas",
    price: 175,
    details: [
      { label: "Tradable", value: "No" },
      { label: "Type", value: "Bundle" },
      { label: "Created", value: "Dec 04, 2024" },
      {
        label: "Description",
        value:
          "https://www.bigtime.com/games/15843961264/adidas-Outfit-Creator",
      },
    ],
    includedItems: [
      {
        name: "adidas Cute Yeti - Torso",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Torso",
      },
      {
        name: "adidas Cute Yeti - Right Arm",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Right+Arm",
      },
      {
        name: "adidas Cute Yeti - Left Arm",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Left+Arm",
      },
      {
        name: "adidas Cute Yeti - Dynamic Head",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Dynamic+Head",
      },
      {
        name: "Default Mood - Mood Animation",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Mood+Animation",
      },
      {
        name: "adidas Cute Yeti - Right Leg",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Right+Leg",
      },
      {
        name: "adidas Cute Yeti - Left Leg",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Left+Leg",
      },
    ],
  }

  return (
    <div className="relative container mx-auto p-6">
      <div className="bg-[#1F1339] rounded-2xl p-6 shadow-lg border border-[#3a3a4c]">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-4">
            <div className="relative rounded-lg w-[420px] mx-auto h-full">
              <Image
                src={item?.image}
                alt="item"
                width={420}
                height={450}
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative text-white flex items-center gap-3">
              <Star />
              <p>{item?.rating}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="text-white">
              <h4 className="text-3xl capitalize font-semibold">
                {item?.title}
              </h4>
              <p className="my-3">By {item?.devlopedBy}</p>
            </div>
            <div className="border-b-[1px] border-white my-4" />

            <div className="space-y-3">
              <div className="flex justify-between items-center text-gray-300">
                <span className="font-semibold">Price</span>
                <span className="text-right flex items-center gap-2">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.07812 0.99707C9.26674 0.334695 10.7332 0.334781 11.9219 0.99707L17.5918 4.15723C18.7784 4.81865 19.4999 6.03387 19.5 7.33984V13.6602C19.4999 14.9661 18.7784 16.1814 17.5918 16.8428L11.9219 20.0029C10.7332 20.6652 9.26674 20.6653 8.07812 20.0029L2.40918 16.8428C1.22227 16.1813 0.500052 14.966 0.5 13.6602V7.33984C0.500052 6.03395 1.22227 4.81871 2.40918 4.15723L8.07812 0.99707ZM11.6895 1.31445C10.6432 0.731866 9.3567 0.731746 8.31055 1.31445L2.63184 4.48047C1.58386 5.06419 0.928889 6.14972 0.928711 7.33398V13.666C0.92889 14.8503 1.58386 15.9358 2.63184 16.5195L8.31055 19.6855C9.3567 20.2683 10.6432 20.2681 11.6895 19.6855L17.3691 16.5195C18.4172 15.9357 19.0711 14.85 19.0713 13.666V7.33398C19.0711 6.22391 18.4962 5.2004 17.5605 4.5957L17.3691 4.48047L11.6895 1.31445Z"
                      fill="white"
                      stroke="white"
                    ></path>
                    <path
                      d="M7.27072 11.652L9.75186 13.9555C9.81766 14.0165 9.90688 14.0508 9.99991 14.0508C10.0929 14.0508 10.1822 14.0165 10.248 13.9555L12.7291 11.652C12.7949 11.591 12.8841 11.5566 12.9771 11.5566C13.0702 11.5566 13.1594 11.591 13.2252 11.652L14.317 12.6653C14.3828 12.7264 14.4197 12.8092 14.4197 12.8956C14.4197 12.982 14.3828 13.0649 14.317 13.126L10.248 16.9046C10.1822 16.9657 10.0929 17 9.99991 17C9.90688 17 9.81766 16.9657 9.75186 16.9046L5.68351 13.126C5.61774 13.0649 5.58079 12.982 5.58079 12.8956C5.58079 12.8092 5.61774 12.7264 5.68351 12.6653L6.77533 11.652C6.84112 11.591 6.93034 11.5566 7.02337 11.5566C7.1164 11.5566 7.20562 11.591 7.27142 11.652H7.27072ZM15.7569 9.2183L15.8053 9.25609L16.8971 10.2693C16.9552 10.3232 16.9911 10.3944 16.9986 10.4703C17.006 10.5463 16.9845 10.6223 16.9378 10.6851L16.8971 10.7307L15.8053 11.7439C15.7472 11.7979 15.6706 11.8312 15.5888 11.8381C15.507 11.845 15.4252 11.8251 15.3576 11.7817L15.3092 11.7439L14.2174 10.73C14.1595 10.6761 14.1239 10.605 14.1166 10.5292C14.1093 10.4534 14.1308 10.3776 14.1774 10.3149L14.2174 10.2693L15.3092 9.25609C15.3598 9.20905 15.4248 9.17753 15.4953 9.16577C15.5657 9.154 15.6384 9.16256 15.7035 9.19028L15.7569 9.2183ZM4.69133 9.25609L5.78315 10.2693C5.84892 10.3304 5.88587 10.4133 5.88587 10.4997C5.88587 10.5861 5.84892 10.6689 5.78315 10.73L4.69133 11.7446C4.62554 11.8056 4.53632 11.84 4.44329 11.84C4.35026 11.84 4.26103 11.8056 4.19524 11.7446L3.10272 10.73C3.03695 10.6689 3 10.5861 3 10.4997C3 10.4133 3.03695 10.3304 3.10272 10.2693L4.19454 9.25609C4.26033 9.19501 4.34955 9.1607 4.44258 9.1607C4.53561 9.1607 4.62554 9.19501 4.69133 9.25609ZM10.1995 9.2183L10.2487 9.25609L11.3398 10.2693C11.3979 10.3232 11.4338 10.3944 11.4412 10.4703C11.4487 10.5463 11.4272 10.6223 11.3805 10.6851L11.3398 10.7307L10.2487 11.7439C10.1906 11.7979 10.114 11.8312 10.0322 11.8381C9.95039 11.845 9.86856 11.8251 9.80098 11.7817L9.75186 11.7439L8.66075 10.73C8.60281 10.6761 8.56701 10.6051 8.55958 10.5293C8.55214 10.4535 8.57354 10.3776 8.62005 10.3149L8.66075 10.2693L9.75186 9.25609C9.8025 9.20905 9.86743 9.17753 9.93793 9.16577C10.0084 9.154 10.0811 9.16256 10.1462 9.19028L10.1995 9.2183ZM10.2487 4.09539L14.317 7.87339C14.3828 7.93448 14.4197 8.01734 14.4197 8.10373C14.4197 8.19012 14.3828 8.27297 14.317 8.33407L13.2252 9.34797C13.1594 9.40904 13.0702 9.44336 12.9771 9.44336C12.8841 9.44336 12.7949 9.40904 12.7291 9.34797L10.2487 7.04455C10.2161 7.01421 10.1773 6.99013 10.1347 6.97371C10.0921 6.95729 10.0464 6.94883 10.0003 6.94883C9.95411 6.94883 9.90842 6.95729 9.86579 6.97371C9.82317 6.99013 9.78445 7.01421 9.75186 7.04455L7.27142 9.34797C7.20562 9.40904 7.1164 9.44336 7.02337 9.44336C6.93034 9.44336 6.84112 9.40904 6.77533 9.34797L5.68351 8.33407C5.61774 8.27297 5.58079 8.19012 5.58079 8.10373C5.58079 8.01734 5.61774 7.93448 5.68351 7.87339L9.75186 4.09539C9.81766 4.03431 9.90688 4 9.99991 4C10.0929 4 10.1829 4.03431 10.2487 4.09539Z"
                      fill="white"
                    ></path>
                  </svg>
                  {item?.price}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="font-semibold">Tradeable</span>
                <span className="text-right">{item?.tradable}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="font-semibold">Type</span>
                <span className="text-right">{item?.type}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="font-semibold">Created</span>
                <span className="text-right">{item?.createdAt}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="font-semibold">Description</span>
                <span className="text-right">{item?.description}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-10">
              <button
                onClick={() => handleAction("cart")}
                className="w-full text-white font-bold py-3 px-6 rounded-xl bg-[#7A59FF] hover:from-purple-700 hover:to-purple-900 transition-colors shadow-lg"
              >
                Buy
              </button>
              <button
                onClick={() => handleAction("cart")}
                className="w-full text-white font-bold py-3 px-6 rounded-xl bg-[#4c2d80] hover:from-gray-800 hover:to-gray-950 transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {item?.includedItems?.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold py-4 text-white">
              Included Items
            </h3>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {product.includedItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-32 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md mb-2 border border-[#4a4a5c]"
                  />
                  <p className="text-xs text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
