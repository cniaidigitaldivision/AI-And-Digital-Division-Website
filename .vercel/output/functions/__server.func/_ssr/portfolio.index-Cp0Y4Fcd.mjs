import { i as PORTFOLIO_PROJECTS, o as STATS } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as motion, l as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Footer, o as MagneticButton, s as Navbar } from "./Contact-CRZlHUy-.mjs";
import { t as getProjectImages } from "./project-images-CsHyAiSF.mjs";
import { t as ClientLogos } from "./ClientLogos-COpNfHfK.mjs";
import { t as Testimonials } from "./Testimonials-BSBWghDF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio.index-Cp0Y4Fcd.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background flex flex-col font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col pt-32 pb-20 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "text-center px-6 max-w-4xl mx-auto mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "font-display text-5xl md:text-6xl text-[var(--gold-bright)] font-semibold mb-6",
							children: "Our Work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							className: "text-xl md:text-2xl text-white font-display mb-8",
							children: "Delivering excellence in social media, web design, branding, and AI automation."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 max-w-7xl mx-auto w-full mb-24 flex flex-col gap-16 md:gap-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "popLayout",
							children: PORTFOLIO_PROJECTS.map((project, index) => {
								const isEven = index % 2 !== 0;
								const dynamicImages = getProjectImages(project.folderName);
								let coverImage = project.thumbnail;
								if (dynamicImages.length > 0) coverImage = dynamicImages.find((img) => img.includes("home-page.png")) || dynamicImages[0];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									layout: true,
									initial: {
										opacity: 0,
										y: 40
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: {
										once: true,
										margin: "-100px"
									},
									transition: {
										duration: .6,
										ease: "easeOut"
									},
									className: `flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${isEven ? "md:flex-row-reverse" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full md:w-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: `/portfolio/$slug`,
											params: { slug: project.slug },
											className: "block overflow-hidden rounded-2xl border border-white/10 group relative shadow-[0_0_30px_rgba(0,0,0,0.5)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[4/3] w-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: coverImage,
													alt: project.title,
													className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
												})
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full md:w-1/2 space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-sm uppercase tracking-widest text-[var(--gold-bright)] mb-3 font-semibold flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-px bg-[var(--gold)]/50" }), project.category]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4",
												children: project.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-base md:text-lg leading-relaxed mb-8",
												children: project.desc
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/portfolio/$slug",
											params: { slug: project.slug },
											className: "inline-block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
												as: "button",
												variant: "gold",
												className: "px-8 py-3.5 text-sm group rounded-full text-[var(--ink)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2 font-medium",
													children: ["See More Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
												})
											})
										})]
									})]
								}, project.slug);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 max-w-7xl mx-auto w-full mb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px overflow-hidden rounded-sm border border-border bg-border grid-cols-2 sm:grid-cols-4 lg:grid-cols-8",
							children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: i * .05 },
								className: "h-full bg-[var(--ink)] p-4 xl:p-6 text-center flex flex-col justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-3xl xl:text-4xl font-display font-bold text-[var(--gold-bright)]",
									children: [stat.value, stat.suffix]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground",
									children: stat.label
								})]
							}, stat.label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-24 -mx-6 md:-mx-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "px-6 max-w-7xl mx-auto w-full mb-24 text-center overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-widest text-[var(--gold-bright)] font-semibold mb-12",
							children: "Trusted by Ambitious Brands"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientLogos, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "px-6 max-w-4xl mx-auto text-center border-t border-white/10 pt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-semibold text-white mb-6",
								children: "Want results like these?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground mb-10",
								children: "Let's discuss how our tailored digital strategies can accelerate your business growth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								as: "a",
								href: "/contact",
								className: "px-10 py-5 text-lg group inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: ["Get a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PortfolioPage as component };
