// app/layout.jsx
import "./globals.css";
import LayoutClient from "./LayoutClient";

export const metadata = {
  title: "ADITYA SOLAR ENERGY",
  description: "Solar EPC, structure kits, rooftop solar services in Maharashtra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
