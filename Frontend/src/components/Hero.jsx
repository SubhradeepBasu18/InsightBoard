export default function Hero() {
    return (
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIZfs40-P6j3spKosaGDmnjM2RYHSqAeMFoGSrCnZSmb9ObfZKfO__QpPUjN6sGH1HMwHxu_HQpDPpNAtJsKYx8W4E6WOBzQAENdjUS1zhfaI3T2V_tMTV9oCyVrUBC4oFx8EPoymYgTEJ_9cq9zLVbrDhgJoMSHlp_Gk7jQNJK1Fg_qd6Nqj7Ym2sHDTG9I8gu16R_ABf7Z9bNSOsbnPAFyTBaSFR-HuYOJIGR-q4KJvef0oyQgahfJToyprN1RF1XYFhNdNcOB8')",
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Unlock the Power of Your Meetings
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                InsightBoard transforms your meeting recordings into concise, actionable summaries, saving you time and boosting productivity.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0e0b2e] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  