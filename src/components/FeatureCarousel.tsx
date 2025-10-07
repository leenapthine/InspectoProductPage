import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Clock, Zap, FileText, CheckCircle } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Old Way',
    subtitle: 'Evening report crunch',
    description: 'Manual typing, scattered photos, hours of admin work after inspection.',
    icon: Clock,
    bgColor: 'from-gray-400 to-gray-500',
    textColor: 'text-gray-100',
    isOld: true
  },
  {
    id: 2,
    title: 'INSPECTO',
    subtitle: 'Hands-free workflow',
    description: 'Voice notes, annotated photos, auto-drafted report—all on site.',
    icon: Zap,
    bgColor: 'from-blue-500 to-blue-600',
    textColor: 'text-white',
    isOld: false
  }
];

export function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative h-48 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} p-6 flex flex-col justify-between`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <IconComponent className="w-4 h-4 text-white" />
                </motion.div>
                <motion.span 
                  className={`text-sm font-semibold ${currentSlideData.textColor} opacity-80`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {currentSlideData.title}
                </motion.span>
              </div>
              
              <motion.h3 
                className={`text-xl font-bold ${currentSlideData.textColor} mb-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {currentSlideData.subtitle}
              </motion.h3>
              
              <motion.p 
                className={`text-sm ${currentSlideData.textColor} opacity-90 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* Status indicator */}
            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {currentSlideData.isOld ? (
                <div className="px-3 py-1 bg-red-500/20 rounded-full">
                  <span className="text-xs text-red-100 font-medium">Outdated</span>
                </div>
              ) : (
                <div className="px-3 py-1 bg-green-500/20 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-100" />
                  <span className="text-xs text-green-100 font-medium">Modern</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((slide, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Manual navigation */}
      <div className="flex gap-2 mt-4 justify-center">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              index === currentSlide
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {slide.title}
          </motion.button>
        ))}
      </div>
    </div>
  );
}