import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Grid from "../Images/Grid.png";
import man from "../Images/man.png";
import document from "../Images/document.png";
import stamp from "../Images/stamp.png";
import cleaningequipment from "../Images/cleaningequipment.png";
import { HousePlus } from "lucide-react";
import { TruckElectric } from "lucide-react";

export default function SolarTimeline() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: man,
      title: t("timeline.steps.consultation.title"),
      description: t("timeline.steps.consultation.desc"),
      hasButton: true,
    },
    {
      icon: document,
      title: t("timeline.steps.proposal.title"),
      description: t("timeline.steps.proposal.desc"),
    },
    {
      icon: stamp,
      title: t("timeline.steps.paperwork.title"),
      description: t("timeline.steps.paperwork.desc"),
    },
    {
      icon: TruckElectric,
      title: t("timeline.steps.installation.title"),
      description: t("timeline.steps.installation.desc"),
    },
    {
      icon: Grid,
      title: t("timeline.steps.gridConnection.title"),
      description: t("timeline.steps.gridConnection.desc"),
    },
    {
      icon: HousePlus,
      title: t("timeline.steps.powerOn.title"),
      description: t("timeline.steps.powerOn.desc"),
    },
    {
      icon: cleaningequipment,
      title: t("timeline.steps.maintenance.title"),
      description: t("timeline.steps.maintenance.desc"),
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-10 px-3 sm:py-12 sm:px-4 md:py-16 mb-2">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            {t("timeline.title")}
          </h2>
          <p className="text-white text-sm sm:text-base opacity-90 max-w-xl mx-auto px-2 leading-relaxed">
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Timeline - Mobile View */}
        <div className="md:hidden relative max-w-md mx-auto">
          <div className="absolute left-[22px] sm:left-[26px] top-0 bottom-0 w-[2px] bg-white/20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pb-10 sm:pb-12 last:pb-0">
              <div className="absolute left-[13px] sm:left-[15px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00d4ff] border-[3px] sm:border-4 border-[#0a1f5c] z-10"></div>

              <div className="ml-12 sm:ml-16">
                <div className="mb-3 sm:mb-4">
                  {step.icon && step.icon.src ? (
                    <img
                      src={step.icon.src}
                      alt={step.title}
                      className="w-14 h-14 sm:w-16 sm:h-16"
                      loading="lazy"
                    />
                  ) : (
                    step.icon &&
                    React.createElement(step.icon, {
                      className: "w-14 h-14 sm:w-16 sm:h-16",
                      stroke: "white", // 👈 WHITE COLOR FOR LUCIDE ICONS
                    })
                  )}
                </div>

                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 leading-tight">
                  {step.title}
                </h3>

                <p className="text-white text-xs sm:text-sm opacity-90 leading-relaxed">
                  {step.description}
                </p>

                {step.hasButton && (
                  <a
                    href="#hero-form"
                    className="block w-full mt-5 sm:mt-6 bg-[#00d4ff] hover:bg-[#00c4ef] active:bg-[#00b4df] text-[#0a1f5c] font-bold text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-6 rounded-lg transition-colors duration-300 text-center"
                  >
                    {t("timeline.steps.consultation.button")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline - Desktop Zig-Zag View */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 transform -translate-x-1/2"></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative pb-16 last:pb-0">
                <div className="absolute left-1/2 top-8 w-6 h-6 rounded-full bg-[#00d4ff] border-4 border-[#0a1f5c] z-10 transform -translate-x-1/2"></div>

                <div
                  className={`flex items-start ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      isLeft ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    {step.hasButton && (
                      <Link
                        className="mb-6 bg-[#00d4ff] hover:bg-[#00c4ef] text-[#0a1f5c] font-bold text-lg py-4 px-8 rounded-lg transition-colors duration-300 inline-block"
                        href="/"
                      >
                        {t("timeline.steps.consultation.button")}
                      </Link>
                    )}

                    <div
                      className={`mb-5 ${
                        isLeft ? "flex justify-end" : "flex justify-start"
                      }`}
                    >
                      {step.icon && step.icon.src ? (
                        <img
                          src={step.icon.src}
                          alt={step.title}
                          className="w-20 h-20"
                          loading="lazy"
                        />
                      ) : (
                        step.icon &&
                        React.createElement(step.icon, {
                          className: "w-20 h-20",
                          stroke: "white", // 👈 WHITE COLOR FOR LUCIDE ICONS
                        })
                      )}
                    </div>

                    <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-white text-base opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
