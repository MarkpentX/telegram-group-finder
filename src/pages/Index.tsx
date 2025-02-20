
import { SearchForm } from "@/components/SearchForm";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#2AABEE]/10 to-background py-12 px-4">
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
            <div className="bg-[#2AABEE] p-4 rounded-full mb-6">
              <MessageCircle size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Telegram Search
            </h1>
            <p className="text-lg text-gray-600">
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
