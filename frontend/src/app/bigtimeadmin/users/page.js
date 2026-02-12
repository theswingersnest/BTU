"use client"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { getApi } from "@/lib/apiClient"
import ThemeBtn from "@/utilities/ThemeBtn"

const UserRow = ({ name, email, status, joinDate, games }) => (
  <tr className="hover:bg-[#7a59ff8c] border-b-[1px] border-[#374151]">
    <td className="py-2 px-4">{name}</td>
    <td className="py-2 px-4">{email}</td>
    <td className="py-2 px-4">
      <span
        className={`px-2 py-1 rounded-2xl ${
          status === "active"
            ? "bg-green-500"
            : status === "inactive"
            ? "bg-yellow-500"
            : "bg-red-500"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="py-2 px-4">{joinDate}</td>
    <td className="py-2 px-4">{games}</td>
    <td className="py-2 px-4 flex space-x-2">
      <button className="text-blue-400 hover:text-blue-300">👁️</button>
      <button className="text-yellow-400 hover:text-yellow-300">✏️</button>
      <button className="text-red-400 hover:text-red-300">🗑️</button>
    </td>
  </tr>
)

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  console.log("🚀 ~ AdminUsersPage ~ users:", users)
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const data = await getApi("/auth/user-list/", { limit: "10" })
      setUsers(data?.results || [])
    } catch (error) {
      toast.error(
        error?.response?.data?.detail || error.message || "Failed to fetch users.",
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="bg-[#7A59FF] px-4 py-2 rounded border border-[#7A59FF] hover:bg-transparent">
          + Add User
        </button>
      </div>

      <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search users"
            className="w-1/3 p-2 bg-[#7A59FF] rounded"
          />
          <button className="bg-[#7A59FF] px-4 py-2 rounded border border-[#7A59FF] hover:bg-transparent">
            All Status
          </button>
        </div>

        <table className="w-full rounded">
          <thead>
            <tr className="[&>th]:text-start bg-[#7A59FF]">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Login Date</th>
              <th className="py-2 px-4">Games</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-300">
                  Loading users...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-300">
                  No users found.
                </td>
              </tr>
            ) : (
              users?.map((user, index) => (
                <UserRow
                  key={index}
                  name={user?.username || "N/A"}
                  email={user?.email || "N/A"}
                  status={user?.status || "inactive"}
                  joinDate={user?.lastlogin?.split("T")[0] || "N/A"}
                  games={user?.games_played || "0"}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
