
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {GoChevronUp} from "react-icons/go";
import {useState, useEffect} from "react";

function DeveloperSidebar() {
  const pathname = usePathname();

  const data = [
    {label: "Dashboard", icon: "/assets/icons/dashboard.png", link: "dashboard"},
    {label: "My Game", icon: "/assets/icons/my-game.png", link: "games"},
    {label: "Assets", icon: "/assets/icons/assets.png", link: "assets-management"},
    {label: "Supports", icon: "/assets/icons/support.png", link: "support"},
    {label: "Team", icon: "/assets/icons/team.png", link: "team/collaboration", isTeam: true},
  ];

  const teamSubmenu = [
    {label: "Team Member", link: "collaboration"},
    {label: "Analytics", link: "analytics"},
    {label: "Moderation", link: "moderation"},
  ];

  // Automatically open Team submenu if the current path is inside a Team subpage
  const [teamOpen, setTeamOpen] = useState(false);

  useEffect(() => {
    const isTeamPath = teamSubmenu.some((sub) => pathname.includes(`/developer/team/${sub.link}`));
    if (isTeamPath) setTeamOpen(true);
  }, [pathname]);

  return (
    <div className="bg-[rgba(60,3,102,1)] md:w-[360px] w-[80px] border-[rgba(110,17,176,1)]">
      {/* === LOGO === */}
      <div className="border-b border-[rgba(110,17,176,1)]">
        <div className="sm:p-6 p-3 flex flex-wrap gap-2 items-center">
          <Image src={"/assets/icons/gamepad.png"} className="sm:size-8 size-5" width={80} height={80} alt="gamepad" />
          <div>
            <h1 className="sm:text-lg text-sm">Big Time</h1>
            <p className="text-[rgba(218,178,255,1)] sm:text-sm text-[10px]">Developer Portal</p>
          </div>
        </div>
      </div>

      {/* === LINKS === */}
      <div className="flex flex-col sm:p-4 p-2 sm:gap-1 gap-3">
        {data.map((item, index) => {
          const isActive = item.isTeam ? pathname.startsWith("/developer/team/") : pathname.includes(`/developer/${item.link}`);

          if (item.isTeam) {
            return (
              <div key={index}>
                <button
                  onClick={() => setTeamOpen(!teamOpen)}
                  className={`w-full text-start sm:h-10 h-auto sm:px-4 px-2 sm:py-0 py-2 rounded-lg flex sm:flex-row flex-col items-center sm:gap-3 gap-1 justify-between ${
                    isActive ? "bg-[rgba(110,17,176,1)]" : "bg-transparent"
                  }`}>
                  <div className="gap-2 flex items-center">
                    <Image src={item.icon} width={20} height={20} alt={item.label} className="opacity-80" />
                    <p className="text-center text-sm">{item.label}</p>
                  </div>
                  <GoChevronUp className={`${teamOpen ? "rotate-180" : ""} size-5`} />
                </button>

                {/* === Submenu === */}
                {teamOpen && (
                  <div className="flex flex-col pl-8 mt-2 gap-1">
                    {teamSubmenu.map((sub, i) => {
                      const isSubActive = pathname.includes(`/developer/team/${sub.link}`);
                      return (
                        <Link key={i} href={`/developer/team/${sub.link}`} className={`sm:h-8 h-auto px-3 py-1 rounded-lg text-sm ${isSubActive ? "bg-[rgba(110,17,176,1)]" : "bg-transparent"}`}>
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              href={`/developer/${item.link}`}
              key={index}
              className={`${
                isActive ? "bg-[rgba(110,17,176,1)]" : "bg-transparent"
              } sm:h-10 h-auto text-start sm:text-sm text-[10px] sm:px-4 px-2 sm:py-0 py-2 rounded-lg flex sm:flex-row flex-col items-center sm:gap-3 gap-1 sm:justify-start justify-center`}>
              <Image src={item.icon} width={20} height={20} alt={item.label} className="opacity-80" />
              <p className="text-center">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DeveloperSidebar;


