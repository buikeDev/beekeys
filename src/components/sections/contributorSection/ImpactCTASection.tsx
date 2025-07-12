import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../ui/Button";
import { useImpactCTA } from "../../../hooks/useApiData";

export const ImpactCTASection: React.FC = () => {
  const { data: impactCTA, isLoading } = useImpactCTA();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-400">
            Loading impact CTA...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Content */}

      <div
        className="relative z-10 max-w-4xl mx-auto rounded-[20px] p-4 sm:p-6 lg:p-8 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${impactCTA?.backgroundImage})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {impactCTA?.title}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {impactCTA?.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button variant="yellow" size="lg" className="text-lg px-8 py-4">
              {impactCTA?.ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
