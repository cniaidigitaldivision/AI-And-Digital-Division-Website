import { i as __toESM } from "../_runtime.mjs";
import { r as PACKAGES } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as ChevronLeft, N as ArrowRight, O as ChevronDown, T as ChevronUp, k as Check } from "../_libs/lucide-react.mjs";
import { c as motion, l as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GoldRule, i as Footer, s as Navbar } from "./Contact-CRZlHUy-.mjs";
import { i as Route } from "./router-a2RV35hi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._slug-DKIQDG5h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
var fadeUp = (delay = 0) => ({
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
		],
		delay
	}
});
function FaqItem({ question, answer }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-white/10 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-medium text-foreground hover:text-[var(--gold-bright)] transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4 shrink-0 text-[var(--gold-bright)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted-foreground" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			})
		})]
	});
}
function PackageDetailPage({ pkg }) {
	const currentIndex = PACKAGES.findIndex((p) => p.name === pkg.name);
	const nextPackage = currentIndex >= 0 && currentIndex < PACKAGES.length - 1 ? PACKAGES[currentIndex + 1] : null;
	currentIndex > 0 && PACKAGES[currentIndex - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-36 pb-20 px-6 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-[var(--gold)]/8 rounded-full blur-[140px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/8 rounded-full blur-[160px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-5xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "eyebrow block mb-4",
							children: pkg.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .1
							},
							className: "font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-semibold leading-none tracking-tight",
							children: pkg.name
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
							transition: {
								duration: .7,
								delay: .2
							},
							className: "mt-6 flex items-baseline justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)]",
								children: pkg.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg text-muted-foreground font-sans",
								children: pkg.cadence
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .3
							},
							className: "mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed",
							children: pkg.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .4
							},
							className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/?package=${slugify(pkg.name)}#contact`,
								className: "px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors w-full sm:w-auto text-center shadow-[var(--shadow-glow-gold)]",
								children: ["Get Started with ", pkg.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/packages",
								className: "inline-flex items-center gap-2 px-6 py-4 rounded-md text-sm text-white border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "All Packages"]
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-5xl mx-auto px-6 pb-28 space-y-20",
			children: [
				pkg.intro && pkg.intro.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(0),
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "w-16" }), pkg.intro.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: i === 0 ? "text-base md:text-lg text-foreground/90 leading-[1.85] font-light" : "text-base text-muted-foreground leading-[1.85]",
						children: para
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(.05),
					className: "rounded-[28px] border border-[#C9A227]/40 bg-[#061e19] p-8 md:p-12 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)] relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--teal-bright)]/10 via-transparent to-transparent opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold text-white mb-8",
							children: "What's Included"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-8",
							children: pkg.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								...fadeUp(idx * .05),
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-full bg-[var(--gold)]/20 p-2 shrink-0 mt-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-[var(--gold-bright)]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-semibold text-white",
									children: feature.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
									children: feature.description
								})] })]
							}, idx))
						})]
					})]
				}),
				pkg.howItWorks && pkg.howItWorks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(.05),
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold text-white mb-1",
							children: "How It Works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mx-auto mt-5 w-16" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
						children: pkg.howItWorks.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fadeUp(idx * .08),
							className: "rounded-[20px] border border-white/8 bg-white/[0.025] p-7 backdrop-blur-sm relative overflow-hidden group hover:border-[var(--gold)]/30 transition-colors duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl font-bold text-white/5 absolute -top-2 -left-1 select-none",
								children: String(idx + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-7 h-7 rounded-full bg-[var(--teal-deep)] border border-[var(--gold)]/40 flex items-center justify-center text-xs font-semibold text-[var(--gold-bright)] shrink-0",
										children: idx + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-semibold text-white group-hover:text-[var(--gold-bright)] transition-colors",
										children: step.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: step.body
								})]
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
						...fadeUp(.05),
						className: "rounded-[24px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold text-white mb-6",
							children: "Who This Is For"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: pkg.idealClientProfile.map((profile, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)] mt-2 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-relaxed",
									children: profile
								})]
							}, idx))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
						...fadeUp(.08),
						className: "rounded-[24px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold text-white mb-6",
							children: "What You Can Expect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: pkg.outcomes.map((outcome, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-relaxed",
									children: outcome
								})]
							}, idx))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(.05),
					className: "rounded-[28px] border border-[var(--gold)]/50 bg-gradient-to-br from-[#061e19] to-[#04150f] p-8 md:p-12 shadow-[0_0_60px_rgba(201,162,39,0.12)] relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[var(--gold)]/8 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow block mb-3",
								children: "Investment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-5xl md:text-6xl font-semibold text-[var(--gold-bright)]",
									children: pkg.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl text-muted-foreground font-sans",
									children: pkg.cadence
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground max-w-sm",
								children: pkg.name === "Enterprise" ? "Starting price — final retainer scoped after discovery based on your specific requirements." : "Monthly retainer. No hidden setup fees. Cancel or upgrade anytime."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/contact",
								className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-base",
								children: ["Enquire Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), nextPackage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: `/packages/${slugify(nextPackage.name)}`,
								className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/15 text-sm text-muted-foreground hover:text-white hover:border-white/30 transition-colors",
								children: [
									"Compare: ",
									nextPackage.name,
									" (",
									nextPackage.price,
									nextPackage.cadence,
									")",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
								]
							})]
						})]
					})]
				}),
				pkg.faqs && pkg.faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(.05),
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold text-white mb-2",
							children: "Frequently Asked Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "w-16 mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[24px] border border-white/10 bg-white/[0.02] px-8 py-2",
							children: pkg.faqs.map((faq, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
								question: faq.question,
								answer: faq.answer
							}, idx))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
					...fadeUp(.05),
					className: "flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-transparent via-[var(--teal-deep)]/20 to-transparent border-y border-[var(--teal-deep)]/40 text-center gap-6",
					children: nextPackage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)]",
						children: "Looking for more?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white font-medium",
								children: nextPackage.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground text-sm",
								children: [nextPackage.price, nextPackage.cadence]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: `/packages/${slugify(nextPackage.name)}`,
								className: "text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1",
								children: [
									"View ",
									nextPackage.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })
								]
							})
						]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)]",
							children: "Need something custom?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm max-w-md",
							children: "We can build a tailored ecosystem for your specific enterprise needs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: "text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4",
							children: "Contact Our Enterprise Team"
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					...fadeUp(.05),
					className: "text-center pt-4 pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold text-white mb-3",
							children: "Ready to accelerate your growth?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mb-8 max-w-lg mx-auto text-sm",
							children: [
								"Start with ",
								pkg.name,
								" today and build the digital presence your business deserves."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/?package=${slugify(pkg.name)}#contact`,
							className: "inline-flex items-center justify-center gap-2 px-10 py-5 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-lg",
							children: [
								"Get Started with ",
								pkg.name,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-muted-foreground",
							children: [
								"Have questions?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/contact",
									className: "text-[var(--gold-bright)] hover:underline",
									children: "Let's talk"
								}),
								"."
							]
						})
					]
				})
			]
		})]
	});
}
function PackageRoutePage() {
	const { pkg } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 flex flex-col pt-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageDetailPage, { pkg })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PackageRoutePage as component };
