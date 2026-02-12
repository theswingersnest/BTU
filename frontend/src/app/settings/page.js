"use client";
import Image from "next/image";
import filterIcon from "@/assets/Images/filter.png";
import { FiSearch } from "react-icons/fi";
import ThemeBackground from "@/components/ThemeBackground";
import RootHeader from "@/components/RootHeader";
import Card from "@/components/settings/Card";
import { useState } from "react";
import ThemeBtn from "@/utilities/ThemeBtn";

export default function settings() {
  const options = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
  ];

  const [autoSettings, setAutoSettings] = useState({
    masterVolume: 50,
    gameAudio: 50,
    voiceChat: 50,
    muteWhenInactive: false,
  });

  const [controls, setControls] = useState({
    screenshot: "F12",
    quickMenu: "F12",
    friendsList: "F12",
    mouseSensitivity: 50,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "Public",
    gameActivity: false,
    friendRequests: "Anyone",
    twoFactorAuthentication: false,
  });

  const [notifications, setNotifications] = useState({
    gameNotifications: false,
    friendActivity: false,
    tournamentUpdates: false,
    promotionalOffers: false,
  });

  const [account, setAccount] = useState({
    changePassword: "false",
    emailAddress: "example@example.com",
    downloadData: false,
    deleteAccount: false,
  });
  return (
    <>
      <div className="relative min-h-screen flex flex-col p-10">
        <ThemeBackground />

        <Card
          title="🎮 Game Preferences"
          settings={[
            {
              title: "Auto-Launch Games",
              description: "Automatically start games when purchased",
            },
            {
              title: "Game Progress",
              description: "Select your preferred language",
              rightComponent: (
                <select className="bg-[#0000004D] w-[140px] rounded-lg border border-gray-400 text-white py-2 px-4">
                  {options?.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ),
            },
            {
              title: "Player Name",
              description: "Change your nickname",
              rightComponent: (
                <input
                  type="text"
                  placeholder="Dark Purple"
                  value="Dark Purple"
                  className="bg-[#0000004D] w-[140px] rounded-lg border border-gray-400 text-white py-2 px-4"
                />
              ),
            },
          ]}
        />

        <Card
          title="🔊 Audio Settings"
          settings={[
            {
              title: "Master Volume",
              description: "Overall system volume",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={autoSettings.masterVolume}
                    onChange={(e) =>
                      setAutoSettings({
                        ...autoSettings,
                        masterVolume: e.target.value,
                      })
                    }
                    className="w-full h-2 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="w-10">{autoSettings.masterVolume}%</p>
                </div>
              ),
            },
            {
              title: "Game Audio",
              description: "In-game sound effects and music",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={autoSettings.gameAudio}
                    onChange={(e) =>
                      setAutoSettings({
                        ...autoSettings,
                        gameAudio: e.target.value,
                      })
                    }
                    className="w-full h-2 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="w-10">{autoSettings.gameAudio}%</p>
                </div>
              ),
            },
            {
              title: "Voice Chat",
              description: "Voice communication volume",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={autoSettings.voiceChat}
                    onChange={(e) =>
                      setAutoSettings({
                        ...autoSettings,
                        voiceChat: e.target.value,
                      })
                    }
                    className="w-full h-2 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="w-10">{autoSettings.voiceChat}%</p>
                </div>
              ),
            },
            {
              title: "Mute When Inactive",
              description: "Mute all audio when window loses focus",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setAutoSettings({
                        ...autoSettings,
                        muteWhenInactive: !autoSettings.muteWhenInactive,
                      })
                    }
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                      autoSettings.muteWhenInactive
                        ? "bg-purple-600"
                        : "bg-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        autoSettings.muteWhenInactive
                          ? "translate-x-6"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ),
            },
          ]}
        />

        <Card
          title="🎯 Controls & Key Bindings"
          settings={[
            {
              title: "Screenshot",
              description: "Take a screenshot",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="F12"
                    value="F12"
                    className="bg-[#0000004D] w-15 rounded-lg border border-gray-400 text-white py-2 px-4"
                  />
                  <ThemeBtn title="Change" />
                </div>
              ),
            },
            {
              title: "Quick Menu",
              description: "Open quick access menu",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <div className="text-center bg-[#0000004D] w-20 rounded-lg border border-gray-400 text-white py-2 px-4">
                    Shift
                  </div>
                  <div className="text-center bg-[#0000004D] w-20 rounded-lg border border-gray-400 text-white py-2 px-4">
                    +
                  </div>
                  <input
                    type="text"
                    placeholder="Tab"
                    value="Tab"
                    className="bg-[#0000004D] w-20 rounded-lg border border-gray-400 text-white py-2 px-4"
                  />
                  <ThemeBtn title="Change" />
                </div>
              ),
            },
            {
              title: "Friends List",
              description: "Open friends overlay",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <div className="text-center bg-[#0000004D] w-20 rounded-lg border border-gray-400 text-white py-2 px-4">
                    Shift
                  </div>
                  <div className="text-center bg-[#0000004D] w-20 rounded-lg border border-gray-400 text-white py-2 px-4">
                    +
                  </div>
                  <input
                    type="text"
                    placeholder="F"
                    value="F"
                    className="bg-[#0000004D] w-15 rounded-lg border border-gray-400 text-white py-2 px-4"
                  />
                  <ThemeBtn title="Change" />
                </div>
              ),
            },
            {
              title: "Mouse Sensitivity",
              description: "Global mouse sensitivity multiplier",
              rightComponent: (
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={controls.mouseSensitivity}
                    onChange={(e) =>
                      setControls({
                        ...controls,
                        mouseSensitivity: e.target.value,
                      })
                    }
                    className="w-full h-2 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="w-10">{controls.mouseSensitivity}%</p>
                </div>
              ),
            },
          ]}
        />

        <Card
          title="🔒 Privacy & Security"
          settings={[
            {
              title: "Profile Visibility",
              description: "Who can view your profile",
              rightComponent: (
                <select
                  onChange={(e) =>
                    setPrivacy({
                      ...privacy,
                      profileVisibility: e.target.value,
                    })
                  }
                  className="bg-[#0000004D] w-[140px] rounded-lg border border-gray-400 text-white py-2 px-4"
                >
                  <option value="Public">Public</option>
                  <option value="Friends">Friends</option>
                  <option value="Private">Private</option>
                </select>
              ),
            },
            {
              title: "Game Activity",
              description: "Show what games you're playing",
              rightComponent: (
                <button
                  onClick={() =>
                    setPrivacy({
                      ...privacy,
                      gameActivity: !privacy.gameActivity,
                    })
                  }
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    privacy.gameActivity ? "bg-purple-600" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      privacy.gameActivity ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              ),
            },
            {
              title: "Friend Requests",
              description: "Who can send you friend requests",
              rightComponent: (
                <select
                  onChange={(e) =>
                    setPrivacy({
                      ...privacy,
                      friendRequests: e.target.value,
                    })
                  }
                  className="bg-[#0000004D] w-[140px] rounded-lg border border-gray-400 text-white py-2 px-4"
                >
                  <option value="Public">Anyone</option>
                  <option value="Private">No One</option>
                </select>
              ),
            },
            {
              title: "Two-Factor Authentication",
              description: "Add extra security to your account",
              rightComponent: (
                <ThemeBtn
                  title={privacy.twoFactorAuthentication ? "Disable" : "Enable"}
                  onClick={() =>
                    setPrivacy({
                      ...privacy,
                      twoFactorAuthentication: !privacy.twoFactorAuthentication,
                    })
                  }
                />
              ),
            },
          ]}
        />

        <Card
          title="🔔 Notifications"
          settings={[
            {
              title: "Game Notifications",
              description: "Updates, patches, and game news",
              rightComponent: (
                <button
                  onClick={() => setNotifications({ ...notifications, gameNotifications: !notifications.gameNotifications })}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    notifications.gameNotifications ? "bg-purple-600" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      notifications.gameNotifications ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              ),
            },
            {
              title: "Friend Activity",
              description: "When friends come online or start games",
              rightComponent: (
                <button
                  onClick={() => setNotifications({ ...notifications, friendActivity: !notifications.friendActivity })}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    notifications.friendActivity ? "bg-purple-600" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      notifications.friendActivity ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              ),
            },
            {
              title: "Tournament Updates",
              description: "Tournament results and new events",
              rightComponent: (
                <button
                  onClick={() => setNotifications({ ...notifications, tournamentUpdates: !notifications.tournamentUpdates })}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    notifications.tournamentUpdates ? "bg-purple-600" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      notifications.tournamentUpdates ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              ),
            },
            {
              title: "Promotional Offers",
              description: "Sales, discounts, and special offers",
              rightComponent: (
                <button
                  onClick={() => setNotifications({ ...notifications, promotionalOffers: !notifications.promotionalOffers })}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    notifications.promotionalOffers ? "bg-purple-600" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      notifications.promotionalOffers ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              ),
            },
          ]}
        />

        <Card
          title="👤 Account Settings"
          settings={[
            {
              title: "Change Password",
              description: "Update your account password",
              rightComponent: (
                <input
                  type="text"
                  placeholder="********"
                  value="********"
                  onChange={(e) => setAccount({ ...account, changePassword: e.target.value })}
                  className="bg-[#0000004D] rounded-lg border border-gray-400 text-white py-2 px-4"
                />
              ),
            },
            {
              title: "Email Address",
              description: "Update your email address",
              rightComponent: (
                <input
                  type="text"
                  placeholder="example@example.com"
                  value={account.emailAddress}
                  onChange={(e) => setAccount({ ...account, emailAddress: e.target.value })}
                  className="bg-[#0000004D] rounded-lg border border-gray-400 text-white py-2 px-4"
                />
              ),
            },
            {
              title: "Download Data",
              description: "Download your account data",
              rightComponent: (
                <ThemeBtn title="Download" onClick={() => setAccount({ ...account, downloadData: !account.downloadData })} />
              ),
            },
            {
              title: "Delete Account",
              description: "Permanently delete your account",
              rightComponent: (
                <ThemeBtn title="Delete Account" bgColor="bg-[#DC2626]" onClick={() => setAccount({ ...account, deleteAccount: !account.deleteAccount })} />
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
