import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Mic, FileText, Clock, Users, Award, ArrowRight, Check } from 'lucide-react';
import { Header } from './components/Header';
import { WorkflowSteps } from './components/WorkflowSteps';
import { MultiPhoneMockup } from './components/MultiPhoneMockup';
import { TrustedBySection } from './components/TrustedBySection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { InspectoLogo } from './components/InspectoLogo';


export default function App() {
  const [email, setEmail] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll notify you when INSPECTO launches.");
    setEmail('');
  };

  const features = [
    {
      icon: Camera,
      title: "Smart Photo Management",
      description: "Organized evidence capture with automatic categorization and smart annotations"
    },
    {
      icon: Mic, 
      title: "AI-Powered Transcription",
      description: "Convert speech to structured inspection notes with industry-specific terminology"
    },
    {
      icon: FileText,
      title: "Instant Report Generation", 
      description: "Professional reports auto-drafted with photos, findings, and recommendations"
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Complete inspection workflows in minutes, not hours"
    },
    {
      icon: Users,
      title: "Client Portal Access",
      description: "Secure sharing and real-time updates for clients and stakeholders"
    },
    {
      icon: Award,
      title: "Industry Compliance",
      description: "Built to meet industry standards and regulatory requirements"
    }
  ];

  const benefits = [
    "Reduce report writing time by 80%",
    "Increase inspection throughput", 
    "Improve client satisfaction",
    "Minimize administrative overhead",
    "Ensure consistent report quality"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Finish a 3-hour report 
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> in minutes</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                INSPECTO streamlines on-site notes and photos, then auto-drafts professional inspection reports for independent home inspectors.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book A Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => window.open('https://inspectos.vercel.app/', '_blank', 'noopener,noreferrer')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try It Out
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-green-500" />
                  No setup required
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-green-500" />
                  Mobile + Cloud
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-green-500" />
                  AI-powered
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <MultiPhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for independent inspectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline inspections and deliver professional reports faster than ever before.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How INSPECTO works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to transform your inspection workflow and cut report time by 80%.
            </p>
          </motion.div>
          
          <WorkflowSteps />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The impact on your business
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              By removing admin bottlenecks, INSPECTO helps inspectors deliver consistent, professional reports that build client trust and increase weekly throughput.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 text-left bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-5xl font-bold text-blue-600 mb-2">2-3 hours → minutes</div>
            <p className="text-lg text-gray-600">Average time savings based on pilot workflows</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Waitlist CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to see INSPECTO in action?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Book a personalized demo and discover how INSPECTO can transform your inspection workflow.
            </p>
          </motion.div>
          
          <motion.form 
            id="waitlist-form" 
            onSubmit={handleWaitlistSubmit} 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <motion.button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book A Demo
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We'll contact you to schedule a personalized demo at your convenience.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <InspectoLogo
            size="md"
            showText
            className="mx-auto block h-16 translate-x-6 md:h-[72px] md:translate-x-10"
          />
          <p className="text-gray-500">
            © 2025 INSPECTO. Built for independent home inspectors.
          </p>
        </div>
      </footer>
    </div>
  );
}
