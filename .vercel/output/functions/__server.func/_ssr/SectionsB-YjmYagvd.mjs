import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Building2, S as Cpu, a as Store, c as MonitorSmartphone, g as LayoutDashboard, i as Truck, j as Boxes, k as Check, l as MessageSquare, m as LoaderCircle, n as Wrench, o as Search, r as Users, x as Earth } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, i as useSpring, r as useReducedMotion, s as useScroll, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { a as GoldRule, c as Reveal, d as cn, l as SectionHeading, o as MagneticButton, r as CountUp, t as CircuitBackdrop, u as TiltCard } from "./Contact-DWLIruNB.mjs";
import { d as SUPPORT_PLANS, f as TECH_SOLUTIONS, s as PACKAGES, u as STATS } from "./router-CoCz_VNl.mjs";
import { t as ClientLogos } from "./ClientLogos-CQrSTjMZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionsB-YjmYagvd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SOLUTION_ICONS = [
	Users,
	MessageSquare,
	Earth,
	Search,
	MonitorSmartphone,
	LayoutDashboard,
	MonitorSmartphone,
	Building2,
	Boxes,
	Store,
	Truck,
	Wrench
];
function PackageCardBody({ p, isActive, prefersReducedMotion }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col md:flex-row gap-10 lg:gap-16 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-start justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]",
					children: p.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-6 w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)] flex items-baseline gap-2",
					children: [!prefersReducedMotion && isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						value: extractNumber(p.price),
						suffix: ""
					}) : p.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg md:text-xl text-muted-foreground font-sans tracking-normal",
						children: p.cadence
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 w-full sm:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						as: "a",
						href: "/contact",
						variant: "glass",
						className: "w-full sm:w-auto transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:border-[var(--gold)]",
						children: "Enquire"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-[1.2] flex flex-col justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: p.features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: prefersReducedMotion ? {
						opacity: 1,
						x: 0
					} : {
						opacity: 0,
						x: -12
					},
					whileInView: prefersReducedMotion ? void 0 : {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					transition: {
						duration: .4,
						delay: i * .05
					},
					className: "flex items-start gap-3 text-sm md:text-base text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 size-4 shrink-0 text-[var(--teal-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.title })]
				}, f.title))
			})
		})]
	});
}
function StackedPackageCard({ p, index, total, progress, prefersReducedMotion }) {
	const cardRef = (0, import_react.useRef)(null);
	const { scrollYProgress: cardProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "start start"]
	});
	const [isActive, setIsActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		return cardProgress.on("change", (v) => {
			if (v > .5 && !isActive) setIsActive(true);
		});
	}, [cardProgress, isActive]);
	const targetScale = 1 - (total - 1 - index) * .03;
	const scale = useTransform(progress, [0, 1], [1, targetScale]);
	const opacity = useTransform(progress, [0, 1], [1, .85]);
	if (prefersReducedMotion) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
		className: "w-full max-w-5xl xl:max-w-6xl mx-auto mb-8 rounded-[32px] md:rounded-[48px] border border-[#C9A227]/40 bg-[#061e19] p-8 sm:p-10 md:p-14 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCardBody, {
			p,
			isActive: true,
			prefersReducedMotion: true
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-12 sm:py-16 flex items-center justify-center sticky px-4",
		style: {
			top: `calc(6rem + ${index * 28}px)`,
			zIndex: index
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			ref: cardRef,
			style: {
				scale,
				opacity
			},
			initial: {
				y: 40,
				opacity: 0
			},
			whileInView: {
				y: 0,
				opacity: 1
			},
			viewport: {
				once: true,
				margin: "-10%"
			},
			transition: {
				duration: .7,
				ease: [
					.25,
					.1,
					.25,
					1
				],
				delay: index * .1
			},
			className: "w-full max-w-5xl xl:max-w-6xl mx-auto origin-top will-change-transform rounded-[32px] md:rounded-[48px] border border-[#C9A227]/40 bg-[#061e19] p-8 sm:p-10 md:p-14 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)] backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCardBody, {
				p,
				isActive,
				prefersReducedMotion: false
			})
		})
	});
}
function PackagesStack() {
	const containerRef = (0, import_react.useRef)(null);
	const prefersReducedMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: cn("relative w-full", !prefersReducedMotion && "pb-[20vh]"),
		children: PACKAGES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedPackageCard, {
			p,
			index: i,
			total: PACKAGES.length,
			progress: scrollYProgress,
			prefersReducedMotion: !!prefersReducedMotion
		}, p.name))
	});
}
function Packages() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "packages",
		className: "relative overflow-x-clip border-y border-border bg-[var(--ink)] py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: 30,
						opacity: 0
					},
					whileInView: {
						y: 0,
						opacity: 1
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					transition: {
						duration: .7,
						delay: .15
					},
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Digital Growth Packages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-4 w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold leading-tight max-w-3xl py-1",
							children: "Scalable solutions designed to accelerate your brand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground",
							children: "Built to grow your digital presence, engagement, and measurable results month over month."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 sm:mt-12 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesStack, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-6 mt-16 text-center text-xs text-muted-foreground",
				children: "Saudi Arabia pricing is available based on market delivery scope and requirements."
			})
		]
	});
}
function DataNodesCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		const setupCanvas = () => {
			if (!canvas || !canvas.parentElement) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const displayWidth = canvas.parentElement.clientWidth;
			const displayHeight = canvas.parentElement.clientHeight;
			canvas.width = displayWidth * dpr;
			canvas.height = displayHeight * dpr;
			canvas.style.width = `${displayWidth}px`;
			canvas.style.height = `${displayHeight}px`;
			ctx.scale(dpr, dpr);
			return {
				width: displayWidth,
				height: displayHeight
			};
		};
		let dimensions = setupCanvas() || {
			width: window.innerWidth,
			height: window.innerHeight
		};
		const handleResize = () => {
			const dims = setupCanvas();
			if (dims) dimensions = dims;
		};
		window.addEventListener("resize", handleResize);
		const NODE_COUNT = Math.min(Math.floor(dimensions.width * dimensions.height / 14e3), 55);
		const nodes = Array.from({ length: NODE_COUNT }, () => ({
			x: Math.random() * dimensions.width,
			y: Math.random() * dimensions.height,
			vx: (Math.random() - .5) * .45,
			vy: (Math.random() - .5) * .45,
			radius: Math.random() * 1.8 + 2.4,
			color: Math.random() > .35 ? "#F5D77F" : "#34d399"
		}));
		const maxDistance = 160;
		const draw = () => {
			ctx.save();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
			for (let i = 0; i < nodes.length; i++) {
				const node = nodes[i];
				node.x += node.vx;
				node.y += node.vy;
				if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
				if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;
				ctx.beginPath();
				ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
				ctx.fillStyle = node.color;
				ctx.fill();
				for (let j = i + 1; j < nodes.length; j++) {
					const other = nodes[j];
					const dx = other.x - node.x;
					const dy = other.y - node.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < maxDistance) {
						const alpha = (1 - dist / maxDistance) * .55;
						ctx.beginPath();
						ctx.moveTo(node.x, node.y);
						ctx.lineTo(other.x, other.y);
						ctx.strokeStyle = `rgba(245, 215, 127, ${alpha})`;
						ctx.lineWidth = 1.3;
						ctx.stroke();
					}
				}
			}
			animationFrameId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-65",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "h-full w-full block"
		})
	});
}
function Technology() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "technology",
		className: "relative overflow-hidden py-28 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataNodesCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Technology Solutions",
					title: "Business Systems Engineered for Scale.",
					sub: "Enterprise-grade architecture, intelligent automation, and custom software systems built to power your operations."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: TECH_SOLUTIONS.map((t, i) => {
						const Icon = SOLUTION_ICONS[i] ?? Cpu;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: Math.min(i * .04, .3),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "group flex h-full items-start gap-4.5 p-7 backdrop-blur-xl bg-[#061e19]/90 border border-[#14473d] transition-all duration-300 hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)]",
								intensity: 5,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-sm border border-[var(--gold)]/40 bg-[#0d2a23] p-2.5 shrink-0 transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-black",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-[var(--gold-bright)] group-hover:text-black transition-colors" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-white group-hover:text-[var(--gold-bright)] transition-colors",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-bright)]",
									children: t.price
								})] })]
							})
						}, t.name);
					})
				})]
			})
		]
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "relative overflow-hidden py-28 sm:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Impact",
					title: "Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border grid-cols-2 sm:grid-cols-4 lg:grid-cols-8",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * .05, .3),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-[var(--ink)] p-4 xl:p-6 text-center flex flex-col justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl xl:text-4xl text-[var(--gold-bright)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground",
								children: s.label
							})]
						})
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 w-full text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientLogos, {})
				})
			]
		})]
	});
}
function SectionHeadingMasked({ eyebrow, title, sub }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-10%"
	});
	const titleWords = title.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative z-10 flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-4 w-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold leading-tight max-w-3xl overflow-hidden py-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block overflow-hidden",
					children: titleWords.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "inline-block mr-2",
						initial: {
							y: "100%",
							opacity: 0
						},
						animate: inView ? {
							y: 0,
							opacity: 1
						} : {},
						transition: {
							duration: .85,
							delay: i * .05,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: word
					}, i))
				})
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground",
				children: sub
			})
		]
	});
}
function AnimatedCheckmark({ isActive, delay }) {
	const [resolved, setResolved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isActive) {
			const timer = setTimeout(() => setResolved(true), 350 + delay * 180);
			return () => clearTimeout(timer);
		} else setResolved(false);
	}, [isActive, delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative size-4 shrink-0 flex items-center justify-center",
		children: resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				scale: 0,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			transition: {
				type: "spring",
				stiffness: 350,
				damping: 20
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-[var(--gold-bright)]" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin text-[var(--teal-bright)] opacity-70" })
	});
}
function extractNumber(priceStr) {
	const match = priceStr.match(/\d+[\d,]*/);
	if (!match) return 0;
	return parseInt(match[0].replace(/,/g, ""), 10);
}
function extractSuffix(priceStr) {
	if (priceStr.includes("from PKR")) return " (from PKR)";
	if (priceStr.includes("/mo")) return " PKR/mo";
	return "";
}
function ProcessStepCard({ plan, index, progress, isActive }) {
	const enterStart = index === 0 ? 0 : index === 1 ? .35 : .7;
	const activeStart = index === 0 ? .05 : index === 1 ? .45 : .8;
	const activeEnd = index === 0 ? .35 : index === 1 ? .7 : 1;
	const exitEnd = index === 0 ? .45 : index === 1 ? .8 : 1;
	const opacity = useTransform(progress, [
		enterStart,
		activeStart,
		activeEnd,
		exitEnd
	], index === 2 ? [
		0,
		1,
		1,
		1
	] : [
		0,
		1,
		1,
		.35
	]);
	const y = useTransform(progress, [
		enterStart,
		activeStart,
		activeEnd,
		exitEnd
	], index === 2 ? [
		60,
		0,
		0,
		0
	] : [
		60,
		0,
		0,
		-40
	]);
	const scale = useTransform(progress, [
		enterStart,
		activeStart,
		activeEnd,
		exitEnd
	], index === 2 ? [
		.92,
		1,
		1,
		1
	] : [
		.92,
		1,
		1,
		.94
	]);
	const blur = useTransform(progress, [
		enterStart,
		activeStart,
		activeEnd,
		exitEnd
	], index === 2 ? [
		"blur(8px)",
		"blur(0px)",
		"blur(0px)",
		"blur(0px)"
	] : [
		"blur(8px)",
		"blur(0px)",
		"blur(0px)",
		"blur(6px)"
	]);
	const bgParallax = useTransform(progress, [0, 1], ["-8%", "8%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			opacity,
			y,
			scale,
			filter: blur,
			zIndex: index + 10
		},
		className: "absolute inset-0 w-full flex items-center justify-center pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("glass-panel relative w-full max-w-xl overflow-hidden rounded-sm p-8 sm:p-10 shadow-2xl backdrop-blur-xl transition-colors duration-500", plan.featured ? "border-[var(--gold)] bg-[color-mix(in_oklab,var(--teal-deep)_35%,#041c17)] shadow-[var(--shadow-glow-gold)]" : "border-[#14473d] bg-[#051c17]/95"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: bgParallax },
					className: "pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[color-mix(in_oklab,var(--gold)_14%,transparent)] blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.65rem] font-semibold tracking-widest text-[var(--gold-bright)] uppercase",
							children: ["Plan ", String(index + 1).padStart(2, "0")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[var(--gold-bright)] animate-pulse-dot" })]
					}), plan.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							scale: 0,
							opacity: 0
						},
						animate: isActive ? {
							scale: 1,
							opacity: 1
						} : {
							scale: .8,
							opacity: .7
						},
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 20
						},
						className: "rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]",
						children: "Most Popular"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-3xl font-semibold text-white",
					children: plan.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-5 w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-bold text-[var(--gold-bright)]",
					children: isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						value: extractNumber(plan.price),
						suffix: extractSuffix(plan.price)
					}) : plan.price
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-col gap-3.5",
					children: plan.features.map((f, fIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: isActive ? {
							opacity: 1,
							y: 0
						} : {
							opacity: .6,
							y: 0
						},
						transition: {
							duration: .35,
							delay: fIdx * .12
						},
						className: "flex items-center gap-3 text-sm text-foreground/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCheckmark, {
							isActive,
							delay: fIdx
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
						as: "a",
						href: "/contact",
						variant: "glass",
						className: "w-full",
						children: ["Enquire for ", plan.name]
					})
				})
			]
		})
	});
}
function SupportProcessFlow() {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 85,
		damping: 26,
		restDelta: .001
	});
	const activeStepTransform = useTransform(smoothProgress, [
		0,
		.4,
		.75,
		1
	], [
		0,
		1,
		2,
		2
	]);
	const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		return activeStepTransform.on("change", (v) => {
			setCurrentStep(Math.round(v));
		});
	}, [activeStepTransform]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "relative h-[300vh] w-full hidden md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeadingMasked, {
					eyebrow: "Managed Support",
					title: "Continuity Plans That Keep Systems Performing.",
					sub: "Proactive SLA monitoring, dedicated account management, and strategic optimization."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-12 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-4 flex flex-col gap-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-6 border-l border-border/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--gold-bright)] via-[var(--teal-bright)] to-[var(--gold)]",
								style: {
									scaleY: smoothProgress,
									transformOrigin: "top"
								}
							}), SUPPORT_PLANS.map((p, idx) => {
								const isActive = currentStep === idx;
								const isPassed = currentStep > idx;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("py-3 transition-all duration-300", isActive ? "opacity-100 translate-x-2" : "opacity-40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("flex size-7 items-center justify-center rounded-full border text-xs font-semibold font-display transition-all duration-300", isActive ? "border-[var(--gold)] bg-[var(--gold)] text-black" : isPassed ? "border-[var(--gold-bright)] text-[var(--gold-bright)]" : "border-border text-muted-foreground"),
											children: String(idx + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium text-foreground",
											children: p.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 pl-10 text-xs text-muted-foreground",
										children: p.price
									})]
								}, p.name);
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-8 relative h-[420px] w-full flex items-center justify-center",
						children: SUPPORT_PLANS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStepCard, {
							plan: p,
							index: i,
							progress: smoothProgress,
							isActive: currentStep === i
						}, p.name))
					})]
				})]
			})
		})
	});
}
function SupportMobile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "block md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeadingMasked, {
			eyebrow: "Managed Support",
			title: "Continuity Plans That Keep Systems Performing.",
			sub: "Proactive SLA monitoring, dedicated account management, and strategic optimization."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6",
			children: SUPPORT_PLANS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					className: cn("h-full p-8 backdrop-blur-xl bg-[#051c17]/95 border border-[#14473d]", p.featured && "border-[var(--gold)] shadow-[var(--shadow-glow-gold)]"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-display font-semibold text-white",
								children: p.name
							}), p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]",
								children: "Popular"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-5 w-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-bold text-[var(--gold-bright)]",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-3",
							children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								as: "a",
								href: "/contact",
								variant: "glass",
								className: "w-full",
								children: "Enquire"
							})
						})
					]
				})
			}, p.name))
		})]
	});
}
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-y border-border bg-[var(--ink)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportProcessFlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-28 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportMobile, {})
			})
		]
	});
}
function PakistanFlag({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 900 600",
		className,
		"aria-label": "Pakistan flag",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "225",
				height: "600",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "225",
				width: "675",
				height: "600",
				fill: "#01411C"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "483",
				cy: "300",
				r: "175",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "540",
				cy: "300",
				r: "140",
				fill: "#01411C"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				fill: "#fff",
				points: "600,185 619,241 677,241 629,276 647,332 600,297 553,332 571,276 523,241 581,241"
			})
		]
	});
}
function SaudiFlag({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 900 600",
		className,
		"aria-label": "Saudi Arabia flag",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "900",
				height: "600",
				fill: "#006C35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "450",
				y: "260",
				textAnchor: "middle",
				fill: "white",
				fontSize: "80",
				fontFamily: "serif",
				fontWeight: "bold",
				children: "لا إله إلا الله"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "450",
				y: "350",
				textAnchor: "middle",
				fill: "white",
				fontSize: "60",
				fontFamily: "serif",
				children: "محمد رسول الله"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "300",
				y: "390",
				width: "300",
				height: "14",
				rx: "7",
				fill: "white"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "600,397 640,397 600,392",
				fill: "white"
			})
		]
	});
}
function GlobalPresence() {
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 0.85", "end 0.15"]
	});
	const markets = [{
		country: "Pakistan",
		accentColor: "#01411C",
		glowColor: "rgba(1,65,28,0.35)",
		cities: [
			"Islamabad",
			"Lahore",
			"Karachi"
		],
		offices: [
			"Head Office — Wah Cantt",
			"Islamabad Office — Blue Area",
			"Chitral Office"
		],
		caption: "Serving businesses across Pakistan with local insight and dedicated support.",
		Flag: PakistanFlag,
		delay: 0
	}, {
		country: "Saudi Arabia",
		accentColor: "#006C35",
		glowColor: "rgba(0,108,53,0.35)",
		cities: [
			"Riyadh",
			"Jeddah",
			"Dammam"
		],
		offices: ["Riyadh — Regional Presence"],
		caption: "Empowering businesses across Saudi Arabia with proximity, presence and performance.",
		Flag: SaudiFlag,
		delay: .15
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative overflow-hidden py-24 sm:py-32 bg-[var(--ink)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				"aria-hidden": true,
				style: { background: "radial-gradient(ellipse 70% 50% at 50% 60%, color-mix(in oklab, var(--teal) 12%, transparent), transparent 75%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center mb-14 sm:mb-18",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[var(--gold-bright)] tracking-widest",
							children: "Global Presence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-4 w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight",
							children: [
								"Two Markets.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["One Growth System.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										className: "absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-transparent",
										initial: {
											scaleX: 0,
											originX: 0
										},
										whileInView: { scaleX: 1 },
										viewport: {
											once: true,
											margin: "-10%"
										},
										transition: {
											duration: 1.1,
											delay: .4,
											ease: [
												.16,
												1,
												.3,
												1
											]
										}
									})]
								})
							]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: markets.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: m.delay,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "group relative h-full overflow-hidden rounded-2xl border border-white/10 cursor-default",
							style: {
								background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
								backdropFilter: "blur(20px)"
							},
							whileHover: {
								y: -6,
								boxShadow: `0 0 48px ${m.glowColor}, 0 0 0 1px rgba(201,162,39,0.3)`,
								transition: {
									duration: .35,
									ease: "easeOut"
								}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -top-20 -left-16 size-72 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50",
									style: { background: m.glowColor },
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
									style: { boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.35)` },
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-15",
									style: {
										background: `repeating-linear-gradient(90deg, ${m.accentColor} 0 2px, transparent 2px 18px)`,
										maskImage: "linear-gradient(to top, black 0%, transparent 100%)"
									},
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 p-8 sm:p-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-2 mb-5",
														children: m.cities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-[var(--gold-bright)]",
															children: c
														}, c))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-display text-3xl sm:text-4xl font-semibold text-white leading-tight",
														children: m.country
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-4 w-16" })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												className: "shrink-0 relative",
												animate: { rotateY: [
													0,
													5,
													0,
													-3,
													0
												] },
												transition: {
													duration: 4,
													repeat: Infinity,
													ease: "easeInOut",
													delay: i * .8
												},
												style: { perspective: 400 },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute inset-0 rounded-md blur-xl opacity-60",
													style: { background: m.glowColor },
													"aria-hidden": true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.Flag, { className: "relative w-24 sm:w-28 h-auto rounded-md shadow-2xl border border-white/10" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "flex flex-col gap-2 mb-6",
											children: m.offices.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2 text-sm text-foreground/75 group-hover:text-foreground/90 transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-block size-1.5 rounded-full shrink-0",
													style: { background: `${m.accentColor}` }
												}), o]
											}, o))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground leading-relaxed border-t border-white/10 pt-5",
											children: m.caption
										})
									]
								})
							]
						})
					}, m.country))
				})]
			})
		]
	});
}
//#endregion
export { Technology as a, Support as i, Packages as n, Portfolio as r, GlobalPresence as t };
