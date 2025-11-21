import React, { useState } from "react";
import {
  Sun,
  Zap,
  DollarSign,
  Activity,
  ArrowDownUp,
  Grid3x3,
  Shield,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function SolarBuyingGuide() {
  const [openFAQ, setOpenFAQ] = useState(null);
    const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

const iconMap = {
  adv1: <CheckCircle className="w-5 h-5" />,
  adv2: <DollarSign className="w-5 h-5" />,
  adv3: <Zap className="w-5 h-5" />,
  adv4: <DollarSign className="w-5 h-5" />,
  adv5: <Shield className="w-5 h-5" />,
  adv6: <DollarSign className="w-5 h-5" />,
  adv7: <CheckCircle className="w-5 h-5" />,
  adv8: <Sun className="w-5 h-5" />
};


const advantages = Object.keys(t("SolarBuyingguid2.Content.advantages", { returnObjects: true })).map(
  (key) => {
    const item = t(`SolarBuyingguid2.Content.advantages.${key}`, { returnObjects: true });
    return {
      icon: iconMap[item.icon],
      title: item.title,
      desc: item.desc
    };
  }
);
// console.log("advantages is : ", t("SolarBuyingguid.Content.advantages", { returnObjects: true }));

  // const advantages = [
  //   {
  //     icon: <CheckCircle className="w-5 h-5" />,
  //     title: "Energy Production Monitoring",
  //     desc: "It's easy to keep a track of the units of electricity that your solar system generated",
  //   },
  //   {
  //     icon: <DollarSign className="w-5 h-5" />,
  //     title: "Simplified Solar Billing",
  //     desc: "It's easier to understand the solar electricity bill",
  //   },
  //   {
  //     icon: <Zap className="w-5 h-5" />,
  //     title: "Rapid Payback & Decades of Free Power",
  //     desc: "Once the solar on-grid system's price breaks even in 3 to 5 years, you get free solar electricity for the next 20-22 years",
  //   },
  //   {
  //     icon: <DollarSign className="w-5 h-5" />,
  //     title: "Significant Monthly Savings",
  //     desc: "The monthly electricity bill reduces substantially",
  //   },
  //   {
  //     icon: <Shield className="w-5 h-5" />,
  //     title: "No Battery Requirement",
  //     desc: "Your grid plays the role of the battery. The system will directly supply excess units to the grid and take them back when needed",
  //   },
  //   {
  //     icon: <DollarSign className="w-5 h-5" />,
  //     title: "No Battery Replacement Costs",
  //     desc: "Since there's no battery, there are no battery replacement charges involved",
  //   },
  //   {
  //     icon: <CheckCircle className="w-5 h-5" />,
  //     title: "Most Affordable Solar Option",
  //     desc: "Out of the 3 types of solar systems, the on-grid solar system for homes is the most affordable option",
  //   },
  //   {
  //     icon: <Sun className="w-5 h-5" />,
  //     title: "Exclusive Solar Subsidy",
  //     desc: "The government offers a subsidy only on an on-grid solar system for residential homes (that use DCR panels)",
  //   },
  // ];

  // const installationSteps = [
  //   {
  //     step: 1,
  //     title: "Rooftop Inspection and Site Assessment",
  //     desc: "A trained engineer surveys your rooftop to map shadow-casting objects and determine the optimal panel orientation (usually south in India) and tilt angle (approximately equal to your latitude). This analysis maximizes sunlight exposure and long-term energy yield.",
  //   },
  //   {
  //     step: 2,
  //     title: "Roof Mounting and Panel Clamping",
  //     desc: "Mounting structures are securely fixed to your roof using corrosion-protected rails and fasteners. Panels are then clamped onto these rails, following the manufacturer's torque specifications to prevent damage.",
  //   },
  //   {
  //     step: 3,
  //     title: "Inverter Installation & Electrical Wiring",
  //     desc: "Solar strings (series-connected panels) are routed to the DC combiner box, then to the inverter, which converts DC into grid-compatible AC. AC output is channeled through an AC combiner box to your bi-directional meter, with all cables protected in conduit or trays.",
  //   },
  //   {
  //     step: 4,
  //     title: "Earthing & Lightning Protection",
  //     desc: "Dedicated earthing rods and cables bond both DC and AC components to the ground, safeguarding against electrical faults. A lightning arrester mounted above the panels intercepts strikes and diverts surge energy safely to the earthing grid.",
  //   },
  //   {
  //     step: 5,
  //     title: "System Commissioning & Monitoring Setup",
  //     desc: "Technicians verify string voltages, phase sequence, and inverter settings before energizing the system. Finally, the inverter is linked to your Wi-Fi for real-time performance monitoring, ensuring any issues are spotted and resolved promptly.",
  //   },
  // ];

  const installationSteps = Object.keys(t("SolarBuyingguid2.Content.installationSteps", { returnObjects: true })).map(
  (key) => t(`SolarBuyingguid2.Content.installationSteps.${key}`, { returnObjects: true })
);

const iconMap2 = {
  comp1: <Grid3x3 className="w-6 h-6 md:w-8 md:h-8" />,
  comp2: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
  comp3: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
  comp4: <Activity className="w-6 h-6 md:w-8 md:h-8" />,
  comp5: <ArrowDownUp className="w-6 h-6 md:w-8 md:h-8" />
};


const compData = t("SolarBuyingguid2.Content.components", {
  returnObjects: true
});

const components = Object.keys(compData).map((key) => {
  const item = compData[key];
  return {
    ...item,
    icon: iconMap2[item.icon],
  };
});

  // const components = [
  //   {
  //     icon: <Grid3x3 className="w-6 h-6 md:w-8 md:h-8" />,
  //     title: "Solar Panels",
  //     description:
  //       "Solar panels are the most visible part of the solar system. They're installed on the rooftop, facing the South direction. When sunlight falls on these panels, they absorb that sunlight and convert it into electricity.",
  //     note: "Solar electricity directly from the panels is DC power. Since homes require alternating current (AC), a solar inverter is needed to convert direct current into AC.",
  //   },
  //   {
  //     icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
  //     title: "Solar Inverter",
  //     description:
  //       "Without a solar inverter, the entire solar system would have been an impractical model. The solar inverter converts DC into AC.",
  //     note: "This conversion is essential because that's the only way to convert electricity generated from an on-grid solar system into a usable form (AC) that can run household appliances.",
  //   },
  //   {
  //     icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
  //     title: "Solar Module Mounting Structures",
  //     description:
  //       "These are the pillars that support solar panels. They must be of a standard grade so that they can withstand heavy winds during storms and cyclones and hold the weight of the solar panels for 25 years (that's the life of a solar system).",
  //     features: [
  //       "Withstand wind speeds as high as 170 kmph",
  //       "Prevent rusting for years because they have a high-density galvanized iron (HDGI) coating of 80 microns to withstand corrosion.",
  //     ],
  //   },
  //   {
  //     icon: <Activity className="w-6 h-6 md:w-8 md:h-8" />,
  //     title: "Solar Accessories",
  //     description:
  //       "They might not sound that important in the entire setup, but solar accessories are as important as a panel, an inverter, or a mounting structure.",
  //     accessories: [
  //       {
  //         name: "AC and DC cables",
  //         desc: "They are required for wiring solar panels and connecting different parts to make the entire solar grid functional.",
  //       },
  //       {
  //         name: "DC combiner boxes",
  //         desc: "A DC combiner box works like an isolation box. All the cables carrying DC current from the panels are isolated in this box. DC power coming from the panels can be as high as 1,000 volts, even more. It's dangerous (potentially lethal); hence, a DC combiner box is required. This box feeds the DC current into the solar inverter and the solar inverter produces alternating current.",
  //       },
  //       {
  //         name: "AC combiner boxes",
  //         desc: "The AC power from the solar inverter is fed into an AC combiner box (all cables carrying the AC current from multiple inverters are combined in this box).",
  //       },
  //       {
  //         name: "Earthing strips and wires",
  //         desc: "Once the entire on-grid solar system is set up, earthing is done using earthing strips and wires.",
  //       },
  //     ],
  //   },
  //   {
  //     icon: <ArrowDownUp className="w-6 h-6 md:w-8 md:h-8" />,
  //     title: "Bi-directional Meter",
  //     description:
  //       "Also known as a net meter, the bi-directional meter is basically designed to keep a track of electricity supplied to the grid and electricity imported from the grid.",
  //     note: "An on-grid solar system will not become functional until and unless the regular meter is replaced with a bidirectional meter.",
  //   },
  // ];

  const workingSteps =  Object.keys(t("SolarBuyingguid2.Content.workingSteps", { returnObjects: true })).map(
  (key) => t(`SolarBuyingguid2.Content.workingSteps.${key}`, { returnObjects: true })
);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
  {/* Hero Banner - Mobile Optimized */}
  <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12 lg:py-20">
      <div className="text-center">
        <h2 className="text-xl leading-tight sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          {t('SolarBuyingguid.hero.title')}
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl opacity-95 mb-2">
          {t('SolarBuyingguid.hero.subtitle')}
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
          fill="#F9FAFB"
        />
      </svg>
    </div>
  </div>

  {/* Main Content - Mobile Optimized */}
  <main className="max-w-6xl mx-auto px-3 py-6 sm:px-4 sm:py-12">

    {/* Overview Section - Mobile Optimized */}
    <section className="bg-white rounded-lg shadow-lg p-4 mb-6 sm:p-8 sm:mb-8">
      <h2 className="text-xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        {t('SolarBuyingguid.overview.heading')}
      </h2>

      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
        {t('SolarBuyingguid.overview.para1')}
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-3 mb-3 sm:p-4 sm:mb-4">
        <p className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
          {t('SolarBuyingguid.overview.priceExamplesTitle')}
        </p>

        <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-base">
          <li>
            {t('SolarBuyingguid.overview.priceExample1')}
          </li>
          <li>
            {t('SolarBuyingguid.overview.priceExample2')}
          </li>
        </ul>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 italic">
        {t('SolarBuyingguid.overview.note')}
      </p>
    </section>

    {/* Introduction - Mobile Optimized */}
    <section className="mb-6 sm:mb-8 md:mb-16">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
        {t('SolarBuyingguid.whatIs.heading')}
      </h2>
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 border-l-4 border-blue-600">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
          {t('SolarBuyingguid.whatIs.para1')}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          {t('SolarBuyingguid.whatIs.para2')}
        </p>
        <ul className="mt-3 md:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
          {t('SolarBuyingguid.whatIs.list', { returnObjects: true }).map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Did You Know Box - Mobile Optimized */}
    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl shadow-md p-4 mb-6 sm:p-6 sm:mb-8 md:mb-16 border-l-4 border-amber-500">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
        {t('SolarBuyingguid.didYouKnow.title')}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
        {t('SolarBuyingguid.didYouKnow.text')}
      </p>
    </div>

    {/* Components Section - Mobile Optimized */}
    <section className="mb-6 sm:mb-8 md:mb-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-8">
        {t('SolarBuyingguid.componentsSection.heading')}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">
        {t('SolarBuyingguid.componentsSection.intro')}
      </p>

<div className="space-y-4 sm:space-y-6 md:space-y-8">
  {components.map((component, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-lg p-3 sm:p-6 md:p-8 hover:shadow-xl max-w-full"
      /* removed overflow-hidden */
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="bg-blue-100 p-1 sm:p-3 md:p-4 rounded-lg text-blue-600 flex-shrink-0">
          {component.icon}
        </div>

        {/* IMPORTANT: min-w-0 allows this flex child to shrink and wrap correctly */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-800 mb-1 md:mb-4 break-words whitespace-normal">
            {index + 1}. {component.title}
          </h3>

          {/* preserve newlines and allow wrapping */}
          <p className="text-[11px] sm:text-sm md:text-base text-gray-700 leading-relaxed mb-2 md:mb-4 whitespace-pre-wrap break-words">
            {component.description}
          </p>

          {component.note && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-2 md:p-4 rounded whitespace-pre-wrap break-words">
              <p className="text-[11px] sm:text-sm font-semibold text-blue-900">
                {t('SolarBuyingguid.componentsSection.didYouKnowTitle')}
              </p>
              <p className="text-[11px] sm:text-sm md:text-base text-gray-700 mt-1 whitespace-pre-wrap break-words">
                {component.note}
              </p>
            </div>
          )}

          {component.features && (
            <div className="mt-2 md:mt-4">
              <p className="text-[11px] sm:text-sm md:text-base font-semibold text-gray-800 mb-1">
                {t('SolarBuyingguid.componentsSection.mountingStructurePara1')}
              </p>
             
              <ul className="space-y-1.5 sm:space-y-2">
                {component.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2 text-sm">✓</span>
                    <span className="text-[11px] sm:text-sm md:text-base text-gray-700 whitespace-pre-wrap break-words">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {component.accessories && (
            <div className="mt-2 md:mt-4 space-y-2 md:space-y-4">
              <p className="text-[11px] sm:text-sm md:text-base font-semibold text-gray-800">
                Let's see how!
              </p>

              {component.accessories.map((acc, idx) => (
                <div
                  key={idx}
                  className="pl-3 md:pl-4 border-l-2 border-gray-200 whitespace-pre-wrap break-words"
                >
                  <p className="text-[11px] sm:text-sm md:text-base font-semibold text-gray-800">
                    {acc.name}:
                  </p>
                  {/* use whitespace-pre-wrap so your newline-separated content (like the block you pasted) shows line breaks */}
                  <p className="text-[11px] sm:text-sm md:text-base text-gray-700 whitespace-pre-wrap break-words">
                    {acc.desc}
                  </p>
                </div>
              ))}

              <p className="text-[11px] sm:text-sm text-gray-600 italic mt-2 md:mt-4 whitespace-pre-wrap break-words">
                {t('SolarBuyingguid.accessoriesNote')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

    </section>

    {/* Net Metering Benefits - Mobile Optimized */}
    <section className="mb-6 sm:mb-8 md:mb-16">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md p-4 sm:p-6 md:p-8 border-l-4 border-green-600">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
          {t('SolarBuyingguid.netMetering.heading')}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 md:mb-4">
          {t('SolarBuyingguid.netMetering.para1')}
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 md:mb-4">
          {t('SolarBuyingguid.netMetering.para2')}
        </p>
        <ul className="space-y-1.5 sm:space-y-2 mb-4 md:mb-6">
          {t('SolarBuyingguid.netMetering.list', { returnObjects: true }).map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-xs sm:text-sm md:text-base text-gray-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 md:p-4">
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              <span className="font-semibold text-green-700">
                {t('SolarBuyingguid.netMetering.ifSupplyMore').split(':')[0]}:
              </span>{" "}
              {t('SolarBuyingguid.netMetering.ifSupplyMore').split(':').slice(1).join(':')}
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4">
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              <span className="font-semibold text-blue-700">
                {t('SolarBuyingguid.netMetering.ifUseExtra').split(':')[0]}:
              </span>{" "}
              {t('SolarBuyingguid.netMetering.ifUseExtra').split(':').slice(1).join(':')}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works - Mobile Optimized */}
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
        {t('SolarBuyingguid.howItWorks.heading')}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">
        {t('SolarBuyingguid.howItWorks.introPara')}
      </p>
      <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 md:mb-8">
        {t('SolarBuyingguid.howItWorks.boldHeading')}
      </p>

      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {workingSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-blue-600 text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs sm:text-sm md:text-base">
                {index + 1}
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {step.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* Subsidy Section - Mobile Optimized */}
<section className="bg-white rounded-lg shadow-lg p-4 mb-6 sm:p-8 sm:mb-8">
  <h2 className="text-lg sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 border-b-4 border-orange-500 pb-2 inline-block">
    {t('SolarBuyingguid.subsidySection.heading')}
  </h2>
  <p className="text-xs sm:text-base text-gray-700 mb-4 sm:mb-6">
    {t('SolarBuyingguid.subsidySection.para')}
  </p>

  {/* Mobile-Friendly Table */}
  <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
    <div className="inline-block min-w-full align-middle">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border p-2 sm:p-3 text-left text-xs sm:text-sm md:text-base">
              {t('SolarBuyingguid.subsidySection.table.headers.size')}
            </th>
            <th className="border p-2 sm:p-3 text-left text-xs sm:text-sm md:text-base">
              {t('SolarBuyingguid.subsidySection.table.headers.subsidy')}
            </th>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm md:text-base">
          {t('SolarBuyingguid.subsidySection.table.rows', { returnObjects: true }).map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border p-2 sm:p-3">{row.size}</td>
              <td className="border p-2 sm:p-3 font-semibold text-green-600">{row.subsidy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

<div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 py-4 md:py-8 px-3 md:px-6">
  <div className="max-w-6xl mx-auto">
    {/* Advantages Section */}
    <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        {t('SolarBuyingguid.advantages.heading')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
          >
            <div className="text-green-600 flex-shrink-0 mt-0.5">
              {advantage.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 text-xs md:text-base">
                {advantage.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {advantage.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Disadvantages Section */}
    <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        {t('SolarBuyingguid.limitations.heading')}
      </h2>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 md:p-6 rounded-lg">
        <div className="flex items-start space-x-3 md:space-x-4">
          <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900 text-base md:text-xl mb-2 md:mb-3">
              {t('SolarBuyingguid.limitations.powerOutagesTitle')}
            </h3>
            <p className="text-gray-700 mb-3 md:mb-4 text-xs md:text-base leading-relaxed">
              {t('SolarBuyingguid.limitations.powerOutagesPara')}
            </p>
            <div className="bg-white p-3 md:p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2 text-xs md:text-base">
                {t('SolarBuyingguid.limitations.antiIslandingTitle')}
              </p>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {t('SolarBuyingguid.limitations.antiIslandingPara')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-lg">
        <h3 className="font-bold text-blue-900 text-base md:text-xl mb-2 md:mb-3">
          {t('SolarBuyingguid.comparisonBox.title')}
        </h3>
        <p className="text-gray-700 mb-2 md:mb-3 text-xs md:text-base leading-relaxed">
          {t('SolarBuyingguid.comparisonBox.para')}
        </p>
        <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-gray-700 text-xs md:text-base ml-2">
          {t('SolarBuyingguid.comparisonBox.bullets', { returnObjects: true }).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <p className="text-gray-800 font-semibold mt-3 md:mt-4 text-xs md:text-base">
          {t('SolarBuyingguid.comparisonBox.conclusion')}
        </p>
      </div>
    </section>

    {/* Installation Process */}
    <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        {t('SolarBuyingguid.installation.heading')}
      </h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <p className="font-bold text-yellow-900 mb-2 text-xs md:text-base">
          {t('SolarBuyingguid.installation.importantNoteTitle')}
        </p>
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
          {t('SolarBuyingguid.installation.importantNotePara')}
        </p>
      </div>

      <div className="space-y-3 md:space-y-6">
        {installationSteps.map((step) => (
          <div
            key={step.step}
            className="flex items-start space-x-3 md:space-x-4 p-3 md:p-5 bg-gray-50 rounded-lg border-l-4 border-orange-500"
          >
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
              {step.step}
            </div>
            <div className="flex-1 pt-0.5">
              <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 md:mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Section */}
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
        {t('SolarBuyingguid.whyChoose.heading')}
      </h2>
      <p className="text-sm md:text-xl mb-4 md:mb-6 italic opacity-90">
        {t('SolarBuyingguid.whyChoose.tagline')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
          <h3 className="font-bold text-yellow-400 mb-2 text-sm md:text-lg">
            {t('SolarBuyingguid.whyChoose.features.zeroInvestment.title')}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed">
            {t('SolarBuyingguid.whyChoose.features.zeroInvestment.desc')}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
          <h3 className="font-bold text-yellow-400 mb-2 text-sm md:text-lg">
            {t('SolarBuyingguid.whyChoose.features.swiftInstallation.title')}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed">
            {t('SolarBuyingguid.whyChoose.features.swiftInstallation.desc')}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
          <h3 className="font-bold text-yellow-400 mb-2 text-sm md:text-lg">
            {t('SolarBuyingguid.whyChoose.features.afterSales.title')}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed">
            {t('SolarBuyingguid.whyChoose.features.afterSales.desc')}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5">
          <h3 className="font-bold text-yellow-400 mb-2 text-sm md:text-lg">
            {t('SolarBuyingguid.whyChoose.features.leakageGuarantee.title')}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed">
            {t('SolarBuyingguid.whyChoose.features.leakageGuarantee.desc')}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5 md:col-span-2">
          <h3 className="font-bold text-yellow-400 mb-2 text-sm md:text-lg">
            {t('SolarBuyingguid.whyChoose.features.moneyBack.title')}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed">
            {t('SolarBuyingguid.whyChoose.features.moneyBack.desc')}
          </p>
        </div>
      </div>
    </section>

    {/* FAQs Section */}
    <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        {t('SolarBuyingguid.faqs.heading')}
      </h2>
      <div className="space-y-2 md:space-y-4">
        {t('SolarBuyingguid2.Content.faqs' , { returnObjects: true }).map((faq, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 md:p-5 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            >
              <span className="font-semibold text-left text-gray-900 text-xs md:text-base pr-3">
                {faq.question}
              </span>
              {openFAQ === index ? (
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-blue-900 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-blue-900 flex-shrink-0" />
              )}
            </button>
            {openFAQ === index && (
              <div className="p-4 md:p-5 bg-white border-t-2 border-gray-200 animate-fadeIn">
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* Conclusion */}
    <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
      <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
        {t('SolarBuyingguid.conclusion.heading')}
      </h2>
      <p className="mb-3 md:mb-4 leading-relaxed text-xs md:text-base">
        {t('SolarBuyingguid.conclusion.para1')}
      </p>
      <p className="mb-3 md:mb-4 leading-relaxed text-xs md:text-base">
        {t('SolarBuyingguid.conclusion.para2')}
      </p>
      <p className="font-semibold text-sm md:text-lg">
        {t('SolarBuyingguid.conclusion.final')}
      </p>
    </section>
  </div>

  <style jsx>{`
    ${t('SolarBuyingguid.css.fadeInKeyframes')}
    ${t('SolarBuyingguid.css.animateClass')}
  `}</style>
</div>

  </main>
</div>

  );
}
