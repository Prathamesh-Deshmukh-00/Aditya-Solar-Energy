import React, { useState, useRef, useEffect } from "react";
import WhyCanYouChooseUs1 from "../Images/WhyCanYouChooseUs1.png";
import WhyCanYouChooseUs2 from "../Images/WhyCanYouChooseUs2.png";
import WhyCanYouChooseUs3 from "../Images/WhyCanYouChooseUs3.png";

const WhyChooseUsImageCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: typeof WhyCanYouChooseUs1 === 'string' ? WhyCanYouChooseUs1 : WhyCanYouChooseUs1.src, alt: "Why Choose Us 1" },
    { src: typeof WhyCanYouChooseUs2 === 'string' ? WhyCanYouChooseUs2 : WhyCanYouChooseUs2.src, alt: "Why Choose Us 2" },
    { src: typeof WhyCanYouChooseUs3 === 'string' ? WhyCanYouChooseUs3 : WhyCanYouChooseUs3.src, alt: "Why Choose Us 3" },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollToImage(nextIndex);
    }, 8000); // Scroll every 8 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Update active dot based on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / containerWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Scroll to specific image when dot is clicked
  const scrollToImage = (index) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleWheel = (e) => {
    // Optional: horizontal scroll with mouse wheel if desired, 
    // but typical carousel snap behavior handles standard scrolling well.
    // e.preventDefault();
    // if (scrollRef.current) {
    //   scrollRef.current.scrollLeft += e.deltaY;
    // }
  };

  return (
    <div className="w-full py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl lg:max-w-md mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-center text-gray-900 mb-4 sm:mb-6">
          Why Choose Us ?
        </h2>
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide border border-gray-100 bg-white rounded-xl sm:rounded-2xl shadow-lg"
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full snap-center"
              >
                {/* No fixed aspect ratio - image fills width naturally */}
                <div className="relative w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain bg-gray-50"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator Hint */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => scrollToImage(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex 
                    ? "bg-orange-500 w-6 sm:w-8 h-2 sm:h-2.5" 
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-2.5 sm:h-2.5"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUsImageCarousel;
