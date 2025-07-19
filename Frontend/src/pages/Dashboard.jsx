import React, { useState } from "react";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { SummaryList } from "@/components/SummaryList";
import { SummaryDetail } from "@/components/SummaryDetail";
import { summaries } from "@/constants";


export default function Dashboard() {
  const [selectedSummary, setSelectedSummary] = useState(summaries[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#0B0B0F] via-[#0F0F16] to-[#12121A] text-white">
      <Header />

      <div className="flex flex-1 overflow-hidden mt-20">
        {/* Sidebar */}
        <aside className="w-96 bg-[#12121A]/50 backdrop-blur-xl border-r border-[#1E1E2D]/50 p-6">
          <div className="space-y-4">
            <SearchAndFilter 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            
            <SummaryList 
              summaries={summaries}
              selectedSummary={selectedSummary}
              setSelectedSummary={setSelectedSummary}
              searchTerm={searchTerm}
              selectedFilter={selectedFilter}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <AnimatePresence mode="wait">
            <SummaryDetail selectedSummary={selectedSummary} />
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}