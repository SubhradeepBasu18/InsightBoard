import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  MoreHorizontal 
} from "lucide-react";
import { PriorityBadge } from "./PriorityBadge";

export const SummaryDetail = ({ selectedSummary }) => {
  return (
    <Card className="bg-[#12121A]/80 backdrop-blur-sm md:backdrop-blur-xl border border-[#2C2C3C]/50 shadow-lg md:shadow-2xl">
      <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent break-words">
                {selectedSummary.title}
              </h1>
              <PriorityBadge priority={selectedSummary.priority} />
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="flex-shrink-0" />
                <span>{selectedSummary.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="flex-shrink-0" />
                <span>{selectedSummary.participants} participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="flex-shrink-0" />
                <span>{selectedSummary.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="flex-shrink-0" />
                <span className="capitalize">{selectedSummary.status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-1.5 sm:p-2 rounded-lg bg-[#1A1A28] hover:bg-[#232334] border border-[#2C2C3C] transition-colors"
            >
              <Star size={16} className="text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-1.5 sm:p-2 rounded-lg bg-[#1A1A28] hover:bg-[#232334] border border-[#2C2C3C] transition-colors"
            >
              <MoreHorizontal size={16} className="text-gray-400" />
            </motion.button>
          </div>
        </div>
      </CardHeader>
      
      <Separator className="bg-gradient-to-r from-[#2A2A3C] to-[#3A3A4C]" />
      
      <CardContent className="space-y-4 md:space-y-6 text-gray-300 mt-4 md:mt-6 px-4 md:px-6">
        <DetailSection 
          title="Summary"
          iconColor="from-blue-500 to-purple-600"
          content={
            <p className="leading-relaxed text-sm md:text-base">
              {selectedSummary.summaryContent || "The Project Alpha kickoff meeting was held to align the team on the project goals, timelines, and responsibilities. Key discussions included the project scope, deliverables, and milestones."}
            </p>
          }
        />

        <DetailSection 
          title="Decisions"
          iconColor="from-green-500 to-blue-600"
          content={
            <div className="space-y-2 md:space-y-3">
              {selectedSummary.decisions?.map((decision, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{decision}</span>
                </div>
              )) || (
                <>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Weekly meetings will be held on Mondays at 10 AM.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Project plan and timelines were approved.</span>
                  </div>
                </>
              )}
            </div>
          }
        />

        <DetailSection 
          title="Action Items"
          iconColor="from-yellow-500 to-orange-600"
          content={
            <div className="space-y-2 md:space-y-3">
              {selectedSummary.actionItems?.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              )) || (
                <>
                  <div className="flex items-start gap-3">
                    <AlertCircle size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base"><strong>Sarah</strong> will finalize the project plan document.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base"><strong>David</strong> will set up the project tracking tool.</span>
                  </div>
                </>
              )}
            </div>
          }
        />

        <DetailSection 
          title="Key Points"
          iconColor="from-purple-500 to-pink-600"
          content={
            <div className="space-y-2 md:space-y-3">
              {selectedSummary.keyPoints?.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Star size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              )) || (
                <>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Project Alpha aims to increase user engagement by 20%.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">The team will use Agile methodology for project management.</span>
                  </div>
                </>
              )}
            </div>
          }
        />
      </CardContent>
    </Card>
  );
};

const DetailSection = ({ title, iconColor, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-1 h-5 md:h-6 bg-gradient-to-b ${iconColor} rounded-full`}></div>
      <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
    </div>
    <div className="bg-[#1A1A28]/50 p-4 md:p-6 rounded-lg border border-[#2C2C3C]">
      {content}
    </div>
  </motion.div>
);