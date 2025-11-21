import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  Home,
  Briefcase,
  PhoneCall,
  Book,
  Sun,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18n.language || localStorage.getItem("lang") || "en";

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/Services", label: "Services", icon: Briefcase },
    { to: "/ContactUs", label: "Contact Us", icon: PhoneCall },
    { to: "/BuyingGuide", label: "Buying Guide", icon: Book },
  ];

  return (
    <header
      className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-2xl py-2" : "shadow-lg py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            onClick={() => router.push("/")}
            className="flex items-center space-x-3 cursor-pointer group transition-transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-180 transition-transform duration-500">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ADITYA SOLAR ENERGY
              </h1>
              <p className="text-xs text-blue-200 italic hidden sm:block font-light">
                Your Partner in Sustainable Solar Solutions™
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-lg relative overflow-hidden transition-all duration-300 
                    ${
                      isActive
                        ? "bg-white/20 text-orange-400"
                        : "hover:bg-white/10"
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive
                        ? "text-orange-400"
                        : "text-blue-200 group-hover:text-orange-400"
                    }`}
                  />
                  <span
                    className={`font-medium text-sm transition-colors duration-300 relative ${
                      isActive
                        ? "text-orange-400"
                        : "group-hover:text-orange-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button + Language Buttons + Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* ✅ Highlighted Language Buttons */}
            <div className="hidden md:flex items-center space-x-2 mr-3">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                  currentLang === "en"
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("mr")}
                className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                  currentLang === "mr"
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                मराठी
              </button>
            </div>

            {/* Call button */}
            <a
              href="tel:9284287565"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>9284287565</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-blue-800 to-blue-900 border-t border-blue-700/50">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group transform hover:translate-x-1 
                    ${
                      isActive
                        ? "bg-white/20 text-orange-400"
                        : "hover:bg-white/10"
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive
                        ? "text-orange-400"
                        : "text-blue-200 group-hover:text-orange-400"
                    }`}
                  />
                  <span
                    className={`font-medium text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-orange-400"
                        : "group-hover:text-orange-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* ✅ Mobile Language Buttons with highlight */}
            <div className="flex justify-center space-x-3 mt-3">
              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  currentLang === "en"
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  changeLanguage("mr");
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  currentLang === "mr"
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                मराठी
              </button>
            </div>

            <a
              href="tel:9284287565"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg mt-3 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9284287565</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
