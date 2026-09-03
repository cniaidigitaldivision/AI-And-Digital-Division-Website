import { i as __toESM } from "../_runtime.mjs";
import { i as PORTFOLIO_PROJECTS } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as ChevronLeft, E as ChevronRight, N as ArrowRight, P as ArrowLeft, b as ExternalLink } from "../_libs/lucide-react.mjs";
import { c as motion, l as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as cn, i as Footer, o as MagneticButton, s as Navbar } from "./Contact-CRZlHUy-.mjs";
import { t as getProjectImages } from "./project-images-CsHyAiSF.mjs";
import { r as Route } from "./router-a2RV35hi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio._slug-CjAKhT5P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectCarousel({ images }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(0);
	const next = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};
	const prev = () => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};
	const handleDragEnd = (e, { offset, velocity }) => {
		const swipe = Math.abs(offset.x) * velocity.x;
		if (swipe < -100) next();
		else if (swipe > 100) prev();
	};
	if (!images || images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 group mb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "aspect-video relative overflow-hidden bg-black/20 flex items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				custom: direction,
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: images[currentIndex],
					custom: direction,
					initial: {
						opacity: 0,
						x: direction > 0 ? 50 : -50
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: direction > 0 ? -50 : 50
					},
					transition: {
						duration: .3,
						ease: "easeInOut"
					},
					drag: images.length > 1 ? "x" : false,
					dragConstraints: {
						left: 0,
						right: 0
					},
					dragElastic: 1,
					onDragEnd: handleDragEnd,
					className: "w-full h-full object-contain cursor-grab active:cursor-grabbing absolute inset-0",
					alt: `Project slide ${currentIndex + 1}`
				}, currentIndex)
			}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: prev,
					"aria-label": "Previous image",
					className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 hover:bg-[var(--gold)] hover:text-black hover:border-transparent transition-all z-10 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: next,
					"aria-label": "Next image",
					className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 hover:bg-[var(--gold)] hover:text-black hover:border-transparent transition-all z-10 md:opacity-0 md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 px-3 py-2 rounded-full backdrop-blur-md",
					children: images.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setDirection(idx > currentIndex ? 1 : -1);
							setCurrentIndex(idx);
						},
						className: cn("w-1.5 h-1.5 rounded-full transition-all duration-300", idx === currentIndex ? "w-4 bg-[var(--gold-bright)]" : "bg-white/50 hover:bg-white"),
						"aria-label": `Go to slide ${idx + 1}`
					}, idx))
				})
			] })]
		})
	});
}
function ProjectDetailPage() {
	const { slug } = Route.useParams();
	const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background flex flex-col font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col items-center justify-center pt-32 pb-20 w-full px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-white font-semibold mb-4",
					children: "Project Not Found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portfolio",
					className: "text-[var(--gold)] hover:underline",
					children: "Return to Portfolio"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background flex flex-col font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col pt-32 pb-20 w-full px-6 max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--gold)] transition-colors mb-12 w-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), "Back to Portfolio"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-4 mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 text-xs font-semibold bg-[var(--gold)]/10 text-[var(--gold)] rounded-full border border-[var(--gold)]/20",
									children: project.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-muted-foreground leading-relaxed",
								children: project.desc
							})
						]
					}),
					(() => {
						const dynamicImages = getProjectImages(project.folderName);
						if (dynamicImages.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, { images: dynamicImages });
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-12 mb-16",
							children: project.images.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .2 + idx * .1 },
								className: "relative group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-block px-4 py-1.5 rounded-md bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-xs font-semibold uppercase tracking-widest shadow-[0_0_10px_rgba(217,169,98,0.1)]",
										children: [img.device, " View"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.url,
										alt: `${project.title} ${img.device} Preview`,
										className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
									})
								})]
							}, idx))
						});
					})(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-3 gap-12 mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2 space-y-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-2xl text-white font-medium mb-4 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm",
										children: "01"
									}), "The Challenge"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap",
									children: project.challenge
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-2xl text-white font-medium mb-4 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm",
										children: "02"
									}), "Our Solution"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap",
									children: project.solution
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-2xl text-white font-medium mb-4 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm",
										children: "03"
									}), "The Result"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap",
									children: project.result
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/5 border border-white/10 rounded-2xl p-6 h-fit sticky top-32",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-white font-medium mb-6 border-b border-white/10 pb-4",
								children: "Project Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mb-1 uppercase tracking-widest",
										children: "Client"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white text-lg font-medium",
										children: project.client
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mb-1 uppercase tracking-widest",
										children: "Services"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white text-lg font-medium",
										children: project.category
									})] }),
									project.liveLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-4 border-t border-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: project.liveLink,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)]",
											children: ["Visit Live Site", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
										})
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "text-center border-t border-white/10 pt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl font-semibold text-white mb-6",
								children: "Ready to start your project?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground mb-10 max-w-2xl mx-auto",
								children: "Contact us today to discuss how we can bring your vision to life and deliver measurable results."
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
export { ProjectDetailPage as component };
