import React from "react";
import { Calculator, Wind, Settings, FileText } from "lucide-react";
import solar_installitation from "../Images/solar_installitation.webp";
import material_transportation from "../Images/material_transportation.webp";
import solar_Plant_Instillation from "../Images/solar_Plant_Instillation.webp";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SolarSquarePromo() {
  const { t } = useTranslation();

  const pricingRows = [
    { size: "3kW", installment: "₹1,900", savings: "₹3,600+" },
    { size: <>3.4kW <span className="text-[10px] sm:text-xs font-normal text-gray-500">(Recommended)</span></>, installment: "₹2,000", savings: "₹4,000+" },
    { size: "4kW", installment: "₹2,400", savings: "₹4,800+" },
    { size: "5kW", installment: "₹3,500", savings: "₹6,000+" },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            {t("promo.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            {t("promo.subtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Left Column - Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* EMI Financing Feature */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-snug">
                    {t("promo.features.financing.title")}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {t("promo.features.financing.desc")}
                  </p>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="overflow-x-auto -mx-2 px-2 mt-3 sm:mt-4">
                <table className="w-full min-w-[280px] border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-400 to-cyan-500">
                      <th className="text-left p-2 sm:p-3 lg:p-4 text-white font-semibold text-xs sm:text-sm lg:text-base rounded-tl-lg">
                        {t("promo.table.system")}
                      </th>
                      <th className="text-center p-2 sm:p-3 lg:p-4 text-white font-semibold text-xs sm:text-sm lg:text-base">
                        {t("promo.table.installment")} <br />
                        <span className="text-[10px] sm:text-xs font-normal">
                          ({t("promo.table.years5")})
                        </span>
                      </th>
                      <th className="text-center p-2 sm:p-3 lg:p-4 text-white font-semibold text-xs sm:text-sm lg:text-base rounded-tr-lg">
                        {t("promo.table.savings")} <br />
                        <span className="text-[10px] sm:text-xs font-normal">
                          ({t("promo.table.years25")})
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="p-2 sm:p-3 lg:p-4 font-bold text-xs sm:text-sm lg:text-base text-gray-900">
                          {row.size}
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4 text-center font-semibold text-xs sm:text-sm lg:text-base text-gray-700">
                          {row.installment}
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4 text-center font-bold text-blue-600 text-xs sm:text-sm lg:text-base">
                          {row.savings}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cyclone-proof Feature */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Wind className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-snug">
                    {t("promo.features.strong.title")}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {t("promo.features.strong.desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance Promise */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-snug">
                    {t("promo.features.maintenance.title")}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {t("promo.features.maintenance.desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Government Subsidy */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-2.5 lg:p-3 rounded-lg md:rounded-xl flex-shrink-0 shadow-md">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-snug">
                    {t("promo.features.subsidy.title")}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {t("promo.features.subsidy.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={solar_installitation.src}
                alt={t("promo.images.installationAlt")}
                className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={material_transportation.src}
                alt={t("promo.images.teamAlt")}
                className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={solar_Plant_Instillation.src}
                alt={t("promo.images.consultAlt")}
                className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text_WHITE mb-2 leading-tight">
              {t("promo.cta.title")}
            </h3>
            <p className="text-blue-200 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
              {t("promo.cta.subtitle")}
            </p>
            <Link
              href="/"
              className="inline-block bg-orange-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-orange-600 active:scale-95 transform sm:hover:scale-105 transition text-sm sm:text-base"
            >
              {t("promo.cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
