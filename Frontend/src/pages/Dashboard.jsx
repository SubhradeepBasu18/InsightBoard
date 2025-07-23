import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { SummaryList } from "@/components/SummaryList";
import { SummaryDetail } from "@/components/SummaryDetail";
import { summaries } from "@/constants";

export default function Dashboard() {
  const [selectedSummary, setSelectedSummary] = useState(summaries[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState("list");

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-gradient-to-br from-[#0B0B0F] via-[#0F0F16] to-[#12121A] text-white">
      {/* Mobile Toggle Buttons */}
      {isMobile && (
        <div className="flex border-b border-[#1E1E2D]/50">
          <button
            className={`flex-1 py-3 ${mobileView === 'list' ? 'bg-[#12121A] text-blue-400' : 'bg-[#0B0B0F]'}`}
            onClick={() => setMobileView('list')}
          >
            Summaries
          </button>
          <button
            className={`flex-1 py-3 ${mobileView === 'detail' ? 'bg-[#12121A] text-blue-400' : 'bg-[#0B0B0F]'}`}
            onClick={() => setMobileView('detail')}
          >
            Details
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Always visible on desktop, conditionally on mobile */}
        <aside className={`${isMobile && mobileView === 'detail' ? 'hidden' : 'flex'} w-full md:w-96 flex-col border-r border-[#1E1E2D]/50`}>
          <div className="p-4 md:p-6 bg-[#12121A]/50 backdrop-blur-xl sticky top-0 z-10">
            <SearchAndFilter 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
          
          <div className="flex-1 overflow-y-auto bg-[#12121A]/50 p-4 md:p-6">
            <SummaryList 
              summaries={summaries}
              selectedSummary={selectedSummary}
              setSelectedSummary={(summary) => {
                setSelectedSummary(summary);
                if (isMobile) setMobileView('detail');
              }}
              searchTerm={searchTerm}
              selectedFilter={selectedFilter}
            />
          </div>
        </aside>

        {/* Main Content - Always visible on desktop, conditionally on mobile */}
        <main className={`${isMobile && mobileView === 'list' ? 'hidden' : 'flex'} flex-1 overflow-auto relative`}>
          <div className="w-full p-4 md:p-8">
            <AnimatePresence mode="wait">
              <SummaryDetail selectedSummary={selectedSummary} />
            </AnimatePresence>
          </div>
          
          {/* Back Button for Mobile */}
          {isMobile && (
            <button 
              className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all z-50"
              onClick={() => setMobileView('list')}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              <span className="sr-only">Back to list</span>
            </button>
          )}
        </main>
      </div>
    </div>
  );
}