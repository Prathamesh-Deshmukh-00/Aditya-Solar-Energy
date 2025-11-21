"use client";

import { useTranslation } from "react-i18next";
import "../i18n";
import  Header  from "../Components/Header.jsx"; // adjust path

export default function HeaderWithLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    typeof window !== "undefined" &&
      localStorage.setItem("lang", lang);
  };

  return <Header changeLanguage={changeLanguage} />;
}
