"use client"
import { useRouter } from "next/navigation"
import { useRouting } from "@/context/RoutingContext"

export function useLoadingNavigation() {
  const router = useRouter()
  const { navigateWithLoading, replaceWithLoading } = useRouting()

  const push = (href) => {
    navigateWithLoading(href)
  }

  const replace = (href) => {
    replaceWithLoading(href)
  }

  const back = () => {
    router.back()
  }

  const forward = () => {
    router.forward()
  }

  return {
    push,
    replace,
    back,
    forward,
    router
  }
}
