import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroScrollContent = () => {
  const { t } = useTranslation();

  // Get slides from translation.json (from the "heroSlides" key)
  const slides = t("heroSlides", { returnObjects: true });

  const [current, setCurrent] = useState(0);

  // Auto-scroll every 10 seconds
  // useEffect(() => {
  //   if (!slides || slides.length === 0) return;
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [slides]);

  // Touch swipe handlers
  let startX = 0;
  let endX = 0;

  const handleTouchStart = (e) => (startX = e.touches[0].clientX);
  const handleTouchMove = (e) => (endX = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (startX - endX > 50) setCurrent((prev) => (prev + 1) % slides.length);
    else if (endX - startX > 50)
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="flex flex-col items-center">
      {/* Main Container */}
      <div
        className="relative overflow-hidden w-full max-w-6xl min-h-[350px] sm:min-h-[450px]
                   border border-gray-200 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full space-y-5 sm:space-y-6 px-4 py-6"
            >
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight text-center lg:text-left">
                <span className="text-cyan-400">{slide.heading1}</span> —<br className="hidden sm:block" />
                <span className="text-white">{slide.heading2}</span>
              </h2>

              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <p
  className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-3 sm:mb-4 text-center lg:text-left"
  dangerouslySetInnerHTML={{
    __html: slides[current].message.highlighted
      .replaceAll("<highlight>", '<span class="font-bold text-yellow-300">')
      .replaceAll("</highlight>", "</span>")
  }}
></p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white">
                  {slide.details.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <p className="text-xs sm:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-4 h-4 bg-yellow-400 scale-110"
                : "w-2.5 h-2.5 bg-gray-400/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroScrollContent;
