import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Who is building it?",
      answer: "University of Victoria"
    },
    {
      question: "When will it be available?",
      answer: "January 2026"
    },
    {
      question: "Can I use my current company report templates?",
      answer: "Absolutely! We use AI to perfectly match your company's existing style so there's no interruptions"
    },
    {
      question: "Can I really send the final report before leaving the job site?",
      answer: "Absolutely! The app automates everything so it only takes 10 minutes to compile, review, and send to your client."
    },
    {
      question: "What if it misses something or the report quality is bad?",
      answer: "The app compiles everything so quickly that you can fully review and edit sections in under 10 minutes before the client arrives on site."
    },
    {
      question: "I'm pretty traditional and I don't put a lot of faith in new technology; is this going to be hard to learn or make my life more complicated?",
      answer: "Nope! The app is specifically designed to streamline existing workflows and remove tedious complexity; not add it. Just open the app, start snapping photos, circle important objects, and speak to record voice notes. That's it! At the end, preview and edit the final report then hit send."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about INSPECTO
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
