"use client";
import React from "react";
import Image from "next/image";
import HeadingButton from "@/components/developer/HeadingWithButton";
import Container from "@/components/developer/Container";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImage from "@/assets/Images/BackgroundImage.png";
import { GoPersonAdd } from "react-icons/go";
import { FiShield } from "react-icons/fi";
import { BsCode } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";

export default function Collaboration() {
    const teamMembers = [
        {
            id: 1,
            name: "John Smith",
            email: "john@example.com",
            initials: "JS",
            role: "Admin",
            roleIcon: FiShield,
            roleColor: "bg-[#FB2C3633] border-[#FB2C3633] text-[#FFA2A2]",
            isPending: false,
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah@example.com",
            initials: "SJ",
            role: "Developer",
            roleIcon: BsCode,
            roleColor: "bg-[#2B7FFF33] border-[#2B7FFF4D] text-[#8EC5FF]",
            isPending: false,
        },
        {
            id: 3,
            name: "Mike Chen",
            email: "mike@example.com",
            initials: "MC",
            role: "Developer",
            roleIcon: BsCode,
            roleColor: "bg-[#2B7FFF33] border-[#2B7FFF4D] text-[#8EC5FF]",
            isPending: false,
        },
        {
            id: 4,
            name: "Emily Brown",
            email: "emily@example.com",
            initials: "EB",
            role: "Tester",
            roleIcon: GrTest,
            roleColor: "bg-[#00C95033] border-[#00C9504D] text-[#7BF1A8]",
            isPending: false,
        },
        {
            id: 5,
            name: "David Lee",
            email: "david@example.com",
            initials: "DL",
            role: "Tester",
            roleIcon: GrTest,
            roleColor: "bg-[#00C95033] border-[#00C9504D] text-[#7BF1A8]",
            isPending: true,
        },
    ];

    const rolePermissions = [
        {
            role: "Admin",
            icon: FiShield,
            iconColor: 'text-[#FF6467]',
            permissions: [
                "Full access to all features",
                "Manage team members and permissions",
                "Configure billing and payouts",
                "Delete games and assets",
            ],
        },
        {
            role: "Developer",
            icon: BsCode,
            iconColor: 'text-[#51A2FF]',
            permissions: [
                "Create and edit games",
                "Upload and manage assets",
                "Access documentation and API",
                "View analytics and reports",
            ],
        },
        {
            role: "Tester",
            icon: GrTest,
            iconColor: 'text-[#05DF72]',
            permissions: [
                "Test games in development",
                "View game analytics",
                "Report bugs and issues",
                "Read-only access to documentation",
            ],
        },
    ];

    const activeMembers = teamMembers.filter((member) => !member.isPending).length;
    const pendingInvitations = teamMembers.filter((member) => member.isPending).length;

    return (
        <>
            <div className="relative py-7 md:py-[64px] md:px-[64px] px-3 gap-2 min-h-screen items-center justify-center flex flex-col">
                <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
                </div>

                {/* heading and button */}
                <HeadingButton Icon={GoPersonAdd} title="Collaboration" subtitle="Manage your team members and their permissions" btnText="Invite Member" />

                <div className="flex flex-col gap-6 w-full container relative mx-auto">
                    {/* Team Members Section */}
                    <Container title="Team Members" subtitle={`${activeMembers} active members • ${pendingInvitations} pending invitations`}>
                        <div className="flex flex-col gap-3">
                            {teamMembers.map((member) => {
                                const RoleIcon = member.roleIcon;
                                return (
                                    <div
                                        key={member.id}
                                        className="flex md:flex-row flex-col items-center justify-between gap-4 md:gap-4 p-3 md:p-4 rounded-xl border border-[#FFFFFF1A] bg-[#50009854] backdrop-blur-md hover:bg-[#50009870] transition-colors"
                                    >
                                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#9810FA] flex items-center justify-center font-['Poppins'] text-white text-sm md:text-xl">
                                                {member.initials}
                                            </div>

                                            {/* Name and Email */}
                                            <div className="flex flex-col min-w-0 flex-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-white font-medium text-sm md:text-base truncate">{member.name}</h3>
                                                    {member.isPending && (
                                                        <span className="px-2 py-0.5 md:mt-0 -mt-1 md:mb-0 mb-1 text-xs font-medium bg-[#F0B10033] border border-[#F0B10033] text-[#FFDF20] rounded-full flex-shrink-0">
                                                            Pending
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[#DAB2FF] text-xs md:text-sm truncate mt-0.5">{member.email}</p>
                                            </div>
                                        </div>

                                        {/* Role Badge and Menu */}
                                        <div className="flex items-center gap-1 md:gap-3 md:flex-shrink-0">
                                            <div className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-xl border ${member.roleColor} text-xs md:text-sm font-medium whitespace-nowrap`}>
                                                <RoleIcon className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                                <span>{member.role}</span>
                                            </div>
                                            <button className="text-[#DAB2FF] hover:text-white transition-colors p-1 flex-shrink-0">
                                                <HiDotsVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>

                    {/* Role Permissions Section */}
                    <Container title="Role Permissions" subtitle="Overview of what each role can do">
                        <div className="flex flex-col gap-6 md:gap-8">
                            {rolePermissions.map((role, index) => {
                                const RoleIcon = role.icon;
                                return (
                                    <div key={index} className="flex flex-col gap-3 md:gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 md:w-10 ${role.iconColor} md:h-10 flex items-center justify-center flex-shrink-0`}>
                                                <RoleIcon className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>
                                            <h3 className="text-white text-lg md:text-xl font-semibold">{role.role}</h3>
                                        </div>
                                        <ul className="flex flex-col gap-2 md:gap-2.5 pl-0 md:pl-14">
                                            {role.permissions.map((permission, permIndex) => (
                                                <li key={permIndex} className="text-[#DAB2FF] text-sm md:text-base flex items-center gap-2">
                                                    <span className="text-[#DAB2FF] mt-1.5 flex-shrink-0">•</span>
                                                    <span>{permission}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
