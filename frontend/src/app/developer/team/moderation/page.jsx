"use client";
import React, { useState } from "react";
import Container from "@/components/developer/Container";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiShield } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  primaryButtonText,
  onPrimaryAction,
  secondaryButtonText,
  onSecondaryAction,
  primaryIcon: PrimaryIcon, // Icon component prop
  secondaryIcon: SecondaryIcon, // Icon component prop
}) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const modalBackgroundClass =
    "fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4";
  const modalContentClass =
    "bg-[#4B0082] border border-[#9810FA] rounded-xl shadow-2xl w-full max-w-xl transform transition-all duration-300 scale-100 opacity-100";

  return (
    <div className={modalBackgroundClass} onClick={handleClose}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="px-6 py-5 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white font-poppins">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#DAB2FF] mt-1">
              {subtitle}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <RxCross2 className="size-[20px]" />
          </button>
        </div>

        {/* Modal Body (Custom Content) */}
        <div className="px-6 pb-5 max-h-[70vh] overflow-y-auto">{children}</div>

        {/* Modal Footer (Action Buttons) */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="p-6 pt-0 flex justify-end gap-3">
            {secondaryButtonText && onSecondaryAction && (
              <button
                onClick={onSecondaryAction}
                className="px-6 py-2 rounded-xl text-black font-medium transition-colors flex items-center gap-2 bg-[white]"
              >
                {SecondaryIcon && <SecondaryIcon className="w-4 h-4" />}
                {secondaryButtonText}
              </button>
            )}
            {primaryButtonText && onPrimaryAction && (
              <button
                onClick={onPrimaryAction}
                className="px-6 py-2 rounded-xl text-white font-medium transition-colors flex items-center gap-2 bg-[#9810FA] hover:bg-[#9810FA]/80"
              >
                {PrimaryIcon && <PrimaryIcon className="w-4 h-4" />}
                {primaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
const ReportDetailsContent = ({ report, onResponseChange, responseText }) => {
  if (!report) return;
  <p className="text-gray-400">No report data found.</p>;
  return (
    <div className="space-y-2">
      {/* Header/Summary Section */}
      <div className="flex flex-col gap-4 pb-4">
        <div>
          <h2 className="text-[#C27AFF] text-sm md:text-base">Game</h2>
          <h3 className="text-lg font-bold text-white">{report.game}</h3>
        </div>
        <div>
          <h2 className="text-[#C27AFF] text-sm md:text-base">Report Type</h2>
          <h2 className="text-lg font-bold text-white">{report.description}</h2>
        </div>
        <div>
          <h2 className="text-[#C27AFF] text-sm md:text-base">Description</h2>
          <p>
            A player reported inappropriate language in the game chat. This
            needs immediate attention to maintain a safe gaming environment.
          </p>
        </div>
      </div>

      {/* Response Text Area */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="response"
          className="text-[#C27AFF] text-sm md:text-base"
        >
          Your Response
        </label>
        <textarea
          id="response"
          value={responseText}
          onChange={onResponseChange}
          rows="3"
          className="w-full p-3 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white placeholder-[#717182] resize-none"
          placeholder="Describe the actions you've taken..."
        />
      </div>
    </div>
  );
};

export default function Moderation() {
  const [isReportDetailsModalOpen, setIsReportDetailsModalOpen] =
    useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportResponse, setReportResponse] = useState(""); // State for the response textarea

  // Handler for the "View Details" button
  const handleViewDetails = (reports) => {
    setSelectedReport(reports);
    setReportResponse(""); // Clear response on open
    setIsReportDetailsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsReportDetailsModalOpen(false);
    setSelectedReport(null);
    setReportResponse("");
  };

  // ACTION HANDLERS for the new modal buttons
  const handleDismiss = () => {
    console.log(
      `Dismissing Report #${selectedReport.id}. Response: ${reportResponse}`
    );
    // In a real app, you would send this to Firestore/API
    handleCloseModal();
  };

  const handleResolve = () => {
    console.log(
      `Marking Report #${selectedReport.id} as Resolved. Response: ${reportResponse}`
    );
    // In a real app, you would send this to Firestore/API
    handleCloseModal();
  };

  const [activeTab, setActiveTab] = useState("reports");

  // Stat cards data
  const statCards = [
    {
      icon: BsExclamationTriangle,
      title: "Pending Reports",
      value: "3",
      description: "Require your attention",
    },
    {
      icon: FaRegTimesCircle,
      title: "Active Violations",
      value: "2",
      description: "Need to be resolved",
    },
    {
      icon: FiShield,
      title: "Compliance Score",
      value: "92%",
      description: "Good standing",
    },
  ];

  const violations = [
    {
      game: "Fantasy Quest",
      severity: "Medium",
      severityColor: "bg-[#F0B10060]",
      description: "Missing age rating",
      date: "2024-02-07",
      icon: BsExclamationTriangle,
      iconColor: "text-[#FF6467]",
    },
    {
      game: "Cyber Legends",
      severity: "High",
      severityColor: "bg-[#FB2C3660]",
      description: "Asset copyright concern",
      date: "2024-02-05",
      icon: BsExclamationTriangle,
      iconColor: "text-[#FF6467]",
    },
  ];
  // Player reports data
  const playerReports = [
    {
      id: 1,
      game: "Cyber Legends",
      severity: "High",
      severityColor: "bg-[#FB2C3660]",
      description: "Inappropriate Content",
      date: "2024-02-10",
      status: "Pending",
      icon: BsExclamationTriangle,
      iconColor: "text-[#FDC700]",
    },
    {
      id: 2,
      game: "Space Warriors",
      severity: "Low",
      severityColor: "bg-[#00C95060]",
      description: "Bug Report",
      date: "2024-02-09",
      status: "Resolved",
      icon: IoMdCheckmarkCircleOutline,
      iconColor: "text-[#05DF72]",
    },
    {
      id: 3,
      game: "Racing Madness",
      severity: "Medium",
      severityColor: "bg-[#F0B10060]",
      description: "Player Harassment",
      date: "2024-02-08",
      status: "Under Review",
      icon: FiEye,
      iconColor: "text-[#51A2FF]",
    },
  ];

  return (
    <>
      <div className="relative py-7 md:py-[64px] md:px-[64px] gap-2 min-h-screen items-center justify-center flex flex-col">
        <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]"></div>

        {/* heading */}
        <div className="container md:px-0 px-4 relative mx-auto w-full mb-5">
          <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between md:items-center">
            <div className="w-full">
              <h1 className="font-poppins capitalize text-white text-[30px] md:text-4xl">
                Moderation
              </h1>
              <h2 className="font-poppins text-xs md:text-base font-thin mt-2 text-gray-300">
                Review reports and violations for your games
              </h2>
            </div>
          </div>
        </div>

        <div className="flex md:px-0 px-3 flex-col gap-6 w-full container relative mx-auto">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border border-[#FFFFFF33] bg-gradient-to-br bg-[#9333EA29] p-5 md:p-6 backdrop-blur-md hover:opacity-90 transition-opacity`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <Icon className="text-[#E9D4FF] text-lg md:text-xl" />
                    </div>
                    <h3 className="text-[#E9D4FF] text-sm md:text-base font-medium">
                      {card.title}
                    </h3>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-3xl md:text-4xl text-white mb-4">
                      {card.value}
                    </h2>
                    <p className="text-[#DAB2FF] text-xs md:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reports Section */}
          {/* Tabs */}
          <div className="flex gap-3 w-[218px] md:w-[290px] rounded-2xl mb-6 bg-[#FFFFFF1A]">
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-5 md:px-10 py-2 text-sm md:text-base transition-colors ${
                activeTab === "reports"
                  ? "text-white rounded-3xl bg-[#9810FA]"
                  : "text-[#FFFFFF] hover:text-gray-300"
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab("violations")}
              className={`px-7 md:px-10 py-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "violations"
                  ? "text-white rounded-3xl bg-[#9810FA]"
                  : "text-[#FFFFFF] hover:text-gray-300"
              }`}
            >
              Violations
            </button>
          </div>

          {/* Reports List */}
          {activeTab === "reports" && (
            <Container
              title="Player Reports"
              subtitle="Reports submitted by players about your games"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                {playerReports.map((report) => {
                  const Icon = report.icon;
                  return (
                    <div
                      key={report.id}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-[#FFFFFF1A] bg-[#FFFFFF0D] backdrop-blur-md hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 w-full md:w-auto">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#9810FA4D] border border-[#C27AFF4D] flex items-center justify-center">
                          <Icon
                            className={`${report.iconColor} text-base md:text-xl`}
                          />
                        </div>

                        {/* Game Info */}
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-2 md:gap-3 flex-wrap mb-1">
                            <h3 className="text-white text-sm md:text-base">
                              {report.game}
                            </h3>
                            <span
                              className={`px-2.5 md:px-5 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium text-white ${report.severityColor}`}
                            >
                              {report.severity}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[9px] md:text-sm text-[#DAB2FF]">
                            <p className="text-[9px] md:text-sm">
                              {report.description}
                            </p>
                            •<span>{report.date}</span>•
                            <span
                              className={`${report.statusColor} font-medium`}
                            >
                              Status: {report.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => handleViewDetails(report)}
                        className="flex-shrink-0 bg-[#9810FA] hover:bg-[#9810FA]/90 text-white text-xs md:text-sm font-medium px-3 md:px-6 py-1.5 md:py-2.5 rounded-xl transition-colors whitespace-nowrap"
                      >
                        View Details
                      </button>
                    </div>
                  );
                })}

                {/* Custom Modal Instance for Report Details */}
                <CustomModal
                  isOpen={isReportDetailsModalOpen}
                  onClose={handleCloseModal}
                  title={"Report Details"}
                  subtitle={"Review and respond to this report"}
                  // NEW BUTTON CONFIGURATION
                  primaryButtonText="Mark as Resolved"
                  onPrimaryAction={handleResolve}
                  secondaryButtonText="Dismiss"
                  onSecondaryAction={handleDismiss}
                >
                  <ReportDetailsContent
                    report={selectedReport}
                    responseText={reportResponse}
                    onResponseChange={(e) => setReportResponse(e.target.value)}
                  />
                </CustomModal>
              </div>
            </Container>
          )}

          {/* Violations Tab Content */}
          {activeTab === "violations" && (
            <>
              <Container
                title="Policy Violations"
                subtitle="Issues that need to be fixed before publishing"
              >
                <div className="flex flex-col gap-3 md:gap-4">
                  {violations.map((e) => {
                    const Icon = e.icon;
                    return (
                      <div
                        key={e.id}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-[#FB2C364D] bg-[#82181A33] backdrop-blur-md hover:opacity-90 transition-opacity"
                      >
                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 w-full md:w-auto">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md bg-[##E7000B4D] border border-[#E7000B4D] flex items-center justify-center">
                            <Icon
                              className={`${e.iconColor} text-base md:text-xl`}
                            />
                          </div>

                          {/* Game Info */}
                          <div className="flex flex-col min-w-0 flex-1">
                            <div className="flex items-center gap-2 md:gap-3 flex-wrap mb-1">
                              <h3 className="text-white text-sm md:text-base">
                                {e.game}
                              </h3>
                              <span
                                className={`px-2.5 md:px-5 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium text-white ${e.severityColor}`}
                              >
                                {e.severity}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px] md:text-sm text-[#DAB2FF]">
                              <p className="text-[9px] md:text-sm">
                                {e.description}
                              </p>
                              •<span>Detected {e.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <button className="flex-shrink-0 bg-[#9810FA] hover:bg-[#9810FA]/90 text-white text-xs md:text-sm font-medium px-3 md:px-6 py-1.5 md:py-2.5 rounded-xl transition-colors whitespace-nowrap">
                          Fix Issue
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Container>
              <Container
                title="Pre-Publish Checklist"
                subtitle="Ensure your game meets all requirements"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF1A] px-3 py-3 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <IoMdCheckmarkCircleOutline className="size-[23px] text-[#05DF72]" />
                      <h2 className="text-sm md:text-base text-[#DAB2FF]">
                        Age rating assigned
                      </h2>
                    </div>
                  </div>

                  <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF1A] px-3 py-3 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <IoMdCheckmarkCircleOutline className="size-[23px] text-[#05DF72]" />
                      <h2 className="text-sm md:text-base text-[#DAB2FF]">
                        Content moderation enabled
                      </h2>
                    </div>
                  </div>

                  <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF1A] px-3 py-3 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <IoMdCheckmarkCircleOutline className="size-[23px] text-[#05DF72]" />
                      <h2 className="text-sm md:text-base text-[#DAB2FF]">
                        Terms of service accepted
                      </h2>
                    </div>
                  </div>

                  <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF1A] px-3 py-3 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <IoMdCheckmarkCircleOutline className="size-[23px] text-[#FF6467]" />
                      <h2 className="text-sm md:text-base text-white">
                        Privacy policy configured
                      </h2>
                    </div>
                  </div>

                  <div className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF1A] px-3 py-3 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <IoMdCheckmarkCircleOutline className="size-[23px] text-[#FF6467]" />
                      <h2 className="text-sm md:text-base text-white">
                        Asset copyrights verified
                      </h2>
                    </div>
                  </div>
                </div>
              </Container>
            </>
          )}
        </div>
      </div>
    </>
  );
}
