import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/finalCTA-bg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          <div
            className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-1/3 w-5 h-5 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            More than a directory. It's a local visibility{" "}
            <span className="text-yellow-400">engine</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We have created a scalable community that makes it easier for people
            to find, list, and share accurate contact information for trusted
            local businesses and services across towns, cities and even
            countries.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              variant="yellow"
              size="lg"
              className="text-lg px-8 py-4"
              to="/search"
            >
              Join Beekeys Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
