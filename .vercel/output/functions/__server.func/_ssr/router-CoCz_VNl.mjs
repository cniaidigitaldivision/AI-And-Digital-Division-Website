import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as HeadContent, c as Outlet, d as createRootRouteWithContext, f as Link, i as Scripts, l as lazyRouteComponent, m as notFound, p as useRouter, s as createRouter, u as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as __exportAll } from "./server-D-OpLT9J.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cni-data-CDBQlKtJ.js
var logo_default = "/assets/logo-CpG6QZkp.png";
var NAV_LINKS = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Services",
		href: "/services"
	},
	{
		label: "Packages",
		href: "/#packages"
	},
	{
		label: "Portfolio",
		href: "/portfolio"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Gallery",
		href: "/Gallery"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
var SERVICES = [
	{
		title: "Branding & Identity",
		slug: "branding-identity",
		subtitle: "We build the visual and strategic foundation of your brand — from positioning to a complete visual identity system that makes you instantly recognizable.",
		simpleExplainer: "We create the face of your business — logo, colors, fonts, and complete visual style.",
		miniProcess: [
			"Discover",
			"Design",
			"Deliver"
		],
		imageName: "branding-identity.jpg",
		items: [
			{
				title: "Brand Strategy & Positioning",
				description: "We dive deep into your market to define a compelling core message, pinpoint your target audience, and establish a unique market positioning that strategically sets you apart from competitors."
			},
			{
				title: "Logo Design",
				description: "More than just a graphic, we craft a unique, versatile, and memorable logo that encapsulates your brand's core essence, ensuring it works seamlessly across all digital and physical mediums."
			},
			{
				title: "Visual Identity",
				description: "We develop a comprehensive and cohesive visual system. This includes a meticulously curated color palette, typography guidelines, and imagery styles that guarantee consistent brand expression everywhere."
			},
			{
				title: "Rebranding",
				description: "Breathe new life into your existing business. We thoughtfully revitalize and modernize your brand identity to align with evolving company goals and contemporary aesthetics, while preserving your core legacy."
			}
		],
		processSteps: [
			{
				title: "Survey & Discovery",
				description: "We deep dive into your business, competitors, and goals."
			},
			{
				title: "Strategy",
				description: "We define the positioning and core messaging."
			},
			{
				title: "Brand Identity Design",
				description: "We create the logo and visual language."
			},
			{
				title: "Guidelines & Delivery",
				description: "We deliver a comprehensive brand book for consistent application."
			}
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
		simpleExplainer: "We give your business cards, brochures, and packaging a premium, professional look.",
		miniProcess: [
			"Design",
			"Review",
			"Print"
		],
		imageName: "printing-corporate-collateral.jpg",
		items: [
			{
				title: "Business Cards",
				description: "Elevate your professional networking with premium, custom-designed business cards. We focus on elegant typography, optimal layouts, and recommendations for tactile finishes that ensure your very first impression is unforgettable."
			},
			{
				title: "Brochures",
				description: "Craft compelling brand narratives with beautifully designed multi-page brochures and flyers. Perfect for sales meetings or trade shows, seamlessly combining persuasive information formatting with striking, high-resolution visuals."
			},
			{
				title: "Packaging",
				description: "Transform your product delivery into a premium brand experience. We design bespoke, structurally thoughtful packaging that delights customers, protects the product, and reinforces your brand identity the moment they unbox it."
			},
			{
				title: "Signage",
				description: "Command attention in the physical world with impactful signage and exhibition graphics. From permanent storefront displays to portable event roll-up banners, we ensure high visibility and strict brand consistency at any scale."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "Website Development & Ecommerce",
		slug: "website-development-ecommerce",
		subtitle: "High-performance websites designed for conversion and growth.",
		simpleExplainer: "We build fast, beautiful, and high-converting websites and online stores for you.",
		miniProcess: [
			"Wireframe",
			"Develop",
			"Launch"
		],
		imageName: "website-development-ecommerce.jpg",
		items: [
			{
				title: "Business Websites",
				description: "Professional, responsive websites built with modern frameworks to establish strong brand credibility, showcase your company's portfolio, and serve as a 24/7 digital storefront that engages visitors."
			},
			{
				title: "Ecommerce Stores",
				description: "Robust, scalable online stores optimized for maximum sales conversions. Includes seamless checkout flows, secure payment gateway integrations, and intuitive inventory management systems."
			},
			{
				title: "Landing Pages",
				description: "High-converting, laser-focused pages designed for specific marketing campaigns. Engineered for fast load times and optimized with clear call-to-actions (CTAs) to maximize lead generation."
			},
			{
				title: "Custom Web Apps",
				description: "Tailored, full-stack web applications designed to solve complex business needs. Features custom client portals, booking systems, and dynamic dashboards tailored to your specific operational workflows."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "SEO, AEO & AI Visibility",
		slug: "seo-aeo-ai-visibility",
		subtitle: "Dominate search engine results and AI recommendations.",
		simpleExplainer: "We ensure that when someone searches for your product, Google and AI rank you at the top.",
		miniProcess: [
			"Audit",
			"Optimize",
			"Rank"
		],
		imageName: "seo-aeo-ai-visibility.jpg",
		items: [
			{
				title: "SEO (Search Engine Optimization)",
				description: "Comprehensive technical, on-page, and off-page optimization strategies. We conduct deep keyword research and site audits to secure top rankings on traditional search engines like Google, driving sustainable, high-intent organic traffic."
			},
			{
				title: "Answer Engine Optimization (AEO)",
				description: "Future-proof your content for voice search and AI overviews. We structure your data and utilize advanced schema markup so that AI-driven answer engines directly extract and cite your brand as the definitive, trusted source."
			},
			{
				title: "AI Search Visibility",
				description: "Position your brand in the new era of conversational search. We implement strategic content frameworks designed to ensure your business is frequently mentioned and recommended by Large Language Models (LLMs) like ChatGPT, Claude, and Perplexity."
			},
			{
				title: "Local SEO",
				description: "Dominate your local market and capture nearby customers. We aggressively optimize your Google Business Profile, manage local directory citations, and create geo-targeted content to drive highly qualified leads and physical foot traffic to your business."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "Digital Marketing & Paid Media",
		slug: "digital-marketing-paid-media",
		subtitle: "Data-driven campaigns that maximize your return on ad spend.",
		simpleExplainer: "We find your target audience and show them your ads to drive more sales.",
		miniProcess: [
			"Targeting",
			"Campaign",
			"Optimize"
		],
		imageName: "digital-marketing-paid-media.jpg",
		items: [
			{
				title: "Social Media Marketing",
				description: "Build strong brand awareness and foster active community engagement through data-backed content strategies. We create resonant messaging across key social platforms that turns casual followers into loyal brand advocates."
			},
			{
				title: "Google Ads",
				description: "Drive immediate, high-intent traffic directly to your website. We engineer meticulously structured Search, Display, and Performance Max campaigns, continuously optimizing bid strategies to minimize your cost-per-acquisition."
			},
			{
				title: "Meta Ads",
				description: "Leverage hyper-precise audience targeting on Facebook and Instagram. We develop scroll-stopping ad creatives and deploy advanced retargeting funnels to capture attention and convert passive users into paying customers."
			},
			{
				title: "Performance Marketing",
				description: "A holistic, strictly ROI-driven approach. We rigorously analyze cross-channel campaign data, run continuous A/B tests on creatives, and scale winning strategies to maximize the return on every single advertising dollar spent."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "Content, Models & Influencers",
		slug: "content-models-influencers",
		subtitle: "Compelling content and authentic voices to tell your story.",
		simpleExplainer: "We create engaging videos and tell your story to the world through the right influencers.",
		miniProcess: [
			"Shoot",
			"Edit",
			"Publish"
		],
		imageName: "content-models-influencers.jpg",
		items: [
			{
				title: "Photo/Video Shoots",
				description: "Professional, high-resolution photography and cinematic video production. We handle everything from creative art direction and model casting to post-production editing, ensuring your brand's visual storytelling is absolutely top-tier."
			},
			{
				title: "Reels",
				description: "Dynamic, trend-driven short-form video content specifically crafted for Instagram and TikTok. Engineered to maximize engagement, capture fleeting attention spans, and significantly boost organic reach through platform-specific algorithms."
			},
			{
				title: "UGC (User-Generated Content)",
				description: "Relatable and authentic content created by real people. We source and direct everyday creators to produce genuine product reviews, unboxings, and lifestyle integrations that build massive social proof and consumer trust."
			},
			{
				title: "Influencer Campaigns",
				description: "Strategic partnerships with carefully vetted creators, micro-influencers, and models. We manage the entire process—from talent sourcing and negotiation to campaign execution—to seamlessly amplify your message to highly targeted audiences."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "CRM & WhatsApp Automation",
		slug: "crm-whatsapp-automation",
		subtitle: "Streamline your sales process and engage customers on their preferred channels.",
		simpleExplainer: "We automate your customer messages so your sales and replies become lightning fast.",
		miniProcess: [
			"Setup",
			"Automate",
			"Scale"
		],
		imageName: "crm-whatsapp-automation.jpg",
		items: [
			{
				title: "WhatsApp Business API",
				description: "Seamlessly connect with customers on their preferred platform. We integrate robust API solutions for scalable messaging, automated transactional alerts, and seamless CRM syncing to centralize all your customer communications."
			},
			{
				title: "Chatbots",
				description: "Deploy intelligent, RAG-powered chatbots that go beyond basic FAQs. Our custom bots provide instant, context-aware customer support, automatically qualify incoming leads 24/7, and smoothly hand off complex queries to human agents."
			},
			{
				title: "Lead Management",
				description: "Eliminate manual data entry and track every prospect efficiently. We engineer complex n8n workflows and business automation systems that automatically capture, score, and nurture leads through your entire sales pipeline."
			},
			{
				title: "Campaign Automation",
				description: "Drive consistent conversions on autopilot. We design and implement targeted messaging sequences, automated appointment reminders, and personalized broadcast campaigns tailored to specific customer behaviors and lifecycle stages."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "ERP, POS, Portals & Custom Software",
		slug: "erp-pos-portals-custom-software",
		subtitle: "Robust backend systems to manage your entire business operations.",
		simpleExplainer: "We build custom software and portals to seamlessly manage your entire business operations.",
		miniProcess: [
			"Analyze",
			"Develop",
			"Deploy"
		],
		imageName: "erp-pos-portals-custom-software.jpg",
		items: [
			{
				title: "ERP (Enterprise Resource Planning)",
				description: "Unify your business operations into a single, highly secure source of truth. We build robust, scalable ERP systems that seamlessly integrate inventory, finance, HR, and supply chain logistics to eliminate frustrating data silos."
			},
			{
				title: "POS Systems",
				description: "Modern, lightning-fast Point of Sale solutions designed for high-volume retail and hospitality. Enjoy real-time inventory syncing, secure multi-channel payment processing, and comprehensive sales analytics across all your physical locations."
			},
			{
				title: "Customer/Vendor Portals",
				description: "Empower your stakeholders with secure, dedicated self-service environments. We design custom interactive dashboards and robust data tables—utilizing scalable frameworks or rapid-deployment tools like PowerApps—to streamline external communication and reporting."
			},
			{
				title: "Custom Software",
				description: "Bespoke applications engineered from the ground up to solve your unique business challenges. Whether it involves complex backend logic using Python and Node.js or a dynamic React frontend, we deliver custom, full-stack software tailored perfectly to your exact specifications."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	},
	{
		title: "AI Automations, Dashboards & Integrations",
		slug: "ai-automations-dashboards-integrations",
		subtitle: "Intelligent systems that save time and provide actionable insights.",
		simpleExplainer: "We use AI to automate your daily tasks and visualize your data on powerful dashboards.",
		miniProcess: [
			"Integrate",
			"Automate",
			"Insights"
		],
		imageName: "ai-automations-dashboards-integrations.jpg",
		items: [
			{
				title: "AI-Powered Automations",
				description: "Deploy intelligent systems that leverage machine learning and custom AI models. We build smart, RAG-powered workflows that can classify complex data, summarize documents, and make autonomous routing decisions to drastically reduce manual overhead."
			},
			{
				title: "BI Dashboards",
				description: "Transform raw data into actionable, real-time insights. We design interactive Business Intelligence dashboards that aggregate key metrics from all your business platforms into a single, beautifully visualized interface for confident decision-making."
			},
			{
				title: "API Integrations",
				description: "Eliminate frustrating data silos by seamlessly connecting your disparate software tools. We engineer robust, custom API integrations that reliably synchronize data across your CRM, financial systems, and marketing platforms to create a unified tech stack."
			},
			{
				title: "Workflow Automation",
				description: "Streamline complex, multi-step operational processes. Utilizing advanced platforms like n8n alongside custom Python scripts, we architect sophisticated backend workflows that handle everything from automated lead routing to complex report generation, running 24/7."
			}
		],
		processSteps: [],
		idealClientProfile: [],
		relatedServices: []
	}
];
var PACKAGES = [
	{
		name: "Spark",
		price: "PKR 50,000",
		cadence: "/mo",
		subtitle: "Starter Presence Package",
		description: "Perfect for small businesses and startups establishing their first real digital presence — consistent content, two core platforms, and the reporting to know it's working.",
		intro: [
			"Every business has to start somewhere, and Spark is designed to be that starting point. It gives your brand a consistent, professional face on social media without the overhead of managing it yourself. You focus on running your business — we handle making sure your audience sees you showing up regularly, with content worth stopping for.",
			"At PKR 50,000/month, Spark is one of the most affordable ways to hand off your social media completely and start building an audience that actually knows who you are. We cover two platforms of your choice, produce 8 to 10 pieces of content every month, and deliver a clear performance report so you always know what's working.",
			"Think of Spark as planting the seed. It establishes the digital foundation you'll need before running ads, launching campaigns, or expanding your reach. Businesses that start here typically grow into our Starter or Growth tiers within 3–6 months as they see results compound."
		],
		features: [
			{
				title: "2 Social Platforms",
				description: "We manage and post consistently across two social channels of your choice — Instagram, Facebook, LinkedIn, TikTok, or Twitter/X."
			},
			{
				title: "8–10 Content Pieces / Month",
				description: "A steady cadence of high-quality graphics and captions, reviewed and approved by you before publishing, to keep your audience engaged."
			},
			{
				title: "Content Calendar",
				description: "A planned monthly calendar shared with you in advance so you always know what's going out and when."
			},
			{
				title: "Basic Performance Reporting",
				description: "Monthly report covering follower growth, reach, impressions, and engagement rate so you can track progress clearly."
			},
			{
				title: "Caption & Hashtag Strategy",
				description: "Every post is accompanied by a platform-optimised caption and targeted hashtag set to maximise organic discovery."
			},
			{
				title: "Dedicated Account Handling",
				description: "A single point of contact manages your account, understands your brand voice, and applies it consistently."
			}
		],
		idealClientProfile: [
			"New businesses establishing their first digital presence",
			"Local shops and service providers wanting consistent visibility without hiring in-house",
			"Founders who want to delegate social media and focus on operations",
			"Brands testing digital marketing before committing to a larger budget"
		],
		outcomes: [
			"A consistent, professional presence across your two core social platforms.",
			"Steady growth in followers and engagement over time.",
			"Clear monthly visibility into what content is resonating.",
			"A strong digital foundation ready to scale with paid campaigns when you're ready."
		],
		howItWorks: [
			{
				title: "Onboarding & Brand Briefing",
				body: "We start with a structured discovery session to understand your brand, tone of voice, target audience, and content preferences. You share any existing assets — logo, photos, brand colours — and we take it from there."
			},
			{
				title: "Monthly Content Planning",
				body: "Each month we build a content calendar and share it with you for review. You approve (or request tweaks) before anything goes live. No surprises."
			},
			{
				title: "Content Production & Publishing",
				body: "Our designers produce all graphics, write all captions, and publish on schedule across your two platforms. You stay in the loop without being in the workflow."
			},
			{
				title: "Monthly Reporting",
				body: "At month-end we send a clear performance summary: reach, engagement, follower change, and our recommendation for the next month."
			}
		],
		faqs: [
			{
				question: "Can I upgrade later?",
				answer: "Yes, you can upgrade to a higher tier at any time. We'll transition your account seamlessly."
			},
			{
				question: "Which platforms can I choose?",
				answer: "Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. Choose any two."
			},
			{
				question: "Is ad spend included?",
				answer: "No — Spark covers organic content management only. Paid media is available from our Starter tier upwards."
			},
			{
				question: "How is content approved?",
				answer: "We share a content calendar each month for your review. Nothing goes live without your sign-off."
			}
		]
	},
	{
		name: "Starter",
		price: "PKR 85,000",
		cadence: "/mo",
		subtitle: "Active Local Business Package",
		description: "Ideal for active local businesses that are ready to reach more people — more platforms, higher posting frequency, and your first taste of paid media to accelerate reach.",
		intro: [
			"The Starter package is built for businesses that already have some presence and want to push harder. You're past the 'getting started' phase — now you need more volume, more reach, and a smarter approach to growing an engaged audience. Starter gives you exactly that.",
			"With three platforms managed, 12 to 15 content pieces per month, and one active ad campaign running alongside your organic content, Starter creates a noticeable step up from purely organic growth. The ad campaign is targeted to your ideal audience and designed to drive meaningful reach, page likes, or direct enquiries — depending on your goal.",
			"Most businesses on the Starter plan see a clear improvement in audience growth and inbound enquiries within the first 60–90 days. It's the right level for local businesses that want to be taken seriously online without breaking the bank."
		],
		features: [
			{
				title: "3 Social Platforms",
				description: "Management and consistent posting across three platforms of your choice, with platform-appropriate formatting for each."
			},
			{
				title: "12–15 Content Pieces / Month",
				description: "Increased posting frequency means more touchpoints with your audience and better algorithm performance on each platform."
			},
			{
				title: "1 Paid Ad Campaign",
				description: "One targeted campaign per month — Meta Ads (Facebook/Instagram) or Google — to amplify your reach beyond your organic following."
			},
			{
				title: "Content Calendar & Approval Workflow",
				description: "Monthly planning with a structured approval process so your content always reflects your brand accurately."
			},
			{
				title: "Caption Copywriting & Hashtag Strategy",
				description: "Platform-native captions and a targeted hashtag strategy tailored to your audience and location."
			},
			{
				title: "Monthly Performance Report",
				description: "Detailed report covering organic and paid performance: reach, engagement, ad spend efficiency, and growth trends."
			}
		],
		idealClientProfile: [
			"Active local businesses ready to grow their audience beyond walk-ins and word-of-mouth",
			"Restaurants, salons, clinics, and retail stores wanting more consistent local visibility",
			"Service businesses that have tried social media on their own and want a professional to take over",
			"Brands moving from Spark who are ready to add their first paid campaign"
		],
		outcomes: [
			"Stronger audience growth across three platforms.",
			"First consistent exposure to paid media and what it can achieve.",
			"Higher inbound enquiries driven by targeted ad reach.",
			"Clearer understanding of which platforms and content types perform best for your brand."
		],
		howItWorks: [
			{
				title: "Platform & Audience Audit",
				body: "We review your existing accounts, audience demographics, and competitor presence to set the right baseline strategy for your brand."
			},
			{
				title: "Content & Campaign Planning",
				body: "Each month we plan both organic content and the ad campaign strategy — audience targeting, creative direction, and campaign objective — and share for your approval."
			},
			{
				title: "Production, Publishing & Campaign Launch",
				body: "Content is produced, scheduled, and published. The ad campaign is set live, monitored daily, and optimised throughout the month."
			},
			{
				title: "Reporting & Next-Month Strategy",
				body: "End-of-month report covers organic and paid results with strategic recommendations for the following month."
			}
		]
	},
	{
		name: "Growth",
		price: "PKR 125,000",
		cadence: "/mo",
		subtitle: "Consistent Growth Package",
		description: "For businesses serious about growth — four platforms, high-volume content, and two simultaneous ad campaigns driving leads and brand awareness every single month.",
		intro: [
			"Growth is where things start to get serious. At this tier you're running a proper multi-platform digital marketing operation: four channels, 15 to 20 content pieces a month, and two concurrent ad campaigns working in tandem — one building awareness, one converting leads. It's a complete content and paid media engine.",
			"This package is designed for businesses that have validated their product or service and are now ready to pour consistent fuel on the fire. E-commerce brands, growing service businesses, and expanding local chains find this level gives them the reach and conversion activity needed to see month-on-month revenue growth attributable to digital.",
			"At PKR 125,000/month, Growth represents some of the best value in our line-up: the combination of high content volume and dual ad campaigns means your brand is visible, active, and converting simultaneously — without the cost of an in-house team."
		],
		features: [
			{
				title: "4 Social Platforms",
				description: "Comprehensive social presence across four platforms, each with content adapted to its native format and audience behaviour."
			},
			{
				title: "15–20 Content Pieces / Month",
				description: "High posting volume ensures your brand is consistently top-of-mind across every channel, feeding the algorithm and keeping your audience engaged."
			},
			{
				title: "2 Active Ad Campaigns",
				description: "Two concurrent paid campaigns — typically one awareness and one conversion-focused — to build audience and drive measurable results simultaneously."
			},
			{
				title: "Audience Targeting & Segmentation",
				description: "Custom audience builds for each campaign: interest-based, lookalike, and retargeting audiences to maximise return on ad spend."
			},
			{
				title: "Content Calendar & Brand Review",
				description: "Full monthly calendar with a structured approval process and brand consistency checks before any content or ad creative goes live."
			},
			{
				title: "Monthly Analytics Report",
				description: "Comprehensive report covering organic reach, paid campaign performance (ROAS, CTR, CPC, conversions), and strategic recommendations."
			}
		],
		idealClientProfile: [
			"E-commerce businesses driving online sales through social and search",
			"Growing service businesses ready to scale their lead pipeline",
			"Brands expanding into new markets or launching new product lines",
			"Businesses that have outgrown Starter and want a full content + paid engine"
		],
		outcomes: [
			"Consistent month-on-month growth in reach, followers, and inbound leads.",
			"Two active campaigns generating awareness and conversions simultaneously.",
			"Higher quality lead flow and reduced cost-per-lead as campaigns mature.",
			"Dominant, professional presence across four core digital channels."
		],
		howItWorks: [
			{
				title: "Strategy Session & Funnel Mapping",
				body: "We map your growth funnel: who your ideal customer is, where they spend time online, and what messaging moves them from awareness to enquiry."
			},
			{
				title: "Monthly Content & Campaign Builds",
				body: "Full content calendar plus both campaign briefs are built and shared for approval. Creative assets, targeting audiences, and budget allocation are all set before launch."
			},
			{
				title: "Launch, Monitor & Optimise",
				body: "Campaigns are launched and monitored daily. Underperforming ad sets are paused; top performers get budget shifted their way. Content publishes on schedule."
			},
			{
				title: "Performance Report & Strategy Review",
				body: "Monthly report with full organic and paid analytics, plus a strategy review call to align on the next month's direction."
			}
		]
	},
	{
		name: "Momentum",
		price: "PKR 175,000",
		cadence: "/mo",
		subtitle: "Stronger Engagement Package",
		description: "The first package to combine social media, paid campaigns, website presence, and SEO — giving your business a cohesive digital foundation that compounds in value over time.",
		intro: [
			"Momentum is a milestone package. It's where your digital presence stops being just social media and becomes a fully integrated system: a website that works for you, SEO that earns you organic search traffic, and a high-volume social and paid media operation — all running in sync, all pointing toward the same growth goals.",
			"For businesses at this stage, the compounding effect becomes real. Organic search traffic grows month over month. Your website converts visitors into enquiries. Your social channels build trust with people who found you through Google. Your ads retarget people who visited your site. These systems reinforce each other — and Momentum sets them all in motion.",
			"At PKR 175,000/month, Momentum is ideal for established businesses that want to stop leaving money on the table and start building digital infrastructure that delivers returns for years, not just the current campaign cycle."
		],
		features: [
			{
				title: "4–5 Social Platforms",
				description: "Broad social coverage with platform-specific content strategies to maximise relevance and engagement on each channel."
			},
			{
				title: "20–25 Content Pieces / Month",
				description: "High-frequency posting schedule that keeps your brand active, visible, and algorithm-favoured across every channel."
			},
			{
				title: "2 Active Ad Campaigns",
				description: "Concurrent paid campaigns for awareness and lead generation, with weekly optimisation to improve performance throughout the month."
			},
			{
				title: "Business Website (New or Refresh)",
				description: "A professional, mobile-first website — either new-build or a refresh of your existing site — built to convert visitors into enquiries."
			},
			{
				title: "Basic SEO Setup",
				description: "On-page SEO across your core web pages: keyword optimisation, meta tags, page speed improvements, and Google Search Console setup."
			},
			{
				title: "Monthly Integrated Performance Report",
				description: "Unified report covering social, paid, website traffic, and SEO keyword positions — one document, full picture."
			}
		],
		idealClientProfile: [
			"Established businesses ready to build proper digital infrastructure",
			"Service businesses and professional firms needing a strong website + visibility combination",
			"Companies that rely on Google search traffic and want to start capturing it",
			"Brands growing out of pure social media and building a long-term organic engine"
		],
		outcomes: [
			"A professional website generating consistent inbound enquiries.",
			"Growing organic search visibility as SEO work compounds month over month.",
			"High-volume social presence maintaining brand top-of-mind across 4–5 channels.",
			"Integrated digital system where every channel reinforces the others."
		],
		howItWorks: [
			{
				title: "Discovery & Digital Audit",
				body: "We audit your current web presence, social accounts, and search visibility to establish a baseline and identify the highest-impact improvements."
			},
			{
				title: "Website & SEO Foundation",
				body: "In month one, the website is built or refreshed and the SEO foundations are laid: on-page optimisation, technical fixes, and search console setup."
			},
			{
				title: "Ongoing Content, Ads & SEO",
				body: "From month two onwards, the full engine runs: social content, ad campaigns, and monthly SEO optimisation all operating in parallel."
			},
			{
				title: "Integrated Monthly Reporting",
				body: "One comprehensive report each month covering every channel, with strategic recommendations for continuous improvement."
			}
		]
	},
	{
		name: "Performance",
		price: "PKR 250,000",
		cadence: "/mo",
		subtitle: "Scaling Lead Generation Package",
		description: "A full-scale digital operation built around lead generation and measurable ROI — five platforms, 25–30 monthly content pieces, three ad campaigns, and rigorous conversion tracking.",
		intro: [
			"Performance is for businesses that have moved past brand building and are now laser-focused on one thing: generating qualified leads and converting them into revenue. Every element of this package is oriented around measurable outcomes — cost per lead, conversion rate, return on ad spend — and optimised relentlessly to improve them.",
			"At this tier, we run three simultaneous ad campaigns — typically split across awareness, consideration, and conversion objectives — while maintaining a high-volume content operation across five platforms. Conversion tracking is set up and calibrated so you can see exactly which ads, which platforms, and which audiences are driving real business results.",
			"Performance is the right choice for scaling businesses, high-growth startups, and e-commerce brands that need their digital marketing to act like a growth machine — predictable, measurable, and improving every month."
		],
		features: [
			{
				title: "5 Social Platforms",
				description: "Full omnichannel presence across five platforms with content tailored to each platform's format, audience, and algorithm."
			},
			{
				title: "25–30 Content Pieces / Month",
				description: "Near-daily content cadence ensuring maximum algorithm visibility and consistent brand presence across every channel."
			},
			{
				title: "3 Active Ad Campaigns",
				description: "Three concurrent campaigns covering the full funnel: awareness, retargeting, and conversion — with weekly bid and budget optimisation."
			},
			{
				title: "Conversion Tracking Setup",
				description: "Full pixel installation, event tracking, and Google Analytics 4 setup so every lead and sale is attributed to the correct campaign and channel."
			},
			{
				title: "A/B Creative Testing",
				description: "Systematic testing of ad creatives, copy variations, and landing page elements to find the combinations that convert best."
			},
			{
				title: "Monthly ROAS & Lead Attribution Report",
				description: "Detailed performance report with cost per lead, ROAS, campaign breakdown, and conversion funnel analysis."
			}
		],
		idealClientProfile: [
			"Scaling businesses with proven products ready to accelerate lead volume",
			"High-growth startups needing a predictable digital acquisition engine",
			"E-commerce brands focused on maximising return on advertising spend",
			"Service businesses with clear lead-to-sale processes ready to scale"
		],
		outcomes: [
			"A measurable, data-driven digital acquisition system.",
			"Steadily improving cost per lead as campaigns are optimised over time.",
			"Full visibility into which channels and campaigns drive actual revenue.",
			"Scalable lead volume month-on-month as your ad budget grows."
		],
		howItWorks: [
			{
				title: "Conversion Architecture Setup",
				body: "Month one is about foundations: pixel setup, GA4 configuration, event tracking, and making sure every conversion point on your website and ads is properly measured."
			},
			{
				title: "Full Funnel Campaign Launch",
				body: "Three campaigns go live across the funnel. We establish baseline performance benchmarks in the first 2–3 weeks."
			},
			{
				title: "Weekly Optimisation Cycles",
				body: "Every week we review performance data, pause underperformers, scale winners, test new creatives, and adjust audience targeting to improve efficiency."
			},
			{
				title: "Monthly Strategy Review",
				body: "End-of-month deep-dive report with ROAS analysis, lead attribution, and a forward-looking strategy for the next 30 days."
			}
		],
		faqs: [{
			question: "Is ad spend included in the PKR 250,000?",
			answer: "No — the package fee covers management, strategy, and creative. Ad spend is a separate budget you control and pay directly to the platforms."
		}, {
			question: "What's the recommended ad budget at this tier?",
			answer: "We recommend a minimum of PKR 50,000–100,000/month in ad spend to see meaningful scale, though this varies by industry."
		}]
	},
	{
		name: "Scale",
		price: "PKR 350,000",
		cadence: "/mo",
		subtitle: "Scaling Brands Package",
		description: "A complete digital growth system combining high-volume content, advanced paid media, and CRM automation — so your leads are captured, nurtured, and converted without manual intervention.",
		intro: [
			"Scale is the tier where your digital operation becomes truly automated. It's not just about generating leads anymore — it's about building a system that captures every lead, qualifies them intelligently, follows up automatically, and routes them to your sales team ready to close. At this level, your marketing and sales infrastructure work as one seamless machine.",
			"With six platforms, 30 to 40 content pieces per month, and multi-channel paid campaigns running alongside a fully configured CRM and WhatsApp automation setup, Scale gives your team leverage they've never had before. Leads that used to fall through the cracks are now captured and nurtured automatically. Sales cycles shorten. Conversion rates improve.",
			"This package suits national brands, growing enterprises, and multi-location businesses that need serious infrastructure — not just more content and more ads. If you're at a stage where operational efficiency is as important as lead generation, Scale is built for you."
		],
		features: [
			{
				title: "6 Social Platforms",
				description: "Total market coverage across six channels, with a unified brand narrative applied consistently across every touchpoint."
			},
			{
				title: "30–40 Content Pieces / Month",
				description: "High-frequency content cadence delivering dominant brand presence — enough to be top-of-mind wherever your audience spends time online."
			},
			{
				title: "Multi-Channel Ad Campaigns",
				description: "Advanced paid media across Meta, Google, and additional channels with full-funnel strategy and weekly optimisation."
			},
			{
				title: "CRM Setup & Configuration",
				description: "Full CRM implementation — pipeline stages, contact management, deal tracking, and team access configuration — tailored to your sales process."
			},
			{
				title: "WhatsApp & Email Automation Flows",
				description: "Automated follow-up sequences via WhatsApp and email: lead qualification, appointment reminders, nurture sequences, and re-engagement campaigns."
			},
			{
				title: "Lead Capture & Routing",
				description: "Smart forms and ad integrations that feed leads directly into your CRM and trigger the appropriate automation flow instantly."
			},
			{
				title: "Bi-Weekly Performance Reviews",
				description: "More frequent reporting and strategic calls to keep a fast-scaling operation aligned and optimised."
			}
		],
		idealClientProfile: [
			"National brands managing high lead volumes that need automated follow-up",
			"Multi-location businesses requiring consistent omnichannel presence",
			"Companies building a repeatable, scalable sales system for the first time",
			"Enterprises ready to integrate marketing automation with their sales process"
		],
		outcomes: [
			"A fully automated lead capture, nurture, and follow-up system.",
			"Dramatically reduced lead response times — automatic replies in seconds.",
			"Higher conversion rates as no lead goes cold or uncontacted.",
			"Complete visibility of your lead pipeline from first touch to closed deal."
		],
		howItWorks: [
			{
				title: "CRM & Automation Architecture",
				body: "Month one focuses on CRM implementation and automation flow design — mapping your sales process, building the pipeline stages, and programming your follow-up sequences."
			},
			{
				title: "Integration & Testing",
				body: "We connect your ad lead forms, website, and WhatsApp to the CRM. Every flow is tested end-to-end before going live."
			},
			{
				title: "Full Operation Goes Live",
				body: "Content, ads, CRM, and automation all run simultaneously. Your team starts receiving pre-qualified, already-contacted leads in their pipeline."
			},
			{
				title: "Bi-Weekly Optimisation",
				body: "Every two weeks we review performance across all channels — marketing and automation — and make data-driven adjustments to improve efficiency."
			}
		]
	},
	{
		name: "Platinum",
		price: "PKR 500,000",
		cadence: "/mo",
		subtitle: "Full Digital Growth System",
		description: "CNI's most comprehensive managed package — a complete end-to-end digital growth ecosystem covering every channel, advanced automation, and enterprise-grade campaign management under one roof.",
		intro: [
			"Platinum is CNI's flagship managed package — the point at which your entire digital growth operation is fully integrated, fully automated, and firing on every cylinder. Seven platforms, 40 to 50 content pieces per month, advanced multi-channel ad campaigns, a configured CRM, WhatsApp automation, and a strategic account review every month. It is, quite simply, everything working together.",
			"At this tier, the distinctions between marketing, sales, and operations begin to blur — in the best possible way. Your content builds the audience, your ads drive qualified traffic, your website converts it, your CRM captures it, and your automation nurtures it. Every system feeds the next. The result is compounding growth that accelerates rather than plateaus.",
			"Platinum is designed for ambitious businesses that are done experimenting and ready to commit to a world-class digital operation. Industry leaders, fast-scaling brands, and category-defining companies find this tier gives them the competitive edge to dominate their market."
		],
		features: [
			{
				title: "7 Social Platforms",
				description: "Every major social platform managed with a unified strategy and platform-native content formats for maximum impact."
			},
			{
				title: "40–50 Content Pieces / Month",
				description: "Premium volume content cadence — enough to maintain dominant presence, feed algorithms, and keep your audience consistently engaged."
			},
			{
				title: "Advanced Multi-Channel Ad Campaigns",
				description: "Full-funnel paid media across Meta, Google, TikTok, and LinkedIn — with advanced audience segmentation, creative testing, and conversion optimisation."
			},
			{
				title: "CRM + WhatsApp Automation",
				description: "Fully configured CRM with automated WhatsApp and email sequences — lead capture, qualification, follow-up, and re-engagement all automated."
			},
			{
				title: "Conversion Tracking & Attribution",
				description: "Enterprise-grade tracking across every channel with multi-touch attribution so you know exactly what's generating revenue."
			},
			{
				title: "Monthly Strategic Account Review",
				description: "A structured monthly strategy session with your CNI account lead to review performance, align on goals, and plan the next quarter's direction."
			},
			{
				title: "Priority Support",
				description: "Dedicated response channel with priority turnaround on all requests, creative revisions, and campaign changes."
			}
		],
		idealClientProfile: [
			"Industry-leading brands wanting to consolidate all digital activity under one expert partner",
			"Businesses scaling rapidly that need enterprise-grade infrastructure to support growth",
			"Companies that have tried multiple agencies and want everything integrated and accountable",
			"Market leaders who want to stay ahead and invest in winning their category digitally"
		],
		outcomes: [
			"Total digital market dominance across every major channel.",
			"A fully automated, integrated growth system delivering compounding returns.",
			"Enterprise-level brand presence matched by enterprise-level conversion capability.",
			"Strategic partnership with CNI's senior team aligned to your business goals."
		],
		howItWorks: [
			{
				title: "Full Digital Audit & Strategy",
				body: "We begin with a comprehensive audit of your entire digital ecosystem and produce a strategic roadmap aligned to your 6-month growth goals."
			},
			{
				title: "Systems Build & Integration",
				body: "CRM, automation flows, tracking infrastructure, and website optimisations are built and tested in month one while content and campaigns begin immediately."
			},
			{
				title: "Full System in Operation",
				body: "By month two, every element is live and integrated: content, ads, CRM, automation, and reporting all running together."
			},
			{
				title: "Monthly Strategy Reviews",
				body: "Monthly structured reviews with your dedicated account lead to assess performance, plan campaigns, and make strategic decisions based on real data."
			}
		]
	},
	{
		name: "Enterprise",
		price: "PKR 750,000+",
		cadence: "/mo",
		subtitle: "Dedicated Growth Department",
		description: "An outsourced growth department working exclusively for your business — bespoke strategy, unlimited content, dedicated team members, and full digital operations management at enterprise scale.",
		intro: [
			"Enterprise is not a package — it is a partnership. At this level, CNI operates as your dedicated digital growth department: a committed team working exclusively on your business, embedded in your goals, aligned to your leadership, and accountable for real business outcomes. Everything is bespoke, everything is prioritised, and nothing is templated.",
			"This tier is for organisations that need more than a managed service — they need a strategic partner that understands their business as deeply as an internal team would, but brings the specialised capabilities, creative talent, and technical depth of a full-service agency. You get a dedicated account manager, a dedicated strategist, access to our entire specialist team, and a custom-built growth system designed around your specific operation.",
			"Whether you are a multinational expanding into new markets, a complex organisation managing multiple brands, or an ambitious company that wants to move fast without building a large internal team, Enterprise gives you the infrastructure, talent, and accountability to make it happen."
		],
		features: [
			{
				title: "Custom Multi-Channel Strategy",
				description: "A bespoke digital strategy built from scratch for your business — not a template. Covers every channel, campaign type, and growth lever relevant to your goals."
			},
			{
				title: "50+ Content Pieces / Month",
				description: "Unlimited content volume calibrated to your actual needs — from daily social content to long-form thought leadership, video scripts, and beyond."
			},
			{
				title: "Dedicated Account Manager",
				description: "A senior CNI account manager works exclusively on your business, available directly, and accountable for your results."
			},
			{
				title: "Full-Service Paid Media",
				description: "Enterprise-grade campaign management across all relevant platforms — strategy, creative, execution, and daily optimisation by a specialist paid media team."
			},
			{
				title: "CRM, Automation & Systems Integration",
				description: "Complete CRM implementation, WhatsApp and email automation, ERP integration, and any additional system connectivity your operation requires."
			},
			{
				title: "Priority Creative Production",
				description: "First priority on all creative requests — photography, videography, graphic design, web development — with fast turnaround times and senior team allocation."
			},
			{
				title: "Quarterly Business Reviews",
				description: "Structured QBRs with CNI leadership to review business impact, align on strategy, and plan the next quarter's major initiatives."
			},
			{
				title: "Reporting & Analytics Dashboard",
				description: "A custom analytics dashboard giving your leadership team real-time visibility into every KPI across every digital channel."
			}
		],
		idealClientProfile: [
			"Multinational corporations requiring consistent digital operations across markets",
			"Complex organisations managing multiple brands or product lines",
			"High-growth companies scaling rapidly that need an agile, expert external team",
			"Leadership teams that want full accountability and strategic partnership, not just execution"
		],
		outcomes: [
			"A fully dedicated growth team operating as an extension of your business.",
			"Bespoke strategy and execution at a pace and scale that internal teams rarely achieve.",
			"Deep integration between marketing, sales, and operations systems.",
			"Quarterly strategic alignment ensuring every initiative serves long-term business goals."
		],
		howItWorks: [
			{
				title: "Deep Discovery & Strategic Alignment",
				body: "We spend the first two weeks in structured discovery: stakeholder interviews, full digital audit, competitive analysis, and goal-setting. The output is a bespoke 6-month growth roadmap."
			},
			{
				title: "Team Assignment & Onboarding",
				body: "Your dedicated account manager, strategist, and specialist team members are assigned and onboarded to your brand, tools, and internal processes."
			},
			{
				title: "Phased Execution Launch",
				body: "Systems, campaigns, and content operations launch in a structured sequence — prioritised by highest-impact opportunities — so results start coming in while foundations are being built."
			},
			{
				title: "Ongoing Operations & QBRs",
				body: "Your CNI team operates continuously, with monthly strategy reviews and quarterly business reviews to ensure the work stays aligned to your evolving goals."
			}
		],
		faqs: [
			{
				question: "Is the PKR 750,000 a fixed price?",
				answer: "It's a starting price. The final retainer is scoped based on your specific requirements, team size, and deliverable volume. We provide a detailed proposal after discovery."
			},
			{
				question: "How is the dedicated team structured?",
				answer: "You get a dedicated account manager and strategist as your primary contacts, plus access to our full specialist team: designers, developers, media buyers, automation engineers, and copywriters."
			},
			{
				question: "Can we start with a smaller scope and grow?",
				answer: "Yes — we often recommend starting at Platinum and transitioning to Enterprise as the relationship deepens and scope expands."
			}
		]
	}
];
var TECH_SOLUTIONS = [
	{
		name: "CRM Solutions",
		price: "from PKR 150,000/mo"
	},
	{
		name: "WhatsApp API Automation",
		price: "from PKR 40,000/mo"
	},
	{
		name: "Website Development",
		price: "from PKR 75,000"
	},
	{
		name: "SEO & AI Visibility",
		price: "from PKR 60,000/mo"
	},
	{
		name: "Customer Portal",
		price: "project-based"
	},
	{
		name: "Executive Portal",
		price: "project-based"
	},
	{
		name: "App Development",
		price: "from PKR 120,000"
	},
	{
		name: "Real Estate ERP",
		price: "from PKR 650,000"
	},
	{
		name: "ERP Solutions",
		price: "from PKR 1,000,000"
	},
	{
		name: "POS System",
		price: "from PKR 250,000"
	},
	{
		name: "Dealer App",
		price: "project-based"
	},
	{
		name: "Custom Software",
		price: "project-based"
	}
];
var STATS = [
	{
		value: 11,
		suffix: "+",
		label: "Active Brands"
	},
	{
		value: 150,
		suffix: "+",
		label: "Campaigns Delivered"
	},
	{
		value: 25,
		suffix: "+",
		label: "Live Websites"
	},
	{
		value: 20,
		suffix: "+",
		label: "Deployed Systems"
	},
	{
		value: 5,
		suffix: "M+",
		label: "Monthly Reach"
	},
	{
		value: 1,
		suffix: "M+",
		label: "Engagements / Month"
	},
	{
		value: 200,
		suffix: "K+",
		label: "Leads Generated"
	},
	{
		value: 100,
		suffix: "+",
		label: "Automation Flows"
	}
];
var SUPPORT_PLANS = [
	{
		name: "Essential Care",
		price: "PKR 35,000/mo",
		features: [
			"Uptime monitoring",
			"Helpdesk support",
			"8hr response"
		]
	},
	{
		name: "Business Care",
		price: "PKR 85,000/mo",
		features: [
			"Priority support — 4hr",
			"Proactive monitoring",
			"Quarterly review"
		],
		featured: true
	},
	{
		name: "Enterprise Managed Service",
		price: "from PKR 225,000/mo",
		features: [
			"Dedicated account manager",
			"24/7 priority",
			"Strategic roadmap & AI enablement"
		]
	}
];
var BUDGET_OPTIONS = [
	"Spark — PKR 50,000/mo",
	"Starter — PKR 85,000/mo",
	"Growth — PKR 125,000/mo",
	"Momentum — PKR 175,000/mo",
	"Performance — PKR 250,000/mo",
	"Scale — PKR 350,000/mo",
	"Platinum — PKR 500,000/mo",
	"Enterprise — PKR 750,000+/mo"
];
var PORTFOLIO_PROJECTS = [
	{
		slug: "gc-royal-emporium",
		folderName: "project1",
		title: "GC Royal Emporium",
		category: "Branding & Digital Strategy",
		client: "GC Royal Emporium",
		desc: "A complete brand transformation and digital strategy for a premium retail emporium.",
		thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
		images: [
			{
				device: "desktop",
				url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
			},
			{
				device: "tablet",
				url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
			},
			{
				device: "mobile",
				url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
			}
		],
		liveLink: "https://etemaad100-group.vercel.app/",
		challenge: "GC Royal Emporium, a premium retail brand, struggled to establish a cohesive digital presence that reflected their in-store luxury experience. Their branding was inconsistent across platforms, and they lacked a clear digital strategy to engage high-net-worth customers and drive foot traffic.",
		solution: "We engineered a comprehensive brand transformation, starting with a refined visual identity that communicated luxury and exclusivity. We developed a tailored digital strategy, including high-end social media content, a modernized e-commerce web presence, and targeted premium ad campaigns to capture their ideal demographic.",
		result: "The unified branding and elevated digital presence led to a 150% increase in social media engagement, a 45% boost in online inquiries, and significantly higher foot traffic to their physical locations, cementing their position as a luxury market leader."
	},
	{
		slug: "taskly",
		folderName: "project2",
		title: "Taskly",
		category: "Custom Software / SaaS Platform",
		client: "AI & Digital Division (Internal)",
		desc: "An all-in-one team and work management platform tailored for digital agencies.",
		thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
		images: [{
			device: "desktop",
			url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
		}, {
			device: "mobile",
			url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80"
		}],
		liveLink: "",
		challenge: "Managing multiple clients, team members, and content across numerous social platforms was scattered and hard to track. We lacked a single source of truth for tracking who was doing what, team capacity, output reporting, and overlapping deadlines.",
		solution: "We built Taskly, an internal all-in-one SaaS platform. It features a personalized dashboard tracking weekly capacity, an 8-week history chart, and open tasks. The core is a full Kanban board with drag-and-drop validation, rich filters, and effort tracking. We also integrated robust reporting for posting performance across Instagram, Facebook, TikTok, LinkedIn, and X, alongside modules for Workload, Calendar, Vault, and Documents.",
		result: "Taskly provided one unified platform giving full visibility into tasks, team capacity, and posting performance. This centralized approach drastically reduced overdue work, created clearer accountability, and enabled data-driven weekly and monthly reporting for all client workspaces."
	},
	{
		slug: "ai-media-automation",
		folderName: "project3",
		title: "Ai Media Automation",
		category: "AI Automation",
		client: "Attari gruop of companies",
		desc: "An AI-powered social media automation platform that auto-publishes content across all your connected accounts — no manual posting needed.",
		thumbnail: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=800&q=80",
		images: [{
			device: "desktop",
			url: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=1200&q=80"
		}],
		liveLink: "",
		challenge: "Businesses managing multiple social media accounts had to manually log into each platform and post content separately — a time-consuming, repetitive process that made it easy to fall behind on a consistent posting schedule across channels.",
		solution: "We built a centralized social media automation platform. Users simply connect their social accounts once, schedule their content, and select which platforms to target. The system automatically publishes the posts across all selected channels on their behalf, eliminating the need to manually post on each platform individually.",
		result: "Businesses save hours of manual posting work each week, maintain a consistent and reliable presence across all their social channels, and can easily manage their entire content strategy from a single dashboard."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CoCz_VNl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DzVxwqxj.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CNI AI & Digital Division" },
			{
				name: "description",
				content: "Intelligent Growth. Integrated Business Transformation."
			},
			{
				name: "author",
				content: "Crescent Nova International"
			},
			{
				property: "og:title",
				content: "CNI AI & Digital Division"
			},
			{
				property: "og:description",
				content: "Intelligent Growth. Integrated Business Transformation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: logo_default,
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function WhatsAppFAB() {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2",
		style: { isolation: "isolate" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					opacity: hovered ? 1 : 0,
					transform: hovered ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
					transition: "opacity 0.22s ease, transform 0.22s ease",
					pointerEvents: "none"
				},
				className: "rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[0.72rem] font-medium text-white shadow-lg whitespace-nowrap border border-white/10",
				children: "Chat on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/923427438726",
				target: "_blank",
				rel: "noreferrer noopener",
				"aria-label": "Chat on WhatsApp",
				onMouseEnter: () => setHovered(true),
				onMouseLeave: () => setHovered(false),
				style: {
					transform: hovered ? "scale(1.12)" : "scale(1)",
					transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 56,
					height: 56,
					borderRadius: "50%",
					background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
					boxShadow: hovered ? "0 0 0 0 transparent, 0 8px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.25)" : "0 4px 18px rgba(37,211,102,0.38), 0 2px 8px rgba(0,0,0,0.2)",
					position: "relative"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						position: "absolute",
						inset: 0,
						borderRadius: "50%",
						background: "rgba(37,211,102,0.35)",
						animation: "wa-pulse 2.2s ease-out infinite"
					},
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 32 32",
					width: "28",
					height: "28",
					fill: "white",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2C8.28 2 2 8.28 2 16c0 2.49.67 4.83 1.84 6.85L2 30l7.34-1.81A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2Zm0 25.5a11.46 11.46 0 0 1-5.84-1.6l-.42-.25-4.35 1.07 1.1-4.24-.27-.44A11.5 11.5 0 1 1 16 27.5Zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59l-.66-.01c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4Z" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      ` })
		]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFAB, {})]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-B_FE3DbF.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CNI AI & Digital Division | Intelligent Growth & Transformation" },
		{
			name: "description",
			content: "Branding, websites, SEO, CRM, ERP and AI automation for ambitious businesses in Pakistan and Saudi Arabia. The AI & Digital Division of Crescent Nova International."
		},
		{
			property: "og:title",
			content: "CNI AI & Digital Division"
		},
		{
			property: "og:description",
			content: "Intelligent Growth. Integrated Business Transformation. Your growth partner in Pakistan & Saudi Arabia."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./Gallery-BNjAfE61.mjs");
var Route$10 = createFileRoute("/Gallery")({
	head: () => ({ meta: [{ title: "Gallery | CNI AI & Digital Division" }, {
		name: "description",
		content: "A look inside CNI — our team and the Islamabad office behind every project."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-Bz90JEZV.mjs");
var Route$9 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./contact-B4RX4VT5.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | CNI AI & Digital Division" }, {
		name: "description",
		content: "Get in touch with CNI AI & Digital Division."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./packages-BNLFs_o1.mjs");
var Route$7 = createFileRoute("/packages")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./services-CF39xF4H.mjs");
var Route$6 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./packages.index-R08hkkmh.mjs");
var Route$5 = createFileRoute("/packages/")({
	head: () => ({ meta: [{ title: "Packages | CNI AI & Digital Division" }, {
		name: "description",
		content: "Scalable digital growth packages designed to accelerate your brand — from social media to full AI-powered growth systems."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./packages._slug-BZJnFM6F.mjs");
function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
var Route$4 = createFileRoute("/packages/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	loader: ({ params }) => {
		const pkg = PACKAGES.find((p) => slugify(p.name) === params.slug);
		if (!pkg) throw notFound();
		return { pkg };
	}
});
var $$splitComponentImporter$3 = () => import("./portfolio.index-BCvVv6f1.mjs");
var Route$3 = createFileRoute("/portfolio/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./portfolio._slug-CtgDD1T_.mjs");
var Route$2 = createFileRoute("/portfolio/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./services.index-DkMny5Na.mjs");
var Route$1 = createFileRoute("/services/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./services._slug-qYfpiJt_.mjs");
var Route = createFileRoute("/services/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	}
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$10.update({
	id: "/Gallery",
	path: "/Gallery",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var PackagesRoute = Route$7.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$12
});
var ServicesRoute = Route$6.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$12
});
var PackagesIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => PackagesRoute
});
var PackagesSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PackagesRoute
});
var PortfolioIndexRoute = Route$3.update({
	id: "/portfolio/",
	path: "/portfolio/",
	getParentRoute: () => Route$12
});
var PortfolioSlugRoute = Route$2.update({
	id: "/portfolio/$slug",
	path: "/portfolio/$slug",
	getParentRoute: () => Route$12
});
var ServicesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicesRoute
});
var ServicesSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var PackagesRouteChildren = {
	PackagesSlugRoute,
	PackagesIndexRoute
};
var PackagesRouteWithChildren = PackagesRoute._addFileChildren(PackagesRouteChildren);
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	GalleryRoute,
	AboutRoute,
	ContactRoute,
	PackagesRoute: PackagesRouteWithChildren,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	PortfolioSlugRoute,
	PortfolioIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { BUDGET_OPTIONS as a, PORTFOLIO_PROJECTS as c, SUPPORT_PLANS as d, TECH_SOLUTIONS as f, Route$4 as i, SERVICES as l, Route as n, NAV_LINKS as o, logo_default as p, Route$2 as r, PACKAGES as s, router_exports as t, STATS as u };
