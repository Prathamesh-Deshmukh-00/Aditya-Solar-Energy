// app/LayoutClient.jsx
"use client";

import HeaderWithLanguage from "./HeaderWithLanguage";
import Footer from "../Components/Footer.jsx"; // same path you used before

export default function LayoutClient({ children }) {
  return (
    <>
      <HeaderWithLanguage />
      {children}
      <Footer />
    </>
  );
}
