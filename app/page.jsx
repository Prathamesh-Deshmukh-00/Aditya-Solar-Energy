// ❌ NO "use client" here – this must be a server component

export const metadata = {
  title:
    "Aditya Solar Energy | Government Authorized Solar EPC, Subsidy & EMI Support in Maharashtra",
  description:
    "Aditya Solar Energy is a Government authorized, MNRE empaneled solar EPC company based in Telhara, Akola, Maharashtra. We provide high-quality rooftop solar panels, inverters, premium structure kits, full documentation support, bank EMI (SBI & Central Bank at 6% p.a.), and complete National Solar Subsidy processing with 1-year service warranty.",

  keywords: [
    "Aditya Solar Energy",
    "solar installation Maharashtra",
    "rooftop solar Akola",
    "MNRE empaneled solar company",
    "Government authorized solar EPC",
    "solar subsidy Maharashtra",
    "solar EMI SBI",
    "solar EMI Central Bank",
    "high quality solar panels",
    "solar structure kits",
    "solar inverter installation",
  ],

  metadataBase: new URL("https://aditya-solar-services.vercel.app"),

  openGraph: {
    title:
      "Aditya Solar Energy – Government Authorized MNRE Empaneled Solar EPC in Maharashtra",
    description:
      "Rooftop solar installation with high-quality panels, premium inverters, strong structure kits, complete documentation, bank EMI support (SBI & Central Bank at 6% p.a.), and full National Solar Subsidy processing. Based in Telhara, Akola, Maharashtra.",
    url: "https://aditya-solar-services.vercel.app",
    siteName: "Aditya Solar Energy",
    images: [
      {
        // 👇 Put your new banner (1200x630) in /public/ as og-banner.jpg
        url: "/Companybanner.png",
        width: 1200,
        height: 630,
        alt: "Aditya Solar Energy - Solar EPC, Subsidy & EMI Support in Maharashtra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Aditya Solar Energy – Solar EPC, Subsidy & EMI Support in Maharashtra",
    description:
      "Government authorized, MNRE empaneled solar EPC company offering rooftop solar systems, quality panels & inverters, EMI support and subsidy processing.",
    images: ["/Companybanner.png",],
  },

  alternates: {
    canonical: "https://aditya-solar-services.vercel.app",
  },

  authors: [{ name: "Aditya Solar Energy Team" }],
  category: "Solar Energy",
};

import HomePageClient from "./HomePageClient";

export default function Page() {
  return <HomePageClient />;
}
