export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export const CORE_VALUES = [
  { name: "INNOVATION", detail: "Embrace new ideas and emerging technologies to build what's next." },
  { name: "RELIABILITY", detail: "Deliver on our promises with consistency and accountability." },
  { name: "TRANSPARENCY", detail: "Lead with honest communication and collaboration." },
  { name: "PERFORMANCE", detail: "Focus on results that create measurable impact for our clients." },
  { name: "PARTNERSHIP", detail: "Grow together with our clients as true partners in success." },
  { name: "SCALABILITY", detail: "Build solutions that grow with your business, today and tomorrow." },
];

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  subtitle: string;
  items: ServiceFeature[];
  processSteps: { title: string; description: string }[];
  idealClientProfile: string[];
  relatedServices: string[];
}

export const SERVICES: ServiceData[] = [
  {
    title: "Branding & Identity",
    slug: "branding-identity",
    subtitle: "We build the visual and strategic foundation of your brand — from positioning to a complete visual identity system that makes you instantly recognizable.",
    items: [
      { title: "Brand Strategy & Positioning", description: "Defining your core message, audience, and market positioning to stand out." },
      { title: "Logo Design", description: "Crafting a unique and memorable logo that represents your brand's essence." },
      { title: "Visual Identity", description: "Developing a cohesive visual system including colors, typography, and imagery." },
      { title: "Rebranding", description: "Revitalizing existing brands to align with new goals and modern aesthetics." }
    ],
    processSteps: [
      { title: "Survey & Discovery", description: "We deep dive into your business, competitors, and goals." },
      { title: "Strategy", description: "We define the positioning and core messaging." },
      { title: "Brand Identity Design", description: "We create the logo and visual language." },
      { title: "Guidelines & Delivery", description: "We deliver a comprehensive brand book for consistent application." }
    ],
    idealClientProfile: [
      "New businesses needing a strong foundation from day one",
      "Existing brands looking to refresh or pivot their market position",
      "Companies expanding into new markets requiring a cohesive identity"
    ],
    relatedServices: ["printing-corporate-collateral", "website-development-ecommerce"]
  },
  {
    title: "Printing & Corporate Collateral",
    slug: "printing-corporate-collateral",
    subtitle: "Tangible brand touchpoints that leave a lasting impression.",
    items: [
      { title: "Business Cards", description: "Professional cards that make a great first impression." },
      { title: "Brochures", description: "Informative and visually appealing marketing materials." },
      { title: "Packaging", description: "Custom packaging design that enhances the unboxing experience." },
      { title: "Signage", description: "Eye-catching signs for physical locations and events." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "Website Development & Ecommerce",
    slug: "website-development-ecommerce",
    subtitle: "High-performance websites designed for conversion and growth.",
    items: [
      { title: "Business Websites", description: "Professional sites that establish credibility." },
      { title: "Ecommerce Stores", description: "Robust online stores optimized for sales." },
      { title: "Landing Pages", description: "High-converting pages for specific marketing campaigns." },
      { title: "Custom Web Apps", description: "Tailored web applications to solve complex business needs." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "SEO, AEO & AI Visibility",
    slug: "seo-aeo-ai-visibility",
    subtitle: "Dominate search engine results and AI recommendations.",
    items: [
      { title: "SEO", description: "Traditional search engine optimization to rank higher on Google." },
      { title: "Answer Engine Optimization", description: "Optimizing content for AI-driven answer engines." },
      { title: "AI Search Visibility", description: "Ensuring your brand appears in ChatGPT, Claude, and other AI tools." },
      { title: "Local SEO", description: "Capturing local search traffic to drive footfall." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "Digital Marketing & Paid Media",
    slug: "digital-marketing-paid-media",
    subtitle: "Data-driven campaigns that maximize your return on ad spend.",
    items: [
      { title: "Social Media Marketing", description: "Engaging your audience on their favorite platforms." },
      { title: "Google Ads", description: "Capturing high-intent search traffic." },
      { title: "Meta Ads", description: "Targeted advertising on Facebook and Instagram." },
      { title: "Performance Marketing", description: "ROI-focused campaigns driven by data." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "Content, Models & Influencers",
    slug: "content-models-influencers",
    subtitle: "Compelling content and authentic voices to tell your story.",
    items: [
      { title: "Photo/Video Shoots", description: "High-quality visual production for your brand." },
      { title: "Reels", description: "Short-form video content optimized for virality." },
      { title: "UGC", description: "Authentic user-generated content to build trust." },
      { title: "Influencer Campaigns", description: "Partnering with relevant voices to amplify your reach." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "CRM & WhatsApp Automation",
    slug: "crm-whatsapp-automation",
    subtitle: "Streamline your sales process and engage customers on their preferred channels.",
    items: [
      { title: "WhatsApp Business API", description: "Scalable messaging solutions for customer engagement." },
      { title: "Chatbots", description: "Automated responses for instant support and lead qualification." },
      { title: "Lead Management", description: "Efficient tracking and nurturing of potential customers." },
      { title: "Campaign Automation", description: "Automated messaging sequences to drive conversions." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "ERP, POS, Portals & Custom Software",
    slug: "erp-pos-portals-custom-software",
    subtitle: "Robust backend systems to manage your entire business operations.",
    items: [
      { title: "ERP", description: "Enterprise resource planning for integrated business management." },
      { title: "POS Systems", description: "Modern point-of-sale solutions for seamless transactions." },
      { title: "Customer/Vendor Portals", description: "Dedicated portals for better stakeholder communication." },
      { title: "Custom Software", description: "Bespoke software built exactly to your specifications." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  },
  {
    title: "AI Automations, Dashboards & Integrations",
    slug: "ai-automations-dashboards-integrations",
    subtitle: "Intelligent systems that save time and provide actionable insights.",
    items: [
      { title: "AI-Powered Automations", description: "Leveraging AI to automate repetitive tasks." },
      { title: "BI Dashboards", description: "Interactive visualizations of your key business metrics." },
      { title: "API Integrations", description: "Connecting your disparate tools into a unified system." },
      { title: "Workflow Automation", description: "Streamlining complex multi-step processes." }
    ],
    processSteps: [],
    idealClientProfile: [],
    relatedServices: []
  }
];

export const JOURNEY = [
  "Survey & Discovery",
  "Strategy",
  "Brand Identity",
  "Printing & Collateral",
  "Website / Ecommerce",
  "SEO & AI Visibility",
  "Content & Social Media",
  "Paid Campaigns / Influencers",
  "CRM & WhatsApp Integration",
  "ERP / Internal Automation",
  "Dashboards & BI",
  "Continuous Growth & Support",
];

export interface PackageFeature {
  title: string;
  description: string;
}



export interface PackageData {
  name: string;
  price: string;
  cadence: string;
  subtitle: string;
  description: string;
  features: PackageFeature[];
  idealClientProfile: string[];
  outcomes: string[];
}

export const PACKAGES: PackageData[] = [
  {
    name: "Spark",
    price: "PKR 50,000",
    cadence: "/mo",
    subtitle: "Starter Presence Package",
    description: "Perfect for small businesses and startups establishing their first real digital presence — consistent content, two core platforms, and the reporting to know it's working.",
    features: [
      { title: "2 Platforms", description: "We manage and post consistently across two social channels of your choice (e.g., Instagram + Facebook)." },
      { title: "8–10 Content Pieces / Month", description: "A steady cadence of high-quality graphics and captions to keep your audience engaged." },
      { title: "Basic Performance Reporting", description: "Monthly insights into follower growth, reach, and engagement so you can track progress." }
    ],
    idealClientProfile: [
      "Small businesses just starting out",
      "Local shops needing consistent visibility",
      "Founders wanting to outsource basic social media tasks"
    ],
    outcomes: [
      "Consistent, professional presence across your core platforms.",
      "Clear monthly visibility into what's working.",
      "A foundation you can scale up from as you grow."
    ],
    faqs: [
      { question: "Can I upgrade later?", answer: "Yes, you can upgrade to a higher tier at any time as your business grows and needs more support." },
      { question: "What platforms are included?", answer: "You can choose any two standard platforms like Facebook, Instagram, LinkedIn, or Twitter." },
      { question: "Is there a setup fee?", answer: "No, there are no hidden setup fees for our standard packages. // TODO: confirm with client" },
      { question: "How is content approved?", answer: "We provide a content calendar in advance for your review and approval before anything goes live." }
    ]
  },
  {
    name: "Starter",
    price: "PKR 85,000",
    cadence: "/mo",
    subtitle: "Active Local Business Package",
    description: "Ideal for active local businesses looking to boost engagement.",
    features: [
      { title: "3 Platforms", description: "Expanded reach across three platforms." },
      { title: "12–15 Content Pieces / Month", description: "Increased posting frequency." },
      { title: "1 Ad Campaign", description: "Basic paid media to boost reach." }
    ],
    idealClientProfile: ["Active local businesses", "Growing brands"],
    outcomes: ["Increased engagement", "Broader audience reach"],
    faqs: [{ question: "Included platforms?", answer: "Any three standard platforms." }]
  },
  {
    name: "Growth",
    price: "PKR 125,000",
    cadence: "/mo",
    subtitle: "Consistent Growth Package",
    description: "For businesses ready to invest in consistent growth.",
    features: [
      { title: "4 Platforms", description: "Comprehensive social presence." },
      { title: "15–20 Content Pieces / Month", description: "High volume content." },
      { title: "2 Ad Campaigns", description: "Targeted paid campaigns." }
    ],
    idealClientProfile: ["Growing businesses", "E-commerce stores"],
    outcomes: ["Consistent lead generation", "Strong brand presence"],
    faqs: [{ question: "Included platforms?", answer: "Any four standard platforms." }]
  },
  {
    name: "Momentum",
    price: "PKR 175,000",
    cadence: "/mo",
    subtitle: "Stronger Engagement Package",
    description: "Build momentum with SEO and a solid web foundation.",
    features: [
      { title: "4–5 Platforms", description: "Maximized social reach." },
      { title: "20–25 Content Pieces / Month", description: "Aggressive content strategy." },
      { title: "Website + Basic SEO Setup", description: "Foundational digital presence." }
    ],
    idealClientProfile: ["Established brands", "Service businesses"],
    outcomes: ["Improved search visibility", "Higher conversion rates"],
    faqs: [{ question: "What does SEO setup include?", answer: "Basic on-page optimization and technical setup." }]
  },
  {
    name: "Performance",
    price: "PKR 250,000",
    cadence: "/mo",
    subtitle: "Scaling Generation Package",
    description: "Focus on performance and tracking conversions.",
    features: [
      { title: "5 Platforms", description: "Omnichannel approach." },
      { title: "25–30 Content Pieces / Month", description: "Daily engagement." },
      { title: "3 Ad Campaigns + Conversion Tracking", description: "Data-driven paid media." }
    ],
    idealClientProfile: ["Scaling businesses", "High-growth startups"],
    outcomes: ["Measurable ROI", "Scalable lead generation"],
    faqs: [{ question: "Is ad spend included?", answer: "No, ad spend is billed separately." }]
  },
  {
    name: "Scale",
    price: "PKR 350,000",
    cadence: "/mo",
    subtitle: "Scaling Brands Package",
    description: "Advanced automation and CRM integration.",
    features: [
      { title: "6 Platforms", description: "Total market coverage." },
      { title: "30–40 Content Pieces / Month", description: "High-frequency posting." },
      { title: "CRM Setup + Automation Flows", description: "Streamlined lead management." }
    ],
    idealClientProfile: ["Large enterprises", "National brands"],
    outcomes: ["Automated sales processes", "Maximized customer lifetime value"],
    faqs: [{ question: "Which CRM do you use?", answer: "We support major CRMs like HubSpot and Salesforce." }]
  },
  {
    name: "Platinum",
    price: "PKR 500,000",
    cadence: "/mo",
    subtitle: "Full Digital Growth System",
    description: "A complete end-to-end digital growth ecosystem.",
    features: [
      { title: "7 Platforms", description: "Every major channel covered." },
      { title: "40–50 Content Pieces / Month", description: "Dominant content presence." },
      { title: "Advanced Ads + CRM & Automation", description: "Enterprise-grade campaigns." }
    ],
    idealClientProfile: ["Industry leaders", "Market dominators"],
    outcomes: ["Market leadership", "Fully integrated systems"],
    faqs: [{ question: "Is this a custom solution?", answer: "Yes, tailored to your specific enterprise needs." }]
  },
  {
    name: "Enterprise",
    price: "PKR 750,000+",
    cadence: "/mo",
    subtitle: "Dedicated Growth Department",
    description: "An outsourced growth department working exclusively for you.",
    features: [
      { title: "Custom Strategy & Multi-Channel Management", description: "Bespoke strategic planning." },
      { title: "50+ Content Pieces / Month", description: "Unmatched content volume." },
      { title: "Dedicated Account Manager & Support", description: "White-glove service." }
    ],
    idealClientProfile: ["Multinational corporations", "Complex organizations"],
    outcomes: ["Unparalleled growth", "Strategic partnership"],
    faqs: [{ question: "How does the dedicated team work?", answer: "They operate as an extension of your internal team." }]
  }
];

export const TECH_SOLUTIONS = [
  { name: "CRM Solutions", price: "from PKR 150,000/mo" },
  { name: "WhatsApp API Automation", price: "from PKR 40,000/mo" },
  { name: "Website Development", price: "from PKR 75,000" },
  { name: "SEO & AI Visibility", price: "from PKR 60,000/mo" },
  { name: "Customer Portal", price: "project-based" },
  { name: "Executive Portal", price: "project-based" },
  { name: "App Development", price: "from PKR 120,000" },
  { name: "Real Estate ERP", price: "from PKR 650,000" },
  { name: "ERP Solutions", price: "from PKR 1,000,000" },
  { name: "POS System", price: "from PKR 250,000" },
  { name: "Dealer App", price: "project-based" },
  { name: "Custom Software", price: "project-based" },
];

export const METHOD_STEPS = [
  "Discovery",
  "Scope Mapping",
  "Solution Design",
  "Development",
  "Integration",
  "Testing",
  "Go-Live",
  "Optimization & Support",
];

export const TECH_STACK = [
  { group: "Frontend & Web", items: ["React", "Next.js", "HTML / CSS"] },
  { group: "Backend & APIs", items: ["Node.js", "Python", "REST APIs"] },
  { group: "Mobile", items: ["Flutter", "React Native"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Automation", items: ["n8n", "Make", "Zapier", "WhatsApp API", "Email Automation"] },
  { group: "Analytics & BI", items: ["Google Analytics 4", "Looker Studio", "Dashboards"] },
  { group: "Cloud & Deployment", items: ["Vercel", "AWS", "DigitalOcean"] },
];

export const STATS = [
  { value: 11, suffix: "+", label: "Active Brands" },
  { value: 150, suffix: "+", label: "Campaigns Delivered" },
  { value: 25, suffix: "+", label: "Live Websites" },
  { value: 20, suffix: "+", label: "Deployed Systems" },
  { value: 5, suffix: "M+", label: "Monthly Reach" },
  { value: 1, suffix: "M+", label: "Engagements / Month" },
  { value: 200, suffix: "K+", label: "Leads Generated" },
  { value: 100, suffix: "+", label: "Automation Flows" },
];

export const INDUSTRIES = [
  "Real Estate",
  "Retail",
  "Hospitality",
  "Corporate",
  "Lifestyle",
  "Services",
  "Technology",
];

export const SOLUTIONS_DELIVERED = [
  "Real Estate ERP",
  "CRM Deployments",
  "POS Solutions",
  "Executive Dashboards",
  "Customer Portals",
  "Dealer Apps",
  "WhatsApp Automation",
  "QR Code Scanning",
  "AI-Enabled Reporting",
  "Mohandis AI",
  "My Truck (Logistics Platform)",
];

export const SUPPORT_PLANS = [
  {
    name: "Essential Care",
    price: "PKR 35,000/mo",
    features: ["Uptime monitoring", "Helpdesk support", "8hr response"],
  },
  {
    name: "Business Care",
    price: "PKR 85,000/mo",
    features: ["Priority support — 4hr", "Proactive monitoring", "Quarterly review"],
    featured: true,
  },
  {
    name: "Enterprise Managed Service",
    price: "from PKR 225,000/mo",
    features: ["Dedicated account manager", "24/7 priority", "Strategic roadmap & AI enablement"],
  },
];

export const LEADERSHIP = [
  {
    name: "Saif Ur Rehman",
    role: "CEO, Crescent Nova International",
    quote:
      "We built this division because ambitious businesses deserve a growth engine — structure, systems and intelligence working together, not a scattered list of services.",
  },
  {
    name: "Ammar Afzal",
    role: "Head of AI & Digital Division",
    quote:
      "Integrated transformation means brand, marketing, CRM, ERP and AI speaking the same language. That is when growth becomes measurable and repeatable.",
  },
];

export const BUDGET_OPTIONS = [
  "Spark — PKR 50,000/mo",
  "Starter — PKR 85,000/mo",
  "Growth — PKR 125,000/mo",
  "Momentum — PKR 175,000/mo",
  "Performance — PKR 250,000/mo",
  "Scale — PKR 350,000/mo",
  "Platinum — PKR 500,000/mo",
  "Enterprise — PKR 750,000+/mo",
];

export const VISION_MISSION = {
  vision: "To be the most trusted and innovative business growth and digital transformation partner across Pakistan and Saudi Arabia — empowering organizations to grow smarter and lead the future.",
  mission: "To deliver innovative branding, digital growth, automation, software and AI solutions that drive efficiency, enhance customer experience and create measurable, sustainable business value."
};

export const GLOBAL_PRESENCE_DATA = [
  {
    country: "PAKISTAN",
    subtext: "Serving businesses across Pakistan with local insight and dedicated support",
    cities: ["Islamabad", "Lahore", "Karachi"],
    offices: [
      "Head Office — Wah Cantt, Pakistan",
      "Islamabad Office — Blue Area",
      "Chitral Office — Pakistan"
    ]
  },
  {
    country: "SAUDI ARABIA",
    subtext: "Empowering businesses across Saudi Arabia with proximity, presence and performance",
    cities: ["Riyadh", "Jeddah", "Dammam"],
    offices: [
      "Riyadh — Regional Presence"
    ]
  }
];

export const INDUSTRY_TAGS = [
  "Real Estate", "Hospitality", "Retail & E-commerce", "Construction", 
  "Education", "Healthcare", "Logistics", "Technology", 
  "Corporate Services", "Lifestyle", "Finance", "Media & Entertainment"
];
