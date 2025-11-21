import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Sun, Settings, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ModernSolarFAQ() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState("maintenance-0");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const tabs = [
    { id: "general", label: "General", icon: Sun, shortLabel: "General" },
    { id: "maintenance", label: "Maintenance", icon: Settings, shortLabel: "Maintenance" },
    { id: "economics", label: "Economics", icon: DollarSign, shortLabel: "Economics" },
  ];

  // 🔹 FAQ data now loaded from translations
  const faqData = {
    general: t("FAQ.faq.general", { returnObjects: true }),
    maintenance: t("FAQ.faq.maintenance", { returnObjects: true }),
    economics: t("FAQ.faq.economics", { returnObjects: true }),
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const questionMatches = [];
    const answerMatches = [];

    Object.keys(faqData).forEach((category) => {
      faqData[category]?.forEach((faq, index) => {
        const searchLower = searchTerm.toLowerCase();
        const questionMatch = faq.question.toLowerCase().includes(searchLower);
        const answerMatch = faq.answer.toLowerCase().includes(searchLower);

        if (questionMatch) {
          questionMatches.push({ ...faq, category, index, id: `${category}-${index}` });
        } else if (answerMatch) {
          answerMatches.push({ ...faq, category, index, id: `${category}-${index}` });
        }
      });
    });

    const results = [...questionMatches, ...answerMatches];
    setSearchResults(results);

    if (results.length > 0) setActiveTab(results[0].category);
  }, [searchTerm, t]);

  const toggleQuestion = (category, index) => {
    const id = `${category}-${index}`;
    setOpenQuestion(openQuestion === id ? "" : id);
    setActiveTab(category);
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="bg-orange-200 text-orange-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const displayData =
    searchTerm.trim() !== ""
      ? searchResults
      : faqData[activeTab]?.map((faq, index) => ({
          ...faq,
          category: activeTab,
          index,
          id: `${activeTab}-${index}`,
        }));

  return (
    <div className="min-h-screen border-t-1 rounded-md">
      {/* Header Section */}
      <div className="pt-6 pb-20 md:pb-32 px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-5 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3.5 py-2 rounded-full mb-3 border border-black/30 scale-95 md:scale-100">
              <Sun className="w-4 h-4 text-orange-300" />
              <span className="text-orange-300 font-medium text-sm md:text-md">
                {t("FAQ.faq.header.subtitle")}
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-3 tracking-tight leading-snug">
              {t("FAQ.faq.header.title")}
            </h1>
            <p className="text-sm md:text-lg text-blue-400">
              {t("FAQ.faq.header.description")}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mt-4">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t("FAQ.faq.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all shadow-lg text-base"
            />
          </div>

          {searchTerm && (
            <div className="mt-2 text-sm text-blue-100 text-center">
              {searchResults.length} {t("FAQ.faq.searchResults", { count: searchResults.length })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-14 md:-mt-24 px-2 md:px-4 pb-10 md:pb-12">
        <div className="max-w-5xl mx-auto">
          {searchTerm.trim() === "" && (
            <div className="bg-white rounded-2xl shadow-lg p-2 mb-5 grid grid-cols-3 gap-2 sticky top-2 z-30 md:static">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpenQuestion("");
                    }}
                    className={`flex flex-col items-center justify-center gap-1.5 px-2 py-2.5 rounded-xl font-semibold text-[13px] md:text-base transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg scale-105"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-5 md:h-5" />
                    <span className="text-[11px] md:text-base">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="space-y-3">
            {displayData?.length > 0 ? (
              displayData.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openQuestion === faq.id
                      ? "shadow-xl border border-blue-500 scale-[1.01]"
                      : "shadow-md border border-gray-100 hover:border-blue-200"
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(faq.category, faq.index)}
                    className="w-full p-4 text-left flex items-start gap-3 active:scale-[0.98] transition-all"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        openQuestion === faq.id
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-md"
                          : "bg-blue-100"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openQuestion === faq.id ? "rotate-180 text-white" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      {searchTerm.trim() !== "" && (
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-semibold rounded-full mb-2 capitalize">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="text-sm md:text-lg font-semibold text-gray-800 leading-snug">
                        {highlightText(faq.question, searchTerm)}
                      </h3>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openQuestion === faq.id
                        ? "opacity-100 max-h-[500px]"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-4 pb-4 pl-12">
                      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-3 border border-blue-100">
                        <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-line">
                          {highlightText(faq.answer, searchTerm)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-gray-700 text-sm font-semibold">{t("FAQ.faq.noResults.title")}</p>
                <p className="text-gray-500 text-xs mt-1">{t("FAQ.faq.noResults.subtitle")}</p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-5 text-center shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="text-white">
                  <p className="font-bold text-base mb-0.5">{t("FAQ.faq.footer.title")}</p>
                  <p className="text-sm text-blue-100">{t("FAQ.faq.footer.subtitle")}</p>
                </div>
                <a
                  href="tel:9422809337"
                  className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
                >
                  {t("FAQ.faq.footer.button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
