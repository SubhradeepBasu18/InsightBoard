export default function Testimonials() {
    return (
        <>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Testimonials
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                                style={{ backgroundImage: `url('${t.image}')` }}
                            ></div>
                            <div>
                                <p className="text-white text-base font-medium leading-normal">
                                    "{t.quote}"
                                </p>
                                <p className="text-[#9c99c2] text-sm font-normal leading-normal">{t.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const testimonials = [
    {
        name: "Sophia Patel, Project Manager",
        quote:
            "InsightBoard has revolutionized our team's workflow. We now spend less time on meeting recaps and more on strategic initiatives.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJ1ZIoLL5qiDLOGX9zYFeUDS4VExL_Gzt-0b2oJdcGj9vmG_WpnnZCklYyWHlNiyO3BVdrT1ueqF0fGX50nGtrzKaPqmCWTLaUipK4f-yxo-eHGU775_BAoP2HpARaO0RHRW1YyLZrmpG58mfH7n__j_hq1Z9FDbu453Imw8O9ll89YF8_Sqo7xhUN11nbJ3_1Zg-MH_1uavywj_gQX1XlaJkSrGsLsCIeTJZII2cfpEDcjAjJKa0QGCt3v2hUNrWLtasJu1935o",
    },
    {
        name: "Ethan Chen, Team Lead",
        quote:
            "The automated summaries are incredibly accurate and save us hours each week. It's a game-changer for our productivity.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAOwfay6xyyYVZM1jWMwfcNj7AnkFwwb4FA1tq0Xg9Yi_rMRYHDdgkd96LKeLgkg6ZLpvZe0ISXyWerfKFjcYIVTjPhhCHnIEho06UjftqwvPHbWuaLodVVxDKCrkqf9EwBYUAfHg4vTVoqZOfSR4ZpTJZndDYh9Mv_ScLg6Pig4dAQ-0gzcNWiYN725VsK3U_489EJIFSKj2qVAsN4WHfWAgfUurBiE197spNa7rw4YH38YDxrpA_OfMcuYVCxmC_VZ1j11vRDB0U",
    },
    {
        name: "Olivia Wong, Marketing Director",
        quote:
            "Sharing meeting insights has never been easier. InsightBoard keeps everyone on the same page and ensures no detail is missed.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBwbDk6XXaGLXh5wAs_IUjZP_n1GHVlq40pn6eI_ErJ8axeglq8dd5Fl_jqyxFraJFys25NVWzxmckIP7uKWNfxmTg0Un8f5K2A6n5GRf05hOfNKLm1MCjAz_aSu3ELOpkjGzuNaA1AXkVIIcsAJAumpv7quYtFeX-ll30xR36hD5Z4H6xwXFIJnwW8qp0bCXNPZLx3VzGKPIbb9S68VFD-N909uMet6HzGClINpCDQmd3wS7tZykd-NLwHLQF1-1qp68IxEwQMcrA",
    },
];
