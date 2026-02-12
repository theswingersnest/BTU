import Image from "next/image"
import bgImage from "@/assets/Images/BackgroundImage.png"

export default function ThemeBackground() {
  return (
    <>
      <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover pointer-events-none select-none -z-10"
          priority
        />
      </div>
      {/* <div className="fixed inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-[#160430]/60 z-10" />
      </div> */}
    </>
  )
}
