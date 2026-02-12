"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const RoutingContext = createContext()

export function RoutingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(null)
  const [loadingMessage, setLoadingMessage] = useState("Loading...")
  const [loadingSubtitle, setLoadingSubtitle] = useState("")
  const [loaderType, setLoaderType] = useState("default")
  const pathname = usePathname()
  const router = useRouter()

  // Start loading when pathname changes
  useEffect(() => {
    setIsLoading(true)
    
    // Clear any existing timeout
    if (loadingTimeout) {
      clearTimeout(loadingTimeout)
    }
    
    // Set a minimum loading time to prevent flickering
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Minimum 800ms loading time
    
    setLoadingTimeout(timeout)
    
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [pathname])

  // Custom navigation function with loading
  const navigateWithLoading = (href, message = "Loading...", subtitle = "", type = "default") => {
    setLoadingMessage(message)
    setLoadingSubtitle(subtitle)
    setLoaderType(type)
    setIsLoading(true)
    router.push(href)
  }

  // Custom replace function with loading
  const replaceWithLoading = (href, message = "Loading...", subtitle = "", type = "default") => {
    setLoadingMessage(message)
    setLoadingSubtitle(subtitle)
    setLoaderType(type)
    setIsLoading(true)
    router.replace(href)
  }

  // Manual loading control
  const startLoading = (message = "Loading...", subtitle = "", type = "default") => {
    setLoadingMessage(message)
    setLoadingSubtitle(subtitle)
    setLoaderType(type)
    setIsLoading(true)
  }

  const stopLoading = () => {
    setIsLoading(false)
  }

  const value = {
    isLoading,
    setIsLoading,
    loadingMessage,
    loadingSubtitle,
    loaderType,
    navigateWithLoading,
    replaceWithLoading,
    startLoading,
    stopLoading
  }

  return (
    <RoutingContext.Provider value={value}>
      {children}
    </RoutingContext.Provider>
  )
}

export function useRouting() {
  const context = useContext(RoutingContext)
  if (!context) {
    throw new Error("useRouting must be used within a RoutingProvider")
  }
  return context
}
