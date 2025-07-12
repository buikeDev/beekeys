import React from "react";
import { motion } from "framer-motion";
import { LocationSearchBar } from "../../ui/LocationSearchBar";
import { useNigeriaHero } from "../../../hooks/useApiData";

export const NigeriaHeroSection: React.FC = () => {
  const { data: heroContent, isLoading } = useNigeriaHero();

  if (isLoading) {
    return (
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroContent?.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="lg:w-[900px] py-5 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {heroContent?.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {heroContent?.subtitle}
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5"
        >
          <LocationSearchBar
            placeholder={heroContent?.searchPlaceholder}
            showFilters={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
