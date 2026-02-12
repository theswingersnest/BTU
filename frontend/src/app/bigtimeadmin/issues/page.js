"use client"

import { getApi } from "@/lib/apiClient"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const UserRow = ({ name, email, status, joinDate, games }) => (
  <>
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
      <td className="py-2 px-4">{games}</td>
      <td className="py-2 px-4">{joinDate}</td>
      <td className="py-2 px-4 flex space-x-2">
        <button className="text-blue-400 hover:text-blue-300">👁️</button>
        <button className="text-yellow-400 hover:text-yellow-300">✏️</button>
      </td>
    </tr>
  </>
)

export default function AdminIssuesPage() {
  const [issueData, setIssueData] = useState(null)

  const fetchIssues = async () => {
    try {
      const data = await getApi("/issues", {
        priority: 10,
        status: true,
        limit: 10,
        offset: 0,
      })
      setIssueData(data)
    } catch (error) {
      console.log("API error:", error)
      toast.error(error?.detail || error.message || "Something went wrong!")
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Issue Tracker</h1>
          <div>
            <button className="bg-[#0000004D] rounded-lg border border-gray-400 text-white py-2 px-4 mr-5">
              All Priorities
            </button>
            <button className="bg-[#0000004D] rounded-lg border border-gray-400 text-white py-2 px-4">
              All Status
            </button>
          </div>
        </div>
        <div className="bg-[#3B206380] rounded-xl border border-[#374151] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#240B48]">
              <tr className="[&>th]:text-start [&>th]:py-3 [&>th]:px-4">
                <th>Issue</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issueData?.results?.map((issue, index) => (
                <UserRow
                  key={index}
                  name={issue.title}
                  email={issue.priority}
                  status={issue.status}
                  games={issue.assigned_to}
                  joinDate={new Date(issue.created_at).toLocaleDateString()}
                />
              ))}

              {!issueData?.results?.length && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-300">
                    No issues found
                  </td>
                </tr>
              )}
            </tbody>

            {/* Dummy  */}
            <tbody>
              Dummy |
              <UserRow
                name="Login system bug"
                email="high"
                status="active"
                games="Dev Team A"
                joinDate="2024-01-15"
              />
              <UserRow
                name="Payment gateway error"
                email="critical"
                status="inactive"
                games="Dev Team B"
                joinDate="2024-02-20"
              />
              <UserRow
                name="UI improvement request"
                email="low"
                status="banned"
                games="Design Team"
                joinDate="2024-03-10"
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
