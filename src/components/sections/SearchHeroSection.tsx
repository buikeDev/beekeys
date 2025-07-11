import React from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from '../ui/SearchBar';
import { useSearchHeroContent } from '../../hooks/useApiData';

export const SearchHeroSection: React.FC = () => {
  const { data: heroContent, isLoading } = useSearchHeroContent();

  if (isLoading) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            {heroContent?.badge}
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {heroContent?.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {heroContent?.description}
        </motion.p>

        {/* Explore Location Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <Button variant="yellow" size="lg" className="text-lg px-8 py-4">
            Explore location
          </Button>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
};