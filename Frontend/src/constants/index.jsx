import {
  ArrowDownTrayIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  ClockIcon,
} from "@heroicons/react/24/outline"


export const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
];

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
    tags: ["project", "kickoff", "planning"],
    summaryContent: "The Project Alpha kickoff meeting was held to align the team on the project goals, timelines, and responsibilities. Key discussions included the project scope, deliverables, and milestones.",
    decisions: [
      "Weekly meetings will be held on Mondays at 10 AM.",
      "Project plan and timelines were approved."
    ],
    actionItems: [
      "Sarah will finalize the project plan document.",
      "David will set up the project tracking tool."
    ],
    keyPoints: [
      "Project Alpha aims to increase user engagement by 20%.",
      "The team will use Agile methodology for project management."
    ]
  },
  { 
    title: "Marketing Strategy Review", 
    date: "July 18, 2024", 
    participants: 6, 
    duration: "45m", 
    priority: "medium",
    status: "completed",
    tags: ["marketing", "strategy", "review"],
    summaryContent: "Reviewed the Q3 marketing strategy with focus on digital channels. Discussed budget allocation and performance metrics.",
    decisions: [
      "Approved the increased budget for social media ads.",
      "Agreed to focus on influencer marketing for the new product launch."
    ],
    actionItems: [
      "Marketing team to create detailed campaign plans by Friday.",
      "Alex to contact potential influencers for partnerships."
    ],
    keyPoints: [
      "Social media engagement has increased by 15% since last quarter.",
      "Email marketing will be optimized for mobile users."
    ]
  },
  { 
    title: "Product Roadmap", 
    date: "July 15, 2024", 
    participants: 12, 
    duration: "2h", 
    priority: "high",
    status: "completed",
    tags: ["product", "roadmap", "planning"],
    summaryContent: "Presented and discussed the 12-month product roadmap with all stakeholders. Prioritized features based on customer feedback.",
    decisions: [
      "Postponed the dark mode feature to Q2 next year.",
      "Approved the development of the new analytics dashboard."
    ],
    actionItems: [
      "Engineering team to provide timeline estimates for Q1 features.",
      "Product team to gather more customer feedback on proposed features."
    ],
    keyPoints: [
      "Customer retention is the primary focus for next quarter.",
      "New onboarding flow will be prioritized in Q4."
    ]
  },
  { 
    title: "Sales Team Meeting", 
    date: "July 12, 2024", 
    participants: 10, 
    duration: "1h", 
    priority: "medium",
    status: "completed",
    tags: ["sales", "team", "review"],
    summaryContent: "Weekly sales team meeting to review targets and discuss challenges. Focused on improving conversion rates.",
    decisions: [
      "Implemented new follow-up procedure for warm leads.",
      "Approved the new commission structure for Q3."
    ],
    actionItems: [
      "All sales reps to complete new CRM training by end of week.",
      "Team leads to identify top 3 conversion blockers."
    ],
    keyPoints: [
      "Enterprise sales are up 22% this quarter.",
      "New pricing packages are resonating well with SMB clients."
    ]
  },
  { 
    title: "Design Review Session", 
    date: "July 10, 2024", 
    participants: 5, 
    duration: "1h 15m", 
    priority: "low",
    status: "completed",
    tags: ["design", "review", "feedback"],
    summaryContent: "Reviewed the new dashboard designs and collected feedback from the engineering team for feasibility assessment.",
    decisions: [
      "Approved the new navigation structure.",
      "Agreed to simplify the data visualization components."
    ],
    actionItems: [
      "Design team to incorporate feedback and deliver final mockups.",
      "UI team to create component library for the new design system."
    ],
    keyPoints: [
      "New design system will improve development speed by 30%.",
      "Accessibility improvements are now part of all design requirements."
    ]
  }
];
export const faqs = [
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade at any time."
            },
            {
              question: "Is there a free trial?",
              answer: "All paid plans come with a 14-day free trial."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards and PayPal."
            }
]
