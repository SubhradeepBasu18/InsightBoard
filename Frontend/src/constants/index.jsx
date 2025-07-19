import {
  ArrowDownTrayIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  ClockIcon,
} from "@heroicons/react/24/outline"

export const features = [
  {
    title: "Automated Summaries",
    description: "AI-powered summaries that capture key decisions, action items, and important discussions.",
    icon: <ArrowDownTrayIcon className="h-6 w-6" />,
  },
  {
    title: "Action Item Tracking",
    description: "Automatically identify and track action items assigned during meetings, ensuring accountability.",
    icon: <CursorArrowRaysIcon className="h-6 w-6" />,
  },
  {
    title: "Smart Scheduling",
    description: "Intelligent meeting scheduling that finds optimal times for all participants across time zones.",
    icon: <ClockIcon className="h-6 w-6" />,
  },
  {
    title: "Key Metric Extraction",
    description: "Automatically extract key metrics and data points discussed during meetings for reporting.",
    icon: <ChartBarSquareIcon className="h-6 w-6" />,
  },
  {
    title: "Cross-Platform Integration",
    description: "Seamlessly integrate with your existing calendar, video conferencing, and project management tools.",
    icon: <Squares2X2Icon className="h-6 w-6" />,
  },
  {
    title: "Real-time Collaboration",
    description: "Enable real-time collaboration during meetings with shared notes, agendas, and action items.",
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
  },
]


export const testimonials = [
  {
    name: "Emma Watson, Product Manager",
    quote:
      "InsightBoard has completely transformed how we handle our product meetings. The AI summaries are incredibly accurate and save us hours every week.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Emma_Watson_Circle_5.png/250px-Emma_Watson_Circle_5.png",
  },
  {
    name: "Sydney Sweeney , UX Director",
    quote:
      "The automated action item tracking is a game-changer. Our design team stays perfectly aligned, and nothing falls through the cracks anymore.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbAKRmWDwId9UFpCg_HxWZgK0SruPNORHgw&s",
  },
  {
    name: "Talia Ryder, Team Lead",
    quote:
      "We've reduced our meeting follow-up time by 80%. InsightBoard keeps everyone accountable and our projects moving forward seamlessly.",
    image: "https://i.ebayimg.com/images/g/uzIAAOSwEtdjY8r3/s-l1200.jpg",
  },
  {
    name: "Ana De Armas, Marketing Director",
    quote:
      "The insights we get from our marketing meetings are invaluable. InsightBoard helps us make data-driven decisions faster than ever before.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzo397CnM76opu_WTQ7WorSNSuY2pphdJsU4I7KKjqvxMcgtTfeJ6W1vrf1KFdoNOU-ao&usqp=CAU",
  },
  {
    name: "Kate Winslet, Engineering Manager",
    quote:
      "Our sprint planning meetings are now 50% shorter and twice as effective. The AI captures every technical detail perfectly.",
    image: "https://m.media-amazon.com/images/M/MV5BYzc5YjEzMjUtNzQzNy00YzA0LWJiOTEtMzI5OWQzZDY2MjFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Jennifer Connelly, Operations Lead",
    quote:
      "InsightBoard has streamlined our entire operations workflow. The real-time collaboration features are absolutely phenomenal.",
    image: "https://i.pinimg.com/236x/5b/e0/72/5be072d5838615feb30ab54a6a81051c.jpg",
  },
]


export const summaries = [
  { 
    title: "Project Alpha Kickoff", 
    date: "July 20, 2024", 
    participants: 8, 
    duration: "1h 30m", 
    priority: "high",
    status: "completed",
    tags: ["project", "kickoff", "planning"]
  },
  { 
    title: "Marketing Strategy Review", 
    date: "July 18, 2024", 
    participants: 6, 
    duration: "45m", 
    priority: "medium",
    status: "completed",
    tags: ["marketing", "strategy", "review"]
  },
  { 
    title: "Product Roadmap", 
    date: "July 15, 2024", 
    participants: 12, 
    duration: "2h", 
    priority: "high",
    status: "completed",
    tags: ["product", "roadmap", "planning"]
  },
  { 
    title: "Sales Team Meeting", 
    date: "July 12, 2024", 
    participants: 10, 
    duration: "1h", 
    priority: "medium",
    status: "completed",
    tags: ["sales", "team", "review"]
  },
  { 
    title: "Design Review Session", 
    date: "July 10, 2024", 
    participants: 5, 
    duration: "1h 15m", 
    priority: "low",
    status: "completed",
    tags: ["design", "review", "feedback"]
  },
];

// Previous Mock data 
// const testimonials = [
//     {
//         name: "Sophia Patel, Project Manager",
//         quote:
//             "InsightBoard has revolutionized our team's workflow. We now spend less time on meeting recaps and more on strategic initiatives.",
//         image:
//             "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJ1ZIoLL5qiDLOGX9zYFeUDS4VExL_Gzt-0b2oJdcGj9vmG_WpnnZCklYyWHlNiyO3BVdrT1ueqF0fGX50nGtrzKaPqmCWTLaUipK4f-yxo-eHGU775_BAoP2HpARaO0RHRW1YyLZrmpG58mfH7n__j_hq1Z9FDbu453Imw8O9ll89YF8_Sqo7xhUN11nbJ3_1Zg-MH_1uavywj_gQX1XlaJkSrGsLsCIeTJZII2cfpEDcjAjJKa0QGCt3v2hUNrWLtasJu1935o",
//     },
//     {
//         name: "Ethan Chen, Team Lead",
//         quote:
//             "The automated summaries are incredibly accurate and save us hours each week. It's a game-changer for our productivity.",
//         image:
//             "https://lh3.googleusercontent.com/aida-public/AB6AXuAOwfay6xyyYVZM1jWMwfcNj7AnkFwwb4FA1tq0Xg9Yi_rMRYHDdgkd96LKeLgkg6ZLpvZe0ISXyWerfKFjcYIVTjPhhCHnIEho06UjftqwvPHbWuaLodVVxDKCrkqf9EwBYUAfHg4vTVoqZOfSR4ZpTJZndDYh9Mv_ScLg6Pig4dAQ-0gzcNWiYN725VsK3U_489EJIFSKj2qVAsN4WHfWAgfUurBiE197spNa7rw4YH38YDxrpA_OfMcuYVCxmC_VZ1j11vRDB0U",
//     },
//     {
//         name: "Olivia Wong, Marketing Director",
//         quote:
//             "Sharing meeting insights has never been easier. InsightBoard keeps everyone on the same page and ensures no detail is missed.",
//         image:
//             "https://lh3.googleusercontent.com/aida-public/AB6AXuBwbDk6XXaGLXh5wAs_IUjZP_n1GHVlq40pn6eI_ErJ8axeglq8dd5Fl_jqyxFraJFys25NVWzxmckIP7uKWNfxmTg0Un8f5K2A6n5GRf05hOfNKLm1MCjAz_aSu3ELOpkjGzuNaA1AXkVIIcsAJAumpv7quYtFeX-ll30xR36hD5Z4H6xwXFIJnwW8qp0bCXNPZLx3VzGKPIbb9S68VFD-N909uMet6HzGClINpCDQmd3wS7tZykd-NLwHLQF1-1qp68IxEwQMcrA",
//     },
// ];