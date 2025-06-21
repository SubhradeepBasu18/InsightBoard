export default function Features() {
    return (
        <div className="flex flex-col gap-10 px-4 py-10 @container">
            <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Key Features
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                    InsightBoard offers a suite of features designed to streamline your meeting analysis and enhance collaboration.
                </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex flex-1 gap-3 rounded-lg border border-[#3d3960] bg-[#1e1d30] p-4 flex-col"
                    >
                        <div className="text-white">{feature.icon}</div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white text-base font-bold leading-tight">{feature.title}</h2>
                            <p className="text-[#9c99c2] text-sm font-normal leading-normal">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const features = [
    {
        title: "Automated Summaries",
        description:
            "Generate concise, structured summaries of your meeting recordings or transcripts with just a few clicks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
            </svg>
        ),
    },
    {
        title: "Time-Saving Efficiency",
        description:
            "Reduce the time spent on reviewing meetings by focusing on key takeaways and action items.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
            </svg>
        ),
    },
    {
        title: "Enhanced Collaboration",
        description:
            "Share summaries with your team to ensure everyone is aligned and informed, improving decision-making and follow-up actions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z" />
            </svg>
        ),
    },
];
