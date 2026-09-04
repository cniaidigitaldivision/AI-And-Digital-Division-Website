import { i as __toESM } from "../_runtime.mjs";
import { r as PACKAGES } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { M as ArrowUpRight, k as Check } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, i as useSpring, s as useScroll } from "../_libs/framer-motion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GoldRule, c as Reveal, i as Footer, s as Navbar } from "./Contact-CRZlHUy-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages.index-BwYTVB9G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
function extractNumber(price) {
	const m = price.match(/[\d,]+/);
	return m ? m[0] : price;
}
function PackageCard({ pkg, index }) {
	const slug = slugify(pkg.name);
	const isFeatured = pkg.name === "Performance" || pkg.name === "Scale" || pkg.name === "Growth";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .08,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: `/packages/${slug}`,
			className: [
				"group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500",
				"bg-[var(--ink)] hover:-translate-y-2",
				"hover:shadow-[var(--shadow-glow-gold)]",
				isFeatured ? "border-[var(--gold)]/40 hover:border-[var(--gold)]" : "border-border hover:border-[var(--gold)]"
			].join(" "),
			children: [
				isFeatured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 right-4 z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-widest bg-[var(--gold)]/15 text-[var(--gold-bright)] border border-[var(--gold)]/30",
						children: "Popular"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: ["h-[2px] w-full", isFeatured ? "bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)]" : "bg-gradient-to-r from-[var(--teal)]/40 via-[var(--teal-bright)]/60 to-[var(--teal)]/40"].join(" ") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col flex-1 p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)] mb-3",
							children: pkg.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-semibold text-foreground mb-2 group-hover:text-[var(--gold)] transition-colors leading-tight",
							children: pkg.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1.5 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-[var(--gold-bright)]",
								children: extractNumber(pkg.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground font-sans",
								children: ["PKR", pkg.cadence]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "w-10 mb-5" }),
						pkg.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2",
							children: pkg.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5 flex-1 mb-7",
							children: [pkg.features.slice(0, 4).map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-[var(--teal-bright)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-snug",
									children: feature.title
								})]
							}, i)), pkg.features.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-xs text-[var(--gold-bright)]/70 pl-6",
								children: [
									"+",
									pkg.features.length - 4,
									" more included"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center justify-between text-sm font-semibold text-[var(--gold)] group-hover:text-[var(--cream)] transition-colors pt-4 border-t border-border/50",
							children: ["View Package", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })]
						})
					]
				})
			]
		})
	});
}
function PackagesIndexPage() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress: heroProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const yBg = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
	const opacityHero = useTransform(heroProgress, [0, 1], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background flex flex-col font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed top-0 left-0 right-0 h-1 bg-[var(--gold)] origin-left z-[60] shadow-[0_0_10px_var(--gold)]",
				style: { scaleX }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: heroRef,
						className: "relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								y: yBg,
								opacity: opacityHero
							},
							className: "absolute inset-0 pointer-events-none overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--gold)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse",
								style: { animationDuration: "8s" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse",
								style: { animationDuration: "12s" }
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-5xl mx-auto w-full text-center relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { duration: .6 },
									className: "text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-semibold mb-5",
									children: "Digital Growth Packages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: 1,
										ease: "easeOut"
									},
									className: "relative inline-block mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient font-display font-medium",
										children: "Our Packages"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: 1,
										delay: .3
									},
									className: "text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mt-6",
									children: "Scalable solutions designed to accelerate your brand — from a first digital presence to a full AI-powered growth system."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: {
										duration: 1,
										delay: .5
									},
									className: "mt-4 text-xs text-muted-foreground/60",
									children: "Saudi Arabia pricing available on request based on market delivery scope."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-7xl mx-auto px-6 py-20 sm:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
							children: PACKAGES.map((pkg, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
								pkg,
								index
							}, pkg.name))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "w-full max-w-4xl mx-auto px-6 pb-28 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { duration: .7 },
							className: "rounded-2xl border border-[var(--gold)]/20 bg-gradient-to-br from-[var(--teal-deep)]/20 to-transparent p-10 md:p-14",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] uppercase tracking-[0.2em] text-[var(--gold-bright)] font-semibold mb-4",
									children: "Not sure which package fits?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-white mb-4",
									children: "Let's find the right fit together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed",
									children: "Every business is different. Our team will help you scope a plan that matches your goals, budget, and timeline — no upselling, just the right solution."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/contact",
									className: "inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-base",
									children: ["Get a Free Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4" })]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PackagesIndexPage as component };
