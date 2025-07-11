import React from "react";
import { motion } from "framer-motion";
import { SearchBar } from "../../ui/SearchBar";
import { Button } from "../../ui/Button";
import { useSearchHeroContent } from "../../../hooks/useApiData";

export const SearchHeroSection: React.FC = () => {
  const {
    data: heroContent,
    isLoading,
    isError,
    error,
  } = useSearchHeroContent();

  if (isLoading) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="text-red-500">Error: {error.message}</div>
      </section>
    );
  }

  console.log("SearchHeroSection heroContent:", heroContent);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white px-5">
      {/* <div>
        <div className="absolute inset-0 bg-black/50" />
      </div> */}

      {/* Content */}
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 text-center mt-10 lg:w-[1144px]">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center bg-none text-black px-4 py-2  text-sm font-medium mt-10">
            <span className="bg-white">
              <img
                src="/icons/Frame 33.png"
                alt="Badges"
                width={40}
                height={25}
              />
            </span>
            {heroContent?.badge}
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight px-10"
        >
          Find and connect with trusted places, businesses, and services around
          you
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-xl text-black/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          From towns and cities to states, provinces and countries, we help your
          LOCAL space to stand out on a CONTINENTAL Stage. It all starts when
          you List, Search, or Share.
        </motion.p>

        {/* Hero Image*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="bg-cover w-full max-w-full rounded-[50px] opacity-100 relative h-[200px] md:h-[300px] lg:h-[412px] "
            style={{
              backgroundImage: "url(/images/hero.jpg)",
            }}
          >
            <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 bg-black/50 rounded-[50px] my-auto h-full">
              <div className="flex flex-col gap-4 items-center justify-center h-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
