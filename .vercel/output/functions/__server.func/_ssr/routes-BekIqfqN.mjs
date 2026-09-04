import { i as __toESM } from "../_runtime.mjs";
import { a as SERVICES } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { M as ArrowUpRight, N as ArrowRight, O as ChevronDown, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, l as AnimatePresence, s as useScroll } from "../_libs/framer-motion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as GoldRule, c as Reveal, d as cn, i as Footer, l as SectionHeading, o as MagneticButton, s as Navbar, t as CircuitBackdrop } from "./Contact-CRZlHUy-.mjs";
import { t as Testimonials } from "./Testimonials-BSBWghDF.mjs";
import { n as Packages, r as Portfolio, t as GlobalPresence } from "./SectionsB-DfjV3TYY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BekIqfqN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var hero_default = "/assets/hero-CMZAs2hu.mp4";
var HEADLINE = [
	"Where",
	"Intelligence",
	"Meets",
	"Growth."
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--ink)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.video, {
				initial: {
					opacity: 0,
					scale: 1.04
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: 1.6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "absolute inset-0 size-full object-cover",
				src: hero_default,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				disablePictureInPicture: true,
				controls: false,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_1100px_900px_at_18%_50%,color-mix(in_oklab,var(--ink)_92%,transparent)_0%,color-mix(in_oklab,var(--ink)_68%,transparent)_35%,color-mix(in_oklab,var(--ink)_28%,transparent)_60%,transparent_78%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-veil absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ink)_12%,transparent)_0%,color-mix(in_oklab,var(--ink)_32%,transparent)_50%,color-mix(in_oklab,var(--ink)_70%,transparent)_92%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex max-w-2xl flex-col items-start text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .8 },
							className: "eyebrow",
							children: "Crescent Nova International"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-7 text-4xl leading-[1.05] sm:text-6xl md:text-7xl",
							children: HEADLINE.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 34,
									filter: "blur(8px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								transition: {
									duration: .9,
									delay: .15 + i * .12,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "mr-[0.28em] inline-block",
								children: i === 1 || i === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: word
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: word })
							}, word))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scaleX: .3
							},
							animate: {
								opacity: 1,
								scaleX: 1
							},
							transition: {
								duration: 1,
								delay: .7
							},
							className: "gold-rule mt-8 w-64 max-w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 18
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .8
							},
							className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "AI & Digital Division of Crescent Nova International — Branding, Websites, CRM, ERP & AI Automation for ambitious businesses in Pakistan & Saudi Arabia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 18
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .95
							},
							className: "mt-10 flex flex-col gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								as: "a",
								href: "/contact",
								variant: "gold",
								children: "Start Your Growth Journey"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								as: "a",
								href: "#services",
								variant: "glass",
								children: "Explore Services"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[var(--gold-bright)] animate-pulse-dot" })]
			})
		]
	});
}
var icon_brain_default = "/assets/icon-brain-Bflz9wwn.png";
var icon_nodes_default = "/assets/icon-nodes-BpoGy1Xr.png";
var SERVICES_COPY = "Our services include Branding & Identity, Printing & Corporate Collateral, Website Development & Ecommerce, SEO, AEO & AI Visibility, Digital Marketing & Paid Media, Content Creation, CRM & WhatsApp Automation, ERP, POS, Portals & Custom Software, and AI Automations, Dashboards & Integrations.";
var COPY = "We are the AI & Digital Division of Crescent Nova International — a team that combines strategy, technology and creativity to build intelligent solutions. We believe businesses need a growth engine, not just a service vendor, so we craft brands, websites, CRM, ERP and AI-powered systems that accelerate growth, streamline operations and future-proof our clients across Pakistan and Saudi Arabia.";
function FloatIcon({ src, alt, from, delay, className, float = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: cn("pointer-events-none absolute select-none", className),
		initial: {
			opacity: 0,
			x: from
		},
		whileInView: {
			opacity: 1,
			x: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { y: [
				0,
				-float,
				0
			] },
			transition: {
				duration: 6 + delay * 4,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[12%] rounded-full bg-[color-mix(in_oklab,var(--gold)_28%,transparent)] blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				loading: "lazy",
				width: 512,
				height: 512,
				className: "relative w-full opacity-80 drop-shadow-[0_0_28px_color-mix(in_oklab,var(--teal-bright)_35%,transparent)]"
			})]
		})
	});
}
function CharReveal({ text, className }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.9", "start 0.25"]
	});
	const chars = Array.from(text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: cn("mx-auto w-full max-w-[700px] sm:max-w-[800px] md:max-w-[900px] px-4 text-center leading-relaxed text-[var(--cream)] whitespace-normal break-words", className),
		style: { fontSize: "clamp(1rem, 2vw, 1.35rem)" },
		children: chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Char, {
			char: c,
			progress: scrollYProgress,
			index: i,
			total: chars.length
		}, i))
	});
}
function Char({ char, progress, index, total }) {
	const start = index / total;
	const end = Math.min(start + 1.5 / total, 1);
	const opacity = useTransform(progress, [start, end], [.15, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		style: { opacity },
		children: char
	});
}
function AboutReveal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1414] via-[#0F2E2C] to-[#0D2624] py-28 sm:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 w-full flex flex-col items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatIcon, {
					src: icon_brain_default,
					alt: "Faceted AI brain",
					from: -60,
					delay: .1,
					className: "absolute -left-2 sm:left-2 lg:left-4 top-4 sm:top-8 md:top-12 w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatIcon, {
					src: icon_nodes_default,
					alt: "Automation node network",
					from: 60,
					delay: .15,
					float: 16,
					className: "absolute -right-2 sm:right-2 lg:right-4 top-4 sm:top-8 md:top-12 w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex w-full flex-col items-center gap-8 sm:gap-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "text-gradient-brand font-display font-bold uppercase leading-[0.95] tracking-[0.02em]",
						style: { fontSize: "clamp(2.8rem, 9vw, 120px)" },
						children: "About Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharReveal, { text: COPY }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharReveal, { text: SERVICES_COPY }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 sm:mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									as: "a",
									href: "/about",
									children: "Know More About Us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									as: "a",
									href: "/contact",
									variant: "outline",
									children: "Let's Talk"
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function ServiceEcosystem() {
	const [active, setActive] = (0, import_react.useState)(0);
	const radius = 35;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Service Ecosystem",
					title: "One Integrated Ecosystem. Growth Accelerated by AI."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square w-full max-w-[400px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute inset-0",
								animate: { rotate: 360 },
								transition: {
									duration: 90,
									repeat: Infinity,
									ease: "linear"
								},
								children: SERVICES.map((s, i) => {
									const angle = i / SERVICES.length * Math.PI * 2 - Math.PI / 2;
									const left = 50 + Math.cos(angle) * radius;
									const top = 50 + Math.sin(angle) * radius;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "absolute size-0",
										style: {
											left: `${left}%`,
											top: `${top}%`
										},
										animate: { rotate: -360 },
										transition: {
											duration: 90,
											repeat: Infinity,
											ease: "linear"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onMouseEnter: () => setActive(i),
											onFocus: () => setActive(i),
											onClick: () => setActive(i),
											style: {
												left: 0,
												top: 0
											},
											className: cn("absolute -translate-x-1/2 -translate-y-1/2 rounded-full border p-3 transition-all duration-300", active === i ? "scale-125 border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_22%,transparent)]" : "border-[color-mix(in_oklab,var(--teal-bright)_50%,transparent)] bg-[color-mix(in_oklab,var(--teal-deep)_40%,transparent)]"),
											"aria-label": s.title,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-2 rounded-full bg-[var(--gold-bright)]" })
										})
									}, s.title);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-[10%] rounded-full border border-dashed opacity-30",
								style: { borderColor: "var(--teal-bright)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--teal-deep)_45%,transparent)] text-center backdrop-blur-md animate-float-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-[var(--gold-bright)]",
									children: "CNI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground",
									children: "AI Core"
								})]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel min-h-[260px] rounded-sm p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow",
									children: [
										"Service ",
										String(active + 1).padStart(2, "0"),
										" / 09"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-2xl sm:text-3xl",
									children: SERVICES[active]?.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-6 w-24" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-3 sm:grid-cols-2",
									children: (SERVICES[active]?.items ?? []).map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-3.5 shrink-0 text-[var(--gold-bright)]" }), it.title]
									}, it.title))
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onMouseEnter: () => setActive(i),
						onClick: () => setActive(i),
						className: cn("rounded-sm border px-5 py-4 text-left text-sm transition-all duration-300", active === i ? "border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] text-foreground" : "border-border text-muted-foreground hover:border-[color-mix(in_oklab,var(--gold)_55%,transparent)]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-3 text-[0.65rem] tracking-[0.2em] text-[var(--gold-bright)]",
							children: String(i + 1).padStart(2, "0")
						}), s.title]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							as: "a",
							href: "/services",
							children: "See More Details"
						})
					})
				})
			]
		})]
	});
}
var FAQS = [
	{
		question: "What services does CNI's AI & Digital Division offer?",
		answer: "CNI's AI & Digital Division is a full-service growth partner offering branding & identity, website development, SEO & AI visibility, digital marketing, content production, CRM & WhatsApp automation, custom ERP/POS software, and advanced AI-powered dashboards. Whether you're a startup establishing your presence or an enterprise streamlining operations, we deliver integrated solutions under one roof."
	},
	{
		question: "How is CNI different from a regular digital marketing agency?",
		answer: "Unlike traditional agencies that focus solely on ads or social media, CNI combines branding, technology, and intelligent automation into a single, cohesive growth system. We build the underlying infrastructure — CRMs, AI workflows, custom portals — that makes your marketing efforts compoundingly more effective over time. We're not just a vendor; we're a strategic growth partner embedded in your success."
	},
	{
		question: "Which markets/countries do you currently serve?",
		answer: "We primarily serve ambitious businesses in Pakistan and Saudi Arabia, with active client relationships in Karachi, Lahore, Islamabad, and Riyadh. Our digital-first model also enables us to partner with clients across the GCC and beyond. Reach out and we'll let you know how we can best support your market."
	},
	{
		question: "How long does it take to see results after starting a package?",
		answer: "Results vary by service — brand identity and website projects are typically delivered within 3–6 weeks, while SEO and organic marketing show meaningful traction within 3–4 months. Paid media campaigns and automation systems can generate results within the first 30 days. We set clear milestones from day one so you always know where you stand."
	},
	{
		question: "Can I customize a package instead of choosing a fixed tier?",
		answer: "Absolutely. Our packages are designed as starting points, not rigid constraints. During your initial discovery call, we assess your specific goals and build a tailored scope that fits your budget and growth stage. Many of our clients run fully bespoke engagements combining services from multiple tiers."
	},
	{
		question: "How do I get started working with CNI?",
		answer: "Getting started is simple — reach out via our contact form or WhatsApp us directly. We'll schedule a complimentary discovery call to understand your business, current challenges, and growth objectives. From there, we'll propose a custom roadmap and package recommendation with full transparency on timelines and deliverables."
	}
];
function FaqRow({ question, answer, isOpen, onToggle, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-white/10 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onToggle,
			"aria-expanded": isOpen,
			className: "w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-medium text-foreground hover:text-[var(--gold-bright)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/50 rounded-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				animate: { rotate: isOpen ? 180 : 0 },
				transition: {
					duration: .26,
					ease: "easeInOut"
				},
				className: "shrink-0 flex",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 transition-colors duration-200 ${isOpen ? "text-[var(--gold-bright)]" : "text-muted-foreground"}` })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .3,
					ease: "easeInOut"
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-5 text-sm text-muted-foreground leading-relaxed",
					children: answer
				})
			}, "answer")
		})]
	});
}
function FAQSection() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const toggle = (i) => setOpenIndex((prev) => prev === i ? null : i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: { background: "var(--ink, #040f0d)" },
		className: "pb-20 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 28
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-5%"
				},
				transition: {
					duration: .65,
					ease: [
						.25,
						.1,
						.25,
						1
					]
				},
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold text-white mb-2",
						children: "Frequently Asked Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "w-16 mb-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[24px] border border-white/10 bg-white/[0.02] px-8 py-2",
						children: FAQS.map((faq, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqRow, {
							index: idx,
							question: faq.question,
							answer: faq.answer,
							isOpen: openIndex === idx,
							onToggle: () => toggle(idx)
						}, idx))
					})
				]
			})
		})
	});
}
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden bg-background pb-24 sm:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center justify-center pointer-events-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[500px] w-[800px] rounded-full bg-[var(--gold)]/[0.03] blur-[100px]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .2
				},
				transition: {
					duration: .7,
					ease: [
						.25,
						.1,
						.25,
						1
					]
				},
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)] shadow-[0_0_20px_rgba(201,162,39,0.15)]",
						children: "Let's Talk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight",
						children: [
							"Ready to Build Your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)]",
								children: "Next Growth System?"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 mb-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed",
						children: "Partner with Crescent Nova International to automate your processes, elevate your brand, and drive measurable revenue. Let's start mapping out your custom growth strategy today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--gold)] px-8 font-semibold text-[#030908] transition-all hover:scale-[1.02] hover:bg-[var(--gold-bright)] hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get a Quote" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5 transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/923427438726",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 font-semibold text-white transition-all hover:border-[var(--gold)]/50 hover:bg-white/10 active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp Us" })]
						})]
					})
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutReveal, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceEcosystem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Packages, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalPresence, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
