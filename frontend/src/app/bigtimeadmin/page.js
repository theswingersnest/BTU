import {
    Settings,
    Search,
    Bell,
  } from "lucide-react";

export default function AdminHome() {
  return (
    <div className="p-20 space-y-4">
      <div className="stat-card flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        <div>
          <h3 className="text-sm text-gray-400">Total Users</h3>
          <p className="text-2xl font-bold">24,532</p>
          <p className="text-sm text-green-400">+12%</p>
        </div>
        <div className="inline-block rounded-xl bg-[#A855F7] p-3"><Settings/></div>
      </div>
      <div className="stat-card flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        <div>
          <h3 className="text-sm text-gray-400">Total Users</h3>
          <p className="text-2xl font-bold">24,532</p>
          <p className="text-sm text-green-400">+12%</p>
        </div>
        <div className="inline-block rounded-xl bg-[#A855F7] p-3"><Settings/></div>
      </div>
      <div className="stat-card flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        <div>
          <h3 className="text-sm text-gray-400">Total Users</h3>
          <p className="text-2xl font-bold">24,532</p>
          <p className="text-sm text-green-400">+12%</p>
        </div>
        <div className="inline-block rounded-xl bg-[#A855F7] p-3"><Settings/></div>
      </div>
      <div className="stat-card flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        <div>
          <h3 className="text-sm text-gray-400">Total Users</h3>
          <p className="text-2xl font-bold">24,532</p>
          <p className="text-sm text-green-400">+12%</p>
        </div>
        <div className="inline-block rounded-xl bg-[#A855F7] p-3"><Settings/></div>
      </div>



      <div className="bg-[#240b48b6] border border-[#A855F74D] text-white py-6 px-4 rounded-xl shadow-xl">
        <h2 className="font-semibold text-white my-2">Recent Activity</h2>
        <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
          <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
          New user registered
          <span className="text-white opacity-45"> 2 min ago</span>
        </div>
        <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
          <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
          Prize awarded to player
          <span className="text-white opacity-45"> 2 min ago</span>
        </div>
        <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
          <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
          Game completed
          <span className="text-white opacity-45"> 2 min ago</span>
        </div>
        <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
          <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
          Payment processed
          <span className="text-white opacity-45"> 2 min ago</span>
        </div>
      </div>
    </div>
  )
}
