import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Camera, Zap, Send } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Capture on-site',
    description: 'photos, voice, checklist (offline OK)',
    icon: Camera,
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 2,
    title: 'Auto-draft',
    description: 'issues, severity, locations, recommendations',
    icon: Zap,
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: 3,
    title: 'Finalize & send',
    description: 'branded PDF or link',
    icon: Send,
    color: 'from-green-500 to-green-600'
  }
];

export function ProgressSteps() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="space-y-8">
      {/* Progress Bar */}
      <motion.div 
        className="progress-bar mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
      </motion.div>

      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div 
          key={step.number}
          className="flex gap-4 items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg bg-gradient-to-br ${step.color}`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2 + 0.3,
              type: "spring",
              damping: 15,
              stiffness: 200
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <step.icon className="w-5 h-5" />
          </motion.div>
          
          <div className="flex-1 pt-1">
            <motion.h4 
              className="font-semibold text-gray-900 mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
              {step.title}
            </motion.h4>
            
            <motion.p 
              className="text-sm text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            >
              {step.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}