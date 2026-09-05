import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as ChevronLeft, E as ChevronRight, M as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, i as useSpring, l as AnimatePresence, s as useScroll } from "../_libs/framer-motion+[...].mjs";
import { i as Footer, s as Navbar } from "./Contact-CwUWyaTP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-B1waHKa_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GALLERY_ITEMS = [
	{
		id: 1,
		type: "photo",
		src: "/assets/gallery1-B_st8Dqh.png",
		title: "Head Office Team",
		category: "Team"
	},
	{
		id: 2,
		type: "photo",
		src: "/assets/gallery2-D2NEUfkl.png",
		title: "Islamabad Team",
		category: "Team"
	},
	{
		id: 3,
		type: "photo",
		src: "/assets/gallery3-BNioW5JW.png",
		title: "Brainstorming Session",
		category: "Office"
	},
	{
		id: 4,
		type: "photo",
		src: "/assets/gallery4-Bj9WlMpV.png",
		title: "Employees Workstation",
		category: "Office"
	},
	{
		id: 5,
		type: "photo",
		src: "/assets/gallery5-D5O_3Ej_.png",
		title: "Team Meeting",
		category: "Office"
	},
	{
		id: 6,
		type: "photo",
		src: "/assets/gallery6-e6sseu5o.png",
		title: "Office Lounge Area",
		category: "Office"
	},
	{
		id: 7,
		type: "photo",
		src: "/assets/gallery7-CDB2pgjH.png",
		title: "Greetings",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 8,
		type: "photo",
		src: "/assets/gallery8-B5AR23gw.png",
		title: "Chair Person",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 9,
		type: "photo",
		src: "/assets/gallery9-DON7BEcm.png",
		title: "Closing Ceremony",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 10,
		type: "photo",
		src: "/assets/gallery10-w7UNbKNd.png",
		title: "Glimpses",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 11,
		type: "photo",
		src: "/assets/gallery11-B6WLe-t_.png",
		title: "Welcoming Guests",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 13,
		type: "photo",
		src: "/assets/gallery13-DmnI295e.png",
		title: "Group Photo",
		category: "Events",
		event: "Jashn e Subh e Noor"
	},
	{
		id: 14,
		type: "photo",
		src: "/assets/gallery14-CjPXf85o.png",
		title: "Our Team",
		category: "Events",
		event: "Independence Day"
	},
	{
		id: 15,
		type: "video",
		src: "/assets/gallery15-C83_rVZ7.mp4",
		title: "Cake Cutting Ceremony",
		category: "Events",
		event: "Independence Day"
	},
	{
		id: 16,
		type: "video",
		src: "/assets/gallery16-DaDdrX2t.mp4",
		title: "Islamabad Team",
		category: "Events",
		event: "Independence Day"
	},
	{
		id: 17,
		type: "video",
		src: "/assets/gallery17-Dm_PEeYt.mp4",
		title: "Decor",
		category: "Events",
		event: "Independence Day"
	}
];
var EVENT_NAMES = [...new Set(GALLERY_ITEMS.filter((i) => i.category === "Events" && i.event).map((i) => i.event))];
function Lightbox({ items, startIndex, onClose }) {
	const [current, setCurrent] = (0, import_react.useState)(startIndex);
	const item = items[current];
	const prev = (0, import_react.useCallback)(() => setCurrent((c) => c > 0 ? c - 1 : items.length - 1), [items.length]);
	const next = (0, import_react.useCallback)(() => setCurrent((c) => c < items.length - 1 ? c + 1 : 0), [items.length]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		onClose,
		prev,
		next
	]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative max-w-5xl w-full flex flex-col items-center",
				initial: {
					scale: .92,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .92,
					opacity: 0
				},
				transition: {
					type: "spring",
					stiffness: 220,
					damping: 24
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute -top-12 right-0 text-white/60 hover:text-white transition-colors",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-7 h-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full rounded-2xl overflow-hidden border border-white/10 bg-black",
						children: item.type === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.title,
							className: "w-full max-h-[75vh] object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: item.src,
							controls: true,
							autoPlay: true,
							className: "w-full max-h-[75vh] object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white font-medium text-sm",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[var(--gold-bright)] text-xs mt-1 uppercase tracking-widest",
								children: item.event ?? item.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-white/30 text-xs mt-1",
								children: [
									current + 1,
									" / ",
									items.length
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					prev();
				},
				className: "fixed left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded-full p-3 transition-all",
				"aria-label": "Previous",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-6 h-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					next();
				},
				className: "fixed right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 text-white/60 hover:text-white rounded-full p-3 transition-all",
				"aria-label": "Next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-6 h-6" })
			})
		]
	});
}
function Carousel({ items, onOpenLightbox }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const total = items.length;
	const videoRef = (0, import_react.useRef)(null);
	const [videoThumbs, setVideoThumbs] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		items.forEach((item) => {
			if (item.type !== "video" || item.thumb || videoThumbs[item.id]) return;
			const vid = document.createElement("video");
			vid.src = item.src;
			vid.crossOrigin = "anonymous";
			vid.muted = true;
			vid.playsInline = true;
			vid.preload = "auto";
			const capture = () => {
				try {
					const canvas = document.createElement("canvas");
					canvas.width = vid.videoWidth;
					canvas.height = vid.videoHeight;
					const ctx = canvas.getContext("2d");
					if (ctx && canvas.width && canvas.height) {
						ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
						const dataUrl = canvas.toDataURL("image/jpeg", .85);
						setVideoThumbs((prev) => ({
							...prev,
							[item.id]: dataUrl
						}));
					}
				} catch {}
			};
			vid.addEventListener("loadedmetadata", () => {
				vid.currentTime = Math.min(.5, (vid.duration || 1) / 2);
			});
			vid.addEventListener("seeked", capture, { once: true });
		});
	}, [items]);
	const prev = (0, import_react.useCallback)(() => setActive((a) => a > 0 ? a - 1 : total - 1), [total]);
	const next = (0, import_react.useCallback)(() => setActive((a) => a < total - 1 ? a + 1 : 0), [total]);
	(0, import_react.useEffect)(() => {
		setActive(0);
	}, [items]);
	(0, import_react.useEffect)(() => {
		if (total < 2) return;
		const t = setInterval(next, 3e3);
		return () => clearInterval(t);
	}, [next, total]);
	const leftIdx = (active - 1 + total) % total;
	const centerIdx = active;
	const rightIdx = (active + 1) % total;
	const isCenterVideo = items[centerIdx].type === "video";
	(0, import_react.useEffect)(() => {
		const vid = videoRef.current;
		if (!vid || !isCenterVideo) return;
		vid.currentTime = 0;
		vid.play().catch(() => {});
	}, [centerIdx, isCenterVideo]);
	const getThumb = (item) => {
		if (item.type !== "video") return item.src;
		return item.thumb ?? videoThumbs[item.id] ?? item.src;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full select-none overflow-hidden py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center",
				style: {
					perspective: "1400px",
					height: "420px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute cursor-pointer overflow-hidden rounded-2xl",
						style: {
							width: "340px",
							height: "380px",
							left: "calc(50% - 460px)",
							transformOrigin: "right center"
						},
						initial: {
							opacity: 0,
							rotateY: 55,
							x: -60
						},
						animate: {
							opacity: .55,
							rotateY: 48,
							x: 0,
							scale: .87
						},
						transition: {
							duration: .6,
							ease: [
								.25,
								.1,
								.25,
								1
							]
						},
						onClick: prev,
						whileHover: {
							opacity: .75,
							scale: .9
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: getThumb(items[leftIdx]),
								alt: items[leftIdx].title,
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[var(--ink)]/55" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5 text-white" })
								})
							})
						]
					}, `left-${leftIdx}`),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute cursor-pointer overflow-hidden rounded-2xl z-10 border border-[var(--gold)]/40",
						style: {
							width: "400px",
							height: "400px",
							left: "calc(50% - 200px)",
							boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.15)"
						},
						initial: {
							opacity: 0,
							scale: .88
						},
						animate: {
							opacity: 1,
							scale: 1,
							rotateY: 0
						},
						transition: {
							duration: .6,
							ease: [
								.25,
								.1,
								.25,
								1
							]
						},
						onClick: () => onOpenLightbox(centerIdx),
						whileHover: { scale: 1.03 },
						children: [
							isCenterVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: videoRef,
								src: items[centerIdx].src,
								className: "w-full h-full object-cover",
								muted: true,
								playsInline: true,
								loop: true,
								autoPlay: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: getThumb(items[centerIdx]),
								alt: items[centerIdx].title,
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-6 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--gold-bright)] mb-1",
										children: items[centerIdx].event ?? items[centerIdx].category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-white font-display text-2xl font-semibold leading-tight",
										children: items[centerIdx].title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/40 text-xs mt-2",
										children: "Click to view fullscreen"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-2xl ring-0 hover:ring-2 hover:ring-[var(--gold)]/40 transition-all duration-300 pointer-events-none" })
						]
					}, `center-${centerIdx}`),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute cursor-pointer overflow-hidden rounded-2xl",
						style: {
							width: "340px",
							height: "380px",
							left: "calc(50% + 120px)",
							transformOrigin: "left center"
						},
						initial: {
							opacity: 0,
							rotateY: -55,
							x: 60
						},
						animate: {
							opacity: .55,
							rotateY: -48,
							x: 0,
							scale: .87
						},
						transition: {
							duration: .6,
							ease: [
								.25,
								.1,
								.25,
								1
							]
						},
						onClick: next,
						whileHover: {
							opacity: .75,
							scale: .9
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: getThumb(items[rightIdx]),
								alt: items[rightIdx].title,
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[var(--ink)]/55" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-white" })
								})
							})
						]
					}, `right-${rightIdx}`)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center gap-2 mt-6",
				children: items.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(i),
					"aria-label": `Go to slide ${i + 1}`,
					className: ["rounded-full transition-all duration-300", i === active ? "w-6 h-1.5 bg-[var(--gold)]" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"].join(" ")
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 mx-auto w-[400px] max-w-full h-[2px] bg-white/5 overflow-hidden rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-[var(--gold)]/60",
					initial: { width: "0%" },
					animate: { width: "100%" },
					transition: {
						duration: 3,
						ease: "linear"
					}
				}, active)
			})
		]
	});
}
function CategorySection({ category, items, onOpenLightbox, eyebrow = "Category" }) {
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4 mb-8 px-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.6rem] uppercase tracking-[0.2em] text-[var(--gold-bright)] font-semibold mb-1",
					children: eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl font-semibold text-white",
					children: category
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent ml-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1",
					children: [
						items.length,
						" ",
						items.length === 1 ? "item" : "items"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
			items,
			onOpenLightbox
		})]
	});
}
function GalleryPage() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [activeEvent, setActiveEvent] = (0, import_react.useState)(null);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
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
	const filtered = activeCategory === "All" ? GALLERY_ITEMS : activeCategory === "Events" ? activeEvent ? GALLERY_ITEMS.filter((i) => i.category === "Events" && i.event === activeEvent) : GALLERY_ITEMS.filter((i) => i.category === "Events") : GALLERY_ITEMS.filter((i) => i.category === activeCategory);
	const groups = [
		{
			category: "Team",
			items: GALLERY_ITEMS.filter((i) => i.category === "Team"),
			isEvent: false
		},
		{
			category: "Office",
			items: GALLERY_ITEMS.filter((i) => i.category === "Office"),
			isEvent: false
		},
		...EVENT_NAMES.map((ev) => ({
			category: ev,
			items: GALLERY_ITEMS.filter((i) => i.event === ev),
			isEvent: true
		}))
	];
	const openLightbox = (index, categoryItems) => {
		const item = categoryItems[index];
		const globalIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
		setLightboxIndex(globalIndex);
	};
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
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 overflow-hidden",
									style: { perspective: "500px" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										"aria-hidden": true,
										className: "absolute left-1/2 bottom-[-10%] w-[220%] h-[70%] -translate-x-1/2",
										style: {
											transform: "rotateX(78deg)",
											backgroundImage: "linear-gradient(to right, color-mix(in_oklab, var(--gold) 35%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in_oklab, var(--gold) 35%, transparent) 1px, transparent 1px)",
											backgroundSize: "64px 64px",
											maskImage: "linear-gradient(to top, black 0%, transparent 75%)",
											WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 75%)"
										},
										animate: { backgroundPositionY: ["0px", "64px"] },
										transition: {
											duration: 2.5,
											repeat: Infinity,
											ease: "linear"
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 bottom-[22%] w-[60vw] h-[2px] -translate-x-1/2 bg-[var(--gold)]/40 blur-[6px]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--gold)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse",
									style: { animationDuration: "8s" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse",
									style: { animationDuration: "12s" }
								})
							]
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
									children: "Behind The Work"
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
										children: "Gallery"
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
									children: "Every brand starts with the people behind it. A glimpse of our team, office, events and culture — before they ever reach your screen."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-7xl mx-auto px-6 pb-12",
						children: activeCategory === "All" ? groups.map(({ category, items, isEvent }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySection, {
							category,
							items,
							onOpenLightbox: (i) => openLightbox(i, items),
							eyebrow: isEvent ? "Events" : "Category"
						}, category)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySection, {
							category: activeCategory === "Events" && activeEvent ? activeEvent : activeCategory,
							items: filtered,
							onOpenLightbox: (i) => openLightbox(i, filtered),
							eyebrow: activeCategory === "Events" ? "Events" : "Category"
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
									children: "Like what you see?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-white mb-4",
									children: "Let's build your next project together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed",
									children: "The same team in these photos handles every brand, website and automation system we deliver."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				items: GALLERY_ITEMS,
				startIndex: lightboxIndex,
				onClose: () => setLightboxIndex(null)
			}) })
		]
	});
}
//#endregion
export { GalleryPage as component };
