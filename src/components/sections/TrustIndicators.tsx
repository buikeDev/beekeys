import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Globe, Zap } from "lucide-react";
import { useTrustIndicators } from "../../hooks/useApiData";

const iconMap = {
  shield: Shield,
  "check-circle": CheckCircle,
  globe: Globe,
  zap: Zap,
};

export const TrustIndicators: React.FC = () => {
  const { data: indicators, isLoading, isError, error } = useTrustIndicators();

  if (isLoading) {
    return (
      <section className="py-5 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-400">
            Loading trust indicators...
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-5 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-400">Error: {error.message}</div>
        </div>
      </section>
    );
  }

  console.log("TrustIndicators indicators:", indicators);

  return (
    <section className="py-5 bg-gray-900 text-[12px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            Trusted by businesses in 50+ countries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2">
          {indicators?.map((indicator, index) => {
            const IconComponent =
              iconMap[indicator.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={indicator.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center items-center gap-1"
              >
                <div className="w-5 h-5 bg-white/10 rounded-lg flex justify-center items-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-[12px] font-semibold text-white">
                  {indicator.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
