
import { SearchForm } from "@/components/SearchForm";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1A1F2C] to-[#222222] py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#2AABEE] p-4 rounded-full mb-6 transform rotate-45">
              <Send size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Telegram Search
            </h1>
            <p className="text-lg text-gray-400">
              Find Telegram groups and channels by keyword
            </p>
          </motion.div>
        </div>
        
        <SearchForm />
      </motion.div>
    </div>
  );
};

export default Index;
