import { Bebas_Neue, Poppins } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/LayoutWrapper"
import { Toaster } from "react-hot-toast"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Bigtime Universe",
  description: "Welcome to the Adventure",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
        <Toaster position="top-right" />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
