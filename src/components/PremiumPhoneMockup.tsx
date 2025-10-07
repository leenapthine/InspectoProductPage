import { motion } from 'motion/react';
import { Check, Camera, Mic, Zap } from 'lucide-react';

export function PremiumPhoneMockup() {
  return (
    <motion.div 
      className="relative mx-auto w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Phone frame with glass effect */}
      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative backdrop-blur-xl bg-opacity-95">
        {/* Status bar */}
        <div className="h-6 bg-white flex items-center justify-between px-6 text-xs text-black font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 border border-black rounded-sm">
              <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>
        
        {/* App content */}
        <div className="p-4 h-full bg-gradient-to-br from-white to-blue-50">
          {/* Header */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-1 text-gray-900">Home Inspection</h3>
            <div className="text-sm text-gray-600 font-medium">123 Oak Street</div>
            <motion.div 
              className="flex items-center gap-2 mt-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-semibold">Ready for Inspection</span>
            </motion.div>
          </motion.div>
          
          {/* Checklist with staggered animations */}
          <div className="space-y-3 mb-6">
            {[
              { item: 'Exterior', completed: true, delay: 0.8 },
              { item: 'Roof', completed: true, delay: 0.9 },
              { item: 'Electrical', completed: false, delay: 1.0 },
              { item: 'Basement', completed: false, delay: 1.1 }
            ].map(({ item, completed, delay }) => (
              <motion.div 
                key={item}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.5 }}
              >
                <motion.div 
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                    completed 
                      ? 'border-blue-500 bg-blue-500' 
                      : 'border-gray-300 bg-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {completed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: delay + 0.2, duration: 0.3 }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.div>
                <span className={`text-sm font-medium ${completed ? 'text-gray-900' : 'text-gray-500'}`}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Photo with annotation - enhanced */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="relative w-full h-24 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl overflow-hidden shadow-lg">
              {/* Simulated photo content */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 bg-gray-700 rounded-sm opacity-60"></div>
              <div className="absolute bottom-3 right-3 w-6 h-4 bg-gray-600 rounded-sm opacity-40"></div>
              
              {/* Annotation dot with enhanced ping animation */}
              <motion.div 
                className="absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-white shadow-lg annotation-ping"
                style={{ backgroundColor: '#FF7A1A' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              />
              
              {/* Severity tag */}
              <motion.div 
                className="absolute bottom-2 left-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <span 
                  className="px-2 py-1 rounded-full text-xs font-semibold shadow-sm"
                  style={{ 
                    backgroundColor: '#FFEDE5', 
                    color: '#B9481E' 
                  }}
                >
                  Moderate
                </span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Voice note chip - enhanced */}
          <motion.div 
            className="flex items-start gap-3 p-3 rounded-xl shadow-sm border"
            style={{ backgroundColor: '#E6F2FF', borderColor: '#B8DAFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="mt-0.5"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ delay: 2, duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Mic className="w-4 h-4 flex-shrink-0 text-blue-600" />
            </motion.div>
            <motion.span 
              className="text-sm font-medium text-blue-800 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              "Outlet in living room warm to touch—retest."
            </motion.span>
          </motion.div>

          {/* Quick action buttons */}
          <motion.div 
            className="flex gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.button 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 text-white rounded-lg text-xs font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-3 h-3" />
              Photo
            </motion.button>
            <motion.button 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white rounded-lg text-xs font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mic className="w-3 h-3" />
              Voice
            </motion.button>
            <motion.button 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-orange-600 text-white rounded-lg text-xs font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-3 h-3" />
              Auto
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}