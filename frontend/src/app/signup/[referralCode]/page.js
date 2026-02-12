"use client"
import Signup from "../page"
import { useParams } from "next/navigation"

export default function SignupWithReferral() {
  const { referralCode } = useParams()

  return <Signup referralCode={referralCode} />
}
