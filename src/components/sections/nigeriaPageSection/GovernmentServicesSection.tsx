import React from "react";
import { motion } from "framer-motion";
import { useGovernmentServices } from "../../../hooks/useApiData";

export const GovernmentServicesSection: React.FC = () => {
  const { data: services, isLoading } = useGovernmentServices();

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading government services...
          </div>
        </div>
      </section>
    );
  }

  const getThemeClasses = (themeColor: string) => {
    switch (themeColor) {
      case "red":
        return "bg-red-500/80 hover:bg-red-600/80";
      case "blue":
        return "bg-blue-500/80 hover:bg-blue-600/80";
      case "green":
        return "bg-green-500/80 hover:bg-green-600/80";
      case "white":
        return "bg-white/90 hover:bg-white text-gray-900";
      default:
        return "bg-gray-500/80 hover:bg-gray-600/80";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Govt Emergency Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((service, index) => (
            <motion.div
              key={service.id}
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
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${getThemeClasses(
                  service.themeColor
                )} transition-all duration-300`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    service.themeColor === "white"
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    service.themeColor === "white"
                      ? "text-gray-700"
                      : "text-white/90"
                  }`}
                >
                  {service.description}
                </p>
                <p
                  className={`text-xs mt-2 font-medium ${
                    service.themeColor === "white"
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  Call: {service.contactInfo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
