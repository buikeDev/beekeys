import React from "react";
import { motion } from "framer-motion";
import { useActionCards } from "../../../hooks/useApiData";

export const WhatYouCanDoSection: React.FC = () => {
  const { data: actionCards, isLoading } = useActionCards();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading action cards...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <span className="text-sm md:text-md">Benefits</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            What You Can Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actionCards?.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
