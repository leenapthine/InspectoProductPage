import { motion } from "motion/react";
import inspectorLogo from "figma:asset/2773b54b1ebecc8bf76ca8ce37aa97a26de00f92.png";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          ></motion.div>

          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            onClick={() =>
              document
                .getElementById("waitlist-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}