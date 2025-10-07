import { motion } from 'motion/react';
import { Camera, Mic, FileText, ArrowRight } from 'lucide-react';

export function WorkflowSteps() {
  const steps = [
    {
      number: 1,
      title: "Take photos on-site",
      description: "Capture evidence with smart photo organization and automatic categorization",
      icon: Camera,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,  
      title: "Voice transcribe observations",
      description: "Speak your findings naturally - AI converts speech to structured inspection notes",
      icon: Mic,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 3,
      title: "Instantly generate report", 
      description: "Professional inspection reports auto-drafted with photos, findings, and recommendations",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Lines */}
        <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        <div className="hidden md:block absolute top-20 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Step Number Circle */}
            <motion.div 
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              {step.number}
            </motion.div>
            
            {/* Icon */}
            <motion.div 
              className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <step.icon className="w-6 h-6 text-gray-600" />
            </motion.div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
            
            {/* Arrow for mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden flex justify-center mt-6 mb-2">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}