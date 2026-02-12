import React from "react";
import Image from "next/image";
import {FiUpload} from "react-icons/fi";
import {CiSearch} from "react-icons/ci";
import HeadingButton from "@/components/developer/HeadingWithButton";
import Container from "@/components/developer/Container";
import AssetContainer from "@/components/developer/AssetContainer";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImage from "@/assets/Images/BackgroundImage.png";
import AssetTabs from "@/components/developer/AssetTab";

export default function AssetsManagement() {
  return (
    <>
      <div className="relative py-7 md:py-[64px] md:px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
        </div>

        {/* heading and button */}
        <HeadingButton Icon={FiUpload} title="Assets Management" subtitle="Upload and manage your game assets" btnText="Upload assets" />

        {/* Content */}
        <div className="container md:w-full w-[91%] relative mx-auto flex flex-col gap-6">
          <Container className="bg-[#9333EA2E] border-[#FFFFFF33]">
            <div className="flex">
              <div className="flex items-center px-3 rounded-l-xl border-l border-t border-b border-[#FFFFFF33] bg-[#FFFFFF1A]">
                <CiSearch className="text-[#DAB2FF] text-xl" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search assets..."
                className="py-2 px-2 w-full rounded-r-xl border-r border-t border-b border-[#FFFFFF33] text-[#DAB2FF] bg-[#FFFFFF1A] backdrop-blur-md"
              />
            </div>

            <div className="flex gap-4 flex-col mt-8">
              <AssetContainer Name="Character_Hero.fbx" Size="12.5 MB" Date="2024-01-15" Downloads="342" />
              <AssetContainer Name="Character_Hero.fbx" Size="12.5 MB" Date="2024-01-15" Downloads="342" />
              <AssetContainer Name="Character_Hero.fbx" Size="12.5 MB" Date="2024-01-15" Downloads="342" />
            </div>
          </Container>

          {/* Storage Usage Card */}
          <Container>
            <h2 className="text-white text-base md:text-xl font-medium mb-4">Storage Usage</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#DAB2FF] text-sm font-normal">125.8 GB used of 500 GB</span>
              <span className="text-[#DAB2FF] text-sm font-normal">25.2% used</span>
            </div>
            <div className="w-full h-2.5 md:h-3 bg-[#6B21A8]/40 rounded-full overflow-hidden">
              <div className="h-full bg-[#9333EA] rounded-full" style={{width: "25.2%"}} />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
