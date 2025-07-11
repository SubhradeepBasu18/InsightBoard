import React from "react";
import Header from '../components/Header'
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion"

const summaries = [
  { title: "Project Alpha Kickoff", date: "July 20, 2024" },
  { title: "Marketing Strategy Review", date: "July 18, 2024" },
  { title: "Product Roadmap", date: "July 15, 2024" },
  { title: "Sales Team Meeting", date: "July 12, 2024" },
  { title: "Design Review Session", date: "July 10, 2024" },
];

export default function Dashboard() {
    return (
      <div className="flex flex-col h-screen bg-[#0B0B0F] text-white">
        <Header />
  
        <div className="flex flex-1 overflow-hidden mt-20">
          {/* Sidebar */}
          <aside className="w-80 bg-[#12121A] border-r border-[#1E1E2D] p-4">
            <motion.h2
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              All Summaries
            </motion.h2>
            <ScrollArea className="h-full pr-2 space-y-2">
              {summaries.map((summary, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="bg-[#1A1A28] hover:bg-[#232334] border border-[#2C2C3C] transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium truncate text-white">{summary.title}</p>
                      <p className="text-sm text-gray-400">{summary.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </ScrollArea>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-10 overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-[#12121A] border border-[#2C2C3C]">
                <CardHeader>
                  <h1 className="text-2xl font-bold text-white">Project Alpha Kickoff</h1>
                  <p className="text-sm text-gray-400">July 20, 2024</p>
                </CardHeader>
                <Separator className="bg-[#2A2A3C]" />
                <CardContent className="space-y-6 text-gray-300 mt-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">Summary</h2>
                    <p>
                      The Project Alpha kickoff meeting was held to align the team on the project goals,
                      timelines, and responsibilities. Key discussions included the project scope,
                      deliverables, and milestones. The team agreed on a weekly meeting schedule to track
                      progress and address any roadblocks. Action items were assigned to team members, and
                      the project plan was finalized.
                    </p>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">Decisions</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Weekly meetings will be held on Mondays at 10 AM.</li>
                      <li>Project plan and timelines were approved.</li>
                    </ul>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">Action Items</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Sarah will finalize the project plan document.</li>
                      <li>David will set up the project tracking tool.</li>
                      <li>Emily will schedule the next team meeting.</li>
                    </ul>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">Key Points</h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Project Alpha aims to increase user engagement by 20%.</li>
                      <li>The project is expected to be completed within three months.</li>
                      <li>The team will use Agile methodology for project management.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }
  