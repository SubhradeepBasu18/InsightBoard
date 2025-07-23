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
    const matchesSearch = summary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        summary.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === "all" || summary.priority === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <ScrollArea className="h-full w-full">
      <div className="space-y-2 px-1 py-2">
        <AnimatePresence>
          {filteredSummaries.length > 0 ? (
            filteredSummaries.map((summary, index) => (
              <motion.div
                key={summary.id || index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                onClick={() => setSelectedSummary(summary)}
                className="cursor-pointer"
              >
                <Card className={`
                  bg-[#1A1A28]/90 hover:bg-[#232334] border transition-all duration-150
                  ${selectedSummary.id === summary.id ? 
                    "border-blue-500 bg-[#232334]" : 
                    "border-[#2C2C3C]"}
                  active:scale-[0.98] active:bg-[#232334]/80
                `}>
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-medium text-white flex-1 line-clamp-2 text-[0.95rem] leading-tight">
                        {summary.title}
                      </h3>
                      <PriorityBadge priority={summary.priority} size="sm" />
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-gray-400 mb-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="flex-shrink-0" />
                        <span className="truncate max-w-[80px]">{summary.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} className="flex-shrink-0" />
                        <span>{summary.participants}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="flex-shrink-0" />
                        <span>{summary.duration}</span>
                      </div>
                    </div>
                    
                    {summary.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {summary.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-0.5 bg-[#2C2C3C]/80 text-[0.7rem] rounded-full text-gray-300 truncate max-w-[70px]"
                          >
                            {tag}
                          </span>
                        ))}
                        {summary.tags.length > 3 && (
                          <span className="px-2 py-0.5 bg-[#2C2C3C]/80 text-[0.7rem] rounded-full text-gray-300">
                            +{summary.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-gray-400 text-sm"
            >
              No summaries found
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};