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
    <div className="flex flex-col items-center w-full h-full">
      {/* Main Container - High-End "Glass" Design */}
      <div
        className="relative overflow-hidden w-full h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]
                   border border-white/10 rounded-2xl shadow-xl 
                   bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-indigo-900 to-slate-900 flex flex-col justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Ambient Background Glows - Scaled down */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMCAwaDIwdjIwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBWMGgyMCIvPjwvc3ZnPg==')] pointer-events-none"></div>

        <div
          className="flex transition-transform duration-700 ease-out h-full relative z-10"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 space-y-4 sm:space-y-6"
            >
              {/* Heading with Modern Gradient Text - Compact */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight text-left tracking-tight drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {slide.heading1}
                </span> 
                <span className="block mt-1 sm:mt-2 text-white/95 text-xl sm:text-2xl md:text-3xl font-bold tracking-normal">
                  {slide.heading2}
                </span>
              </h2>

              {/* Ultra-Premium Highlight Box - Compact */}
              <div className="group relative bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-md shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-yellow-400"></div>

                <p
                  className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed mb-4 font-medium relative z-10"
                  dangerouslySetInnerHTML={{
                    __html: slides[current].message.highlighted
                      .replaceAll("<highlight>", '<span class="font-bold text-yellow-400 drop-shadow-sm">')
                      .replaceAll("</highlight>", "</span>")
                  }}
                ></p>

                {/* Compact Grid Layout (2 cols on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-6 sm:gap-y-3 text-white relative z-10">
                  {slide.details.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 group/item">
                      <div className="flex-shrink-0 mt-0.5 bg-green-500/20 p-1 rounded-full ring-1 ring-green-500/50">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" strokeWidth={3} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors leading-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modern Pill Navigation - Compact */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center space-x-1.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ease-out ${
                current === index
                  ? "w-8 sm:w-12 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/20"
                  : "w-2 sm:w-3 bg-white/20 hover:bg-white/40 hover:w-4 sm:hover:w-6"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroScrollContent;
