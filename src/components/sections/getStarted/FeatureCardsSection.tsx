import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useFeatureCards } from "../../../hooks/useApiData";

export const FeatureCardsSection: React.FC = () => {
  const { data: featureCards, isLoading } = useFeatureCards();
  const sliderRef = useRef<HTMLDivElement>(null);
  // Drag state
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (sliderRef.current) {
      sliderRef.current.classList.add("cursor-grabbing");
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (sliderRef.current)
      sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    if (sliderRef.current)
      sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading feature cards...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-16 pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pr-8 cursor-grab select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] "
            style={{ WebkitOverflowScrolling: "touch" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {featureCards?.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative min-w-[320px] max-w-xs aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group select-none"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110 select-none"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    userSelect: "none",
                  }}
                  draggable={false}
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 ${card.overlayColor} group-hover:bg-black/70 transition-colors duration-300`}
                />
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white select-none">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Faded edges for overflow effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" />
        </div>
      </div>
    </section>
  );
};
