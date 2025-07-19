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
    <Card className="bg-[#12121A]/80 backdrop-blur-xl border border-[#2C2C3C]/50 shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {selectedSummary.title}
              </h1>
              <PriorityBadge priority={selectedSummary.priority} />
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{selectedSummary.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{selectedSummary.participants} participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{selectedSummary.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span className="capitalize">{selectedSummary.status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-[#1A1A28] hover:bg-[#232334] border border-[#2C2C3C] transition-colors"
            >
              <Star size={18} className="text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-[#1A1A28] hover:bg-[#232334] border border-[#2C2C3C] transition-colors"
            >
              <MoreHorizontal size={18} className="text-gray-400" />
            </motion.button>
          </div>
        </div>
      </CardHeader>
      
      <Separator className="bg-gradient-to-r from-[#2A2A3C] to-[#3A3A4C]" />
      
      <CardContent className="space-y-8 text-gray-300 mt-6">
        <DetailSection 
          title="Summary"
          iconColor="from-blue-500 to-purple-600"
          content={
            <p className="leading-relaxed">
              The Project Alpha kickoff meeting was held to align the team on the project goals,
              timelines, and responsibilities. Key discussions included the project scope,
              deliverables, and milestones. The team agreed on a weekly meeting schedule to track
              progress and address any roadblocks. Action items were assigned to team members, and
              the project plan was finalized.
            </p>
          }
        />

        <DetailSection 
          title="Decisions"
          iconColor="from-green-500 to-blue-600"
          content={
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                <span>Weekly meetings will be held on Mondays at 10 AM.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                <span>Project plan and timelines were approved.</span>
              </div>
            </div>
          }
        />

        <DetailSection 
          title="Action Items"
          iconColor="from-yellow-500 to-orange-600"
          content={
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <AlertCircle size={16} className="text-yellow-400 flex-shrink-0" />
                <span><strong>Sarah</strong> will finalize the project plan document.</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle size={16} className="text-yellow-400 flex-shrink-0" />
                <span><strong>David</strong> will set up the project tracking tool.</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle size={16} className="text-yellow-400 flex-shrink-0" />
                <span><strong>Emily</strong> will schedule the next team meeting.</span>
              </div>
            </div>
          }
        />

        <DetailSection 
          title="Key Points"
          iconColor="from-purple-500 to-pink-600"
          content={
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Star size={16} className="text-purple-400 flex-shrink-0" />
                <span>Project Alpha aims to increase user engagement by 20%.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star size={16} className="text-purple-400 flex-shrink-0" />
                <span>The project is expected to be completed within three months.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star size={16} className="text-purple-400 flex-shrink-0" />
                <span>The team will use Agile methodology for project management.</span>
              </div>
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
    <div className="flex items-center space-x-2 mb-4">
      <div className={`w-1 h-6 bg-gradient-to-b ${iconColor} rounded-full`}></div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
    <div className="bg-[#1A1A28]/50 p-6 rounded-lg border border-[#2C2C3C]">
      {content}
    </div>
  </motion.div>
);