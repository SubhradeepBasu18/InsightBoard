import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const SearchAndFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedFilter, 
  setSelectedFilter 
}) => {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search summaries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#1A1A28] border border-[#2C2C3C] rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
        />
      </div>
      
      <div className="flex space-x-2">
        {["all", "high", "medium", "low"].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              selectedFilter === filter 
                ? "bg-blue-500 text-white" 
                : "bg-[#1A1A28] text-gray-400 hover:bg-[#232334]"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>
    </div>
  );
};