import { motion } from 'motion/react';
import { Check, Camera, Mic, MapPin, AlertTriangle, Star, FileText } from 'lucide-react';

export function MultiPhoneMockup() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Main Center Phone - Inspection Dashboard */}
      <motion.div 
        className="relative z-30 mx-auto w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="h-8 bg-black flex items-center justify-between px-8 text-xs text-white font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-white rounded-sm">
                <div className="w-3 h-1 bg-green-400 rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* App content with gradient */}
          <div className="p-6 h-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
            {/* Header */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">INSPECTO</h3>
              <div className="text-blue-200 font-medium">Active Inspection</div>
              <motion.div 
                className="flex items-center gap-2 mt-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-300 font-semibold">Live Recording</span>
              </motion.div>
            </motion.div>
            
            {/* Progress Ring */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/>
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    stroke="#00D4FF" strokeWidth="8" fill="none"
                    strokeLinecap="round"
                    strokeDasharray={283}
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 85 }}
                    transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div 
                className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="text-xs text-blue-200 mb-1">Photos</div>
                <div className="text-xl font-bold text-white">24</div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="text-xs text-blue-200 mb-1">Issues</div>
                <div className="text-xl font-bold text-orange-400">3</div>
              </motion.div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button 
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-blue-500 text-white rounded-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Camera className="w-5 h-5" />
                Capture Photo
              </motion.button>
              <motion.button 
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-green-500 text-white rounded-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Mic className="w-5 h-5" />
                Voice Note
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Left Phone - Photo Annotation */}
      <motion.div 
        className="absolute left-0 top-12 z-20 w-56 h-[450px] bg-gray-800 rounded-[2.5rem] p-2 shadow-xl transform -rotate-12"
        initial={{ opacity: 0, x: -100, rotate: -30 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        whileHover={{ scale: 1.05, rotate: -8 }}
      >
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
          <div className="h-6 bg-white flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <div className="p-4 h-full bg-gradient-to-b from-orange-50 to-red-50">
            <div className="text-lg font-bold mb-4 text-gray-900">Photo Review</div>
            <div className="relative w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-300"></div>
              <motion.div 
                className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: '#FF7A1A' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              />
              <div className="absolute bottom-2 left-2 bg-red-500/20 px-2 py-1 rounded text-xs font-bold text-red-700">
                CRITICAL
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">Electrical Panel</div>
              <div className="text-xs text-gray-500">Exposed wiring detected</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Phone - Voice Transcription */}
      <motion.div 
        className="absolute right-0 top-20 z-10 w-56 h-[450px] bg-gray-800 rounded-[2.5rem] p-2 shadow-xl transform rotate-12"
        initial={{ opacity: 0, x: 100, rotate: 30 }}
        animate={{ opacity: 1, x: 0, rotate: 12 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        whileHover={{ scale: 1.05, rotate: 8 }}
      >
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
          <div className="h-6 bg-white flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <div className="p-4 h-full bg-gradient-to-b from-green-50 to-blue-50">
            <div className="text-lg font-bold mb-4 text-gray-900">Voice Notes</div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-red-600">Recording...</span>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <div className="text-sm text-blue-800">"Basement foundation shows minor cracking on east wall"</div>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <div className="text-sm text-green-800">"HVAC system operational, filters need replacement"</div>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <div className="text-sm text-orange-800">"Electrical outlet warm to touch in kitchen"</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
    </div>
  );
}