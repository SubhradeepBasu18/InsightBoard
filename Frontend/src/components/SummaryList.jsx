import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock } from "lucide-react";
import { PriorityBadge } from "./PriorityBadge";

export const SummaryList = ({ 
  summaries, 
  selectedSummary, 
  setSelectedSummary, 
  searchTerm, 
  selectedFilter 
}) => {
  const filteredSummaries = summaries.filter(summary => {
    const matchesSearch = summary.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || summary.priority === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <ScrollArea className="h-full pr-2">
      <div className="space-y-3">
        <AnimatePresence>
          {filteredSummaries.map((summary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedSummary(summary)}
              className="cursor-pointer"
            >
              <Card className={`bg-[#1A1A28]/80 hover:bg-[#232334] border transition-all duration-300 ${
                selectedSummary.title === summary.title 
                  ? "border-blue-500 bg-[#232334]" 
                  : "border-[#2C2C3C]"
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium truncate text-white flex-1 mr-2">
                      {summary.title}
                    </h3>
                    <PriorityBadge priority={summary.priority} />
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{summary.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={12} />
                      <span>{summary.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{summary.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {summary.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-[#2C2C3C] text-xs rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};