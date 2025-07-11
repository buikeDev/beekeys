import React from 'react';
import { motion } from 'framer-motion';
import { useTestimonials } from '../../hooks/useApiData';

export const TestimonialSection: React.FC = () => {
  const { data: testimonials, isLoading } = useTestimonials();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-400">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  const testimonial = testimonials?.[0];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Customer's Feedbacks
          </h2>
        </motion.div>

        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-semibold">
                  {testimonial.author}
                </div>
                {testimonial.role && (
                  <div className="text-white/70 text-sm">
                    {testimonial.role}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};