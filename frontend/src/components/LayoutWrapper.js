"use client"
import { useRouter, usePathname } from "next/navigation"
import { SidebarProvider } from "@/context/SidebarContext"
import { RoutingProvider, useRouting } from "@/context/RoutingContext"
import LayoutContent from "@/components/LayoutContent"
import LoadingSpinner from "@/components/LoadingSpinner"
import { useEffect } from "react"

export default function LayoutWrapper({ children }) {
  const router = useRouter()
  const pathname = usePathname()

  const excludedPrefixes = ["/", "/login", "/otp", "/signup"]
  const isExcluded =
    excludedPrefixes.includes(pathname) || pathname.startsWith("/bigtimeadmin")

  useEffect(() => {
    const role = localStorage.getItem("role")
    if (pathname === "/home" && role === "admin") {
      router.replace("/newhome")
    }
    if(pathname === "/newhome" && role === "user"){
      router.replace("/home")
    }

    console.log("role" , role , "from layout")
  }, [pathname, router])

  if (isExcluded) {
    return (
      <RoutingProvider>
        <LoadingSpinnerWrapper>
          {children}
        </LoadingSpinnerWrapper>
      </RoutingProvider>
    )
  }

  return (
    <RoutingProvider>
      <SidebarProvider>
        <LoadingSpinnerWrapper>
          <LayoutContent>{children}</LayoutContent>
        </LoadingSpinnerWrapper>
      </SidebarProvider>
    </RoutingProvider>
  )
}

// Separate component to handle loading spinner
function LoadingSpinnerWrapper({ children }) {
  const { isLoading, loadingMessage, loadingSubtitle, loaderType } = useRouting()
  
  return (
    <>
      {isLoading && (
        <LoadingSpinner 
          type={loaderType}
          message={loadingMessage}
          subtitle={loadingSubtitle}
        />
      )}
      {children}
    </>
  )
}
