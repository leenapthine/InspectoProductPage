import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AnimatedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function AnimatedFeatureCard({ icon: Icon, title, description, delay }: AnimatedFeatureCardProps) {
  return (
    <motion.div 
      className="inspecto-card p-10 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <motion.div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        <Icon className="w-8 h-8 text-blue-600" />
      </motion.div>
      
      <motion.h3 
        className="mb-4 font-bold text-2xl text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}