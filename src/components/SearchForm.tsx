
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Users, Megaphone } from "lucide-react";

type SearchType = "group" | "channel";

export const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState<SearchType>("group");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) {
      toast.error("Please enter a keyword");
      return;
    }
    if (!quantity || parseInt(quantity) <= 0) {
      toast.error("Please enter a valid quantity");
      return;
    }
    toast.success("Searching Telegram...");
    // Handle search logic here
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-6 p-8 bg-white rounded-2xl shadow-lg"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Search keyword</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2AABEE]/50 transition-all duration-200"
          placeholder="Enter Telegram group or channel name..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Search in</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setType("group")}
            className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              type === "group"
                ? "bg-[#2AABEE] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Users size={20} />
            Groups
          </button>
          <button
            type="button"
            onClick={() => setType("channel")}
            className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              type === "channel"
                ? "bg-[#2AABEE] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Megaphone size={20} />
            Channels
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Number of results</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2AABEE]/50 transition-all duration-200"
          placeholder="How many results do you need?"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full px-4 py-3 bg-[#2AABEE] text-white rounded-lg hover:bg-[#2AABEE]/90 transition-all duration-200 font-medium"
      >
        Search Telegram
      </motion.button>
    </motion.form>
  );
};
