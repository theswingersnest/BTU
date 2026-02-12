"use client"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { getApi } from "@/lib/apiClient"
import ThemeBtn from "@/utilities/ThemeBtn"

export default function AdminModerationPage() {
  const [flags, setFlags] = useState([])

  const fetchFlaggedReports = async () => {
    try {
      const data = await getApi("/reports/flags/", { severity: "high" })
      setFlags(data || [])
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          error.message ||
          "Failed to fetch flagged reports.",
      )
    }
  }

  useEffect(() => {
    fetchFlaggedReports()
  }, [])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Flagged Games Queue</h1>
        <button className="bg-[#7A59FF] px-4 py-2 rounded border border-[#7A59FF] hover:bg-transparent">
          All Severities
        </button>
      </div>

      <div className="space-y-3">
        {flags.length > 0 ? (
          flags.map((flag, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5"
            >
              <div>
                <h3 className="text-xl text-white">
                  {flag.game_title || "Unknown Game"}
                </h3>
                <p className="text-lg font-bold text-[#D1D5DB]">
                  Player:{" "}
                  <span className="text-[#FFB800]">{flag.player || "N/A"}</span>
                </p>
                <p className="text-sm text-[#9CA3AF]">
                  Reason: {flag.reason || "Not specified"}
                </p>
                <p className="text-sm text-[#6B7280]">
                  Reported: {flag.reported_at || "N/A"}
                </p>
              </div>
              <div className="flex gap-4">
                <ThemeBtn title="Approve" bgColor="bg-[#16A34A]" />
                <ThemeBtn title="Reject" bgColor="bg-[#DC2626]" />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-96">
            <p className="text-center text-gray-400">
              No flagged reports found.
            </p>
          </div>
        )}
        Mock Data Card
        <div className="flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <div>
            <h3 className="text-xl text-white">{"Unknown Game"}</h3>
            <p className="text-lg font-bold text-[#D1D5DB]">
              Player: <span className="text-[#FFB800]">{"N/A"}</span>
            </p>
            <p className="text-sm text-[#9CA3AF]">Reason: {"Not specified"}</p>
            <p className="text-sm text-[#6B7280]">Reported: {"N/A"}</p>
          </div>
          <div className="flex gap-4">
            <ThemeBtn title="Approve" bgColor="bg-[#16A34A]" />
            <ThemeBtn title="Reject" bgColor="bg-[#DC2626]" />
          </div>
        </div>
      </div>
    </div>
  )
}
