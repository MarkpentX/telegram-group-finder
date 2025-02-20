
import { SearchForm } from "@/components/SearchForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-accent/50 to-background py-12 px-4">
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
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Search Engine
            </h1>
            <p className="text-lg text-gray-600">
              Enter a keyword to search for groups or channels
            </p>
          </motion.div>
        </div>
        
        <SearchForm />
      </motion.div>
    </div>
  );
};

export default Index;
