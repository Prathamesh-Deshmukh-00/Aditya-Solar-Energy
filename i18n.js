import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import mr from "./locales/mr/translation.json";

// Default language
let savedLang = "en";

// Only run this in browser (Next.js server cannot use localStorage)
if (typeof window !== "undefined") {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) {
    savedLang = storedLang;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mr: { translation: mr },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
