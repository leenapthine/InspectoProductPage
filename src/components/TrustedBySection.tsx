import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrustedBySection() {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-semibold">
            Trusted by
          </p>
          
          <div className="flex justify-center items-center">
            <motion.a
              href="https://lockwoodhomeinspections.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop"
                  alt="Lockwood Home Inspections"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  width={200}
                  height={80}
                />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
