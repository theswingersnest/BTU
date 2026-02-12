"use client"
import { Settings, Search, Bell, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { use, useEffect, useRef, useState } from "react"
import Logo from "@/assets/Images/Logo2.png"
import { useSidebar } from "@/context/SidebarContext"
import { useRouting } from "@/context/RoutingContext"
import { toast } from "react-hot-toast"
import { getApi } from "@/lib/apiClient"

function AdminLink() {
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const role = localStorage.getItem("role")
    if (role === "admin") {
      setIsAdmin(true)
    }
  }, [])

  if (!isAdmin) return null

  return (
    <Link
      href="/bigtimeadmin"
      className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]"
    >
      <span className="text-white">
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9974 15.3334V24.6667H0.664062C0.664062 22.1914 1.64739 19.8174 3.39773 18.0671C5.14807 16.3167 7.52204 15.3334 9.9974 15.3334ZM9.9974 14.1667C6.1299 14.1667 2.9974 11.0342 2.9974 7.16675C2.9974 3.29925 6.1299 0.166748 9.9974 0.166748C13.8649 0.166748 16.9974 3.29925 16.9974 7.16675C16.9974 11.0342 13.8649 14.1667 9.9974 14.1667ZM20.4974 18.8334H21.6641V24.6667H12.3307V18.8334H13.4974V17.6667C13.4974 16.7385 13.8661 15.8483 14.5225 15.1919C15.1789 14.5355 16.0691 14.1667 16.9974 14.1667C17.9257 14.1667 18.8159 14.5355 19.4723 15.1919C20.1286 15.8483 20.4974 16.7385 20.4974 17.6667V18.8334ZM18.1641 18.8334V17.6667C18.1641 17.3573 18.0411 17.0606 17.8224 16.8418C17.6036 16.623 17.3068 16.5001 16.9974 16.5001C16.688 16.5001 16.3912 16.623 16.1724 16.8418C15.9536 17.0606 15.8307 17.3573 15.8307 17.6667V18.8334H18.1641Z"
            fill="white"
          />
        </svg>
      </span>
    </Link>
  )
}

export default function RootHeader() {
  const dropdownRef = useRef(null)
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const { navigateWithLoading } = useRouting()
  const [searchQuery, setSearchQuery] = useState("")
  const [role, setRole] = useState("")
  const [notifications, setNotifications] = useState(null)
  const [notiCount, setNotiCount] = useState(0)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [balance, setBalance] = useState(0)

  const getBalance = async () => {
    const data = await getApi("/wallet/balance")
    setBalance(data?.balance)
    localStorage.setItem("balance", data?.balance)
  }

  const getNotifications = async () => {
    try {
      const data = await getApi("/notifications")
      const sortedNotifications = [...data]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3)
      setNotifications(sortedNotifications)
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          error.message ||
          "Failed to fetch notifications.",
      )
    }
  }

  const notificationsCount = async () => {
    try {
      const data = await getApi("/notifications/unread-count")
      setNotiCount(data?.unread_count)
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          error.message ||
          "Failed to fetch notifications.",
      )
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNotificationOpen(false)
      }
    }

    if (notificationOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [notificationOpen])

  useEffect(() => {
    getBalance()
    getNotifications()
    notificationsCount()
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role")
      setRole(storedRole || "Guest")
    }
  }, [])

  const logOutFunc = async () => {
    try {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("role")
      window.location.href = "/login"
    } catch (err) {
      toast.error("Something went wrong")
      console.error("❌ Logout error:", err)
    }
  }

  return (
    <header className="fixed top-0 z-99 w-full px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-[#2b0a59]">
      {/* LEFT GROUP */}
      <div className="flex items-center gap-3 flex-grow md:flex-grow-0 w-full md:w-auto">
        <div className="w-[50px] mx-auto flex items-center justify-center gap-3 ml-3">
          <button
            onClick={toggleSidebar}
            className="w-8 h-8 rounded flex flex-col items-center justify-center hover:bg-[#5d37a2] transition cursor-pointer"
          >
            <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
            <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
            <span className="block w-6 h-1 rounded-2xl bg-white"></span>
          </button>
        </div>

        <div className="ml-5">
          <button onClick={() => navigateWithLoading("/newhome")}>
            <Image src={Logo} alt="Big Time Logo" width={42} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#4c2d80] px-3 py-2 rounded-full w-full md:w-72">
          <span className="text-purple-300 mr-2">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-white placeholder-purple-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT GROUP */}
      <div className="hidden md:flex items-center gap-2 md:gap-3 ml-auto ">
        <button
          onClick={() => navigateWithLoading("/wallet")}
          className="min-w-[52px] h-10 p-5 bg-[#4c2d80] rounded-xl flex items-center justify-center hover:bg-[#5d37a2]"
        >
          <span className="text-white flex items-center gap-1">
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
              />
              <path
                d="M7.27072 11.652L9.75186 13.9555C9.81766 14.0165 9.90688 14.0508 9.99991 14.0508C10.0929 14.0508 10.1822 14.0165 10.248 13.9555L12.7291 11.652C12.7949 11.591 12.8841 11.5566 12.9771 11.5566C13.0702 11.5566 13.1594 11.591 13.2252 11.652L14.317 12.6653C14.3828 12.7264 14.4197 12.8092 14.4197 12.8956C14.4197 12.982 14.3828 13.0649 14.317 13.126L10.248 16.9046C10.1822 16.9657 10.0929 17 9.99991 17C9.90688 17 9.81766 16.9657 9.75186 16.9046L5.68351 13.126C5.61774 13.0649 5.58079 12.982 5.58079 12.8956C5.58079 12.8092 5.61774 12.7264 5.68351 12.6653L6.77533 11.652C6.84112 11.591 6.93034 11.5566 7.02337 11.5566C7.1164 11.5566 7.20562 11.591 7.27142 11.652H7.27072ZM15.7569 9.2183L15.8053 9.25609L16.8971 10.2693C16.9552 10.3232 16.9911 10.3944 16.9986 10.4703C17.006 10.5463 16.9845 10.6223 16.9378 10.6851L16.8971 10.7307L15.8053 11.7439C15.7472 11.7979 15.6706 11.8312 15.5888 11.8381C15.507 11.845 15.4252 11.8251 15.3576 11.7817L15.3092 11.7439L14.2174 10.73C14.1595 10.6761 14.1239 10.605 14.1166 10.5292C14.1093 10.4534 14.1308 10.3776 14.1774 10.3149L14.2174 10.2693L15.3092 9.25609C15.3598 9.20905 15.4248 9.17753 15.4953 9.16577C15.5657 9.154 15.6384 9.16256 15.7035 9.19028L15.7569 9.2183ZM4.69133 9.25609L5.78315 10.2693C5.84892 10.3304 5.88587 10.4133 5.88587 10.4997C5.88587 10.5861 5.84892 10.6689 5.78315 10.73L4.69133 11.7446C4.62554 11.8056 4.53632 11.84 4.44329 11.84C4.35026 11.84 4.26103 11.8056 4.19524 11.7446L3.10272 10.73C3.03695 10.6689 3 10.5861 3 10.4997C3 10.4133 3.03695 10.3304 3.10272 10.2693L4.19454 9.25609C4.26033 9.19501 4.34955 9.1607 4.44258 9.1607C4.53561 9.1607 4.62554 9.19501 4.69133 9.25609ZM10.1995 9.2183L10.2487 9.25609L11.3398 10.2693C11.3979 10.3232 11.4338 10.3944 11.4412 10.4703C11.4487 10.5463 11.4272 10.6223 11.3805 10.6851L11.3398 10.7307L10.2487 11.7439C10.1906 11.7979 10.114 11.8312 10.0322 11.8381C9.95039 11.845 9.86856 11.8251 9.80098 11.7817L9.75186 11.7439L8.66075 10.73C8.60281 10.6761 8.56701 10.6051 8.55958 10.5293C8.55214 10.4535 8.57354 10.3776 8.62005 10.3149L8.66075 10.2693L9.75186 9.25609C9.8025 9.20905 9.86743 9.17753 9.93793 9.16577C10.0084 9.154 10.0811 9.16256 10.1462 9.19028L10.1995 9.2183ZM10.2487 4.09539L14.317 7.87339C14.3828 7.93448 14.4197 8.01734 14.4197 8.10373C14.4197 8.19012 14.3828 8.27297 14.317 8.33407L13.2252 9.34797C13.1594 9.40904 13.0702 9.44336 12.9771 9.44336C12.8841 9.44336 12.7949 9.40904 12.7291 9.34797L10.2487 7.04455C10.2161 7.01421 10.1773 6.99013 10.1347 6.97371C10.0921 6.95729 10.0464 6.94883 10.0003 6.94883C9.95411 6.94883 9.90842 6.95729 9.86579 6.97371C9.82317 6.99013 9.78445 7.01421 9.75186 7.04455L7.27142 9.34797C7.20562 9.40904 7.1164 9.44336 7.02337 9.44336C6.93034 9.44336 6.84112 9.40904 6.77533 9.34797L5.68351 8.33407C5.61774 8.27297 5.58079 8.19012 5.58079 8.10373C5.58079 8.01734 5.61774 7.93448 5.68351 7.87339L9.75186 4.09539C9.81766 4.03431 9.90688 4 9.99991 4C10.0929 4 10.1829 4.03431 10.2487 4.09539Z"
                fill="white"
              />
            </svg>
            <span className="text-sm">{balance}</span>
          </span>
        </button>

        <div className="relative">
          <button
            ref={dropdownRef}
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="cursor-pointer relative w-8 h-8 p-5 bg-[#4c2d80] rounded-xl flex items-center justify-center hover:bg-[#5d37a2]"
          >
            <span className="text-white">
              <Bell />
            </span>
            <span className="absolute -top-1 -right-2 text-sm bg-[#EF4444] text-white rounded-full h-[20px] w-[20px] flex justify-center items-center">
              {notiCount}
            </span>
          </button>
          {notificationOpen && (
            <div className="overflow-hidden absolute right-0 mt-2 w-80 bg-[#2b0a59] border border-white text-white rounded-lg shadow-lg z-50">
              <div className="p-3 border-b font-bold">Notifications</div>
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-3 hover:bg-[#7A59FF] cursor-pointer border-b last:border-none"
                  >
                    <div className="font-semibold">{n.title}</div>
                    <div className="text-sm">{n.message}</div>
                    <div className="text-xs mt-1">
                      {new Date(n.created_at).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-500 text-sm">
                  No notifications
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => navigateWithLoading("/settings")}
          className="w-8 h-8 p-5 bg-[#4c2d80] rounded-xl flex items-center justify-center hover:bg-[#5d37a2]"
        >
          <span className="text-white">
            <Settings />
          </span>
        </button>

        <AdminLink />

        <button
          onClick={logOutFunc}
          className="cursor-pointer w-8 h-8 p-5 bg-[#4c2d80] rounded-xl flex items-center justify-center hover:bg-[#5d37a2]"
        >
          <span className="text-white">
            <LogOut />
          </span>
        </button>

        {/* User Profile */}
        <button
          onClick={() => navigateWithLoading("/profile")}
          className="h-8 p-5 bg-[#4c2d80] rounded-xl flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
            QS
          </div>
          <div className="hidden sm:block text-white text-sm leading-tight">
            <p className="font-medium capitalize">{role}</p>
          </div>
        </button>
      </div>
    </header>
  )
}
