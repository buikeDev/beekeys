import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Share } from "lucide-react";
import { useHowItWorksSteps } from "../../hooks/useApiData";

const iconMap = {
  search: Search,
  "shield-check": ShieldCheck,
  share: Share,
};

export const HowItWorksSection: React.FC = () => {
  const { data: steps, isLoading } = useHowItWorksSteps();

  if (isLoading) {
    return (
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">Loading steps...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-yellow-50">
      <div className="max-w-7xl flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:w-[400px]"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-4">
            How Beekeys Work
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Beekeys works finding businesses at
            listing your own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps?.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center bg-white rounded-[12px] p-8"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {step.step}
                    </span>
                  </div>
                  {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div> */}
                </div>

                <h3 className="text-md font-bold text-black mb-4">
                  {step.title}
                </h3>

                <p className="text-black text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
