import React from "react";
import { motion } from "framer-motion";
import { SearchBar } from "../ui/SearchBar";
import { useHeroContent } from "../../hooks/useApiData";

export const HeroSection: React.FC = () => {
  const { data: heroContent, isLoading } = useHeroContent();

  const popularBusinesses = [
    { label: "@Foodco", href: "#" },
    { label: "@Foodco", href: "#" },
    { label: "@Foodco", href: "#" },
    { label: "@Foodco", href: "#" },
    { label: "@Foodco", href: "#" },
  ];

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white px-5">
      {/* <div>
        <div className="absolute inset-0 bg-black/50" />
      </div> */}

      {/* Content */}
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 text-center mt-10 ">
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
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight px-10"
        >
          Your <span className="text-yellow-400">Business</span> Deserves More
          Than Just an <span className="text-yellow-400">Address</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {heroContent?.description}
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="bg-cover w-full max-w-full rounded-[50px] opacity-100 relative h-[487px] "
            style={{
              backgroundImage: "url(/images/hero.jpg)",
            }}
          >
            <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 bg-black/50 rounded-[50px] my-auto h-full">
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <SearchBar />
                <div className="flex flex-col gap-2 items-start">
                  <span className="font-medium text-base md:text-xl lg:text-2xl leading-none tracking-normal text-white text-start">
                    Porpular in your area
                  </span>
                  <div className="flex items-center gap-2">
                    {popularBusinesses.map((business) => (
                      <div className="rounded-[12px] p-[10px] bg-[#DBB10933] text-white">
                        {business.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
