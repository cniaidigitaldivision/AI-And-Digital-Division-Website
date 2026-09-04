import { i as __toESM } from "../_runtime.mjs";
import { a as SERVICES, l as logo_default, n as NAV_LINKS, r as PACKAGES, t as BUDGET_OPTIONS } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { C as CircleCheck, O as ChevronDown, _ as Instagram, d as Menu, f as MapPin, h as Linkedin, k as Check, m as LoaderCircle, p as Mail, t as X, u as MessageCircle, v as Globe, w as CircleAlert, y as Facebook } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, i as useSpring, n as animate, o as useMotionValue, s as useScroll, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as getServerFnById, i as createServerFn, r as TSS_SERVER_FUNCTION } from "./server-9Mm31LfW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-CRZlHUy-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useReducedMotionPref() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const on = () => setReduced(mq.matches);
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return reduced;
}
function Reveal({ children, delay = 0, y = 28, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
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
			duration: .75,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function GoldRule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("gold-rule w-40", className),
		"aria-hidden": true
	});
}
function SectionHeading({ eyebrow, title, sub, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-3xl text-balance text-3xl leading-[1.15] sm:text-4xl md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: align === "center" ? "" : "w-28" }),
			sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-sm text-muted-foreground sm:text-base",
				children: sub
			}) : null
		]
	});
}
function MagneticButton({ children, variant = "gold", className, as = "button", href, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(useMotionValue(0), {
		stiffness: 240,
		damping: 18
	});
	const y = useSpring(useMotionValue(0), {
		stiffness: 240,
		damping: 18
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * .25);
		y.set((e.clientY - (r.top + r.height / 2)) * .35);
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};
	const classes = cn("relative inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors", variant === "gold" ? "bg-primary text-primary-foreground hover:bg-[var(--gold-bright)]" : "glass-panel text-foreground hover:text-[var(--gold-bright)]", className);
	const Comp = as === "a" ? motion.a : motion.button;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		ref,
		href,
		style: {
			x,
			y
		},
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: classes,
		...rest,
		children
	});
}
function TiltCard({ children, className, intensity = 8 }) {
	const ref = (0, import_react.useRef)(null);
	const rx = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 20
	});
	const ry = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 20
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		ry.set(px * intensity * 2);
		rx.set(-py * intensity * 2);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: () => {
			rx.set(0);
			ry.set(0);
		},
		style: {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 900
		},
		whileHover: { translateY: -8 },
		className: cn("glass-panel rounded-sm", className),
		children
	});
}
function CountUp({ value, suffix = "", duration = 1.8 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(0, value, {
			duration,
			ease: [
				.16,
				1,
				.3,
				1
			],
			onUpdate: (v) => setDisplay(Math.round(v))
		});
		return () => controls.stop();
	}, [
		inView,
		value,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [display, suffix]
	});
}
function CircuitBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-veil absolute inset-0 opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "circuit-trace absolute left-0 top-1/4 h-px w-full opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "circuit-trace absolute left-0 top-2/3 h-px w-full opacity-25",
				style: { animationDelay: "3s" }
			})
		]
	});
}
function slugify$1(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
	const timeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleMouseEnter = (label) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setOpenDropdown(label);
	};
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenDropdown(null);
		}, 150);
	};
	const renderDesktopDropdown = (label) => {
		const isOpen = openDropdown === label;
		const isServices = label === "Services";
		const items = isServices ? SERVICES.map((s) => ({
			title: s.title,
			href: `/services/${s.slug}`
		})) : PACKAGES.map((p) => ({
			title: p.name,
			href: `/packages/${slugify$1(p.name)}`
		}));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			onMouseEnter: () => handleMouseEnter(label),
			onMouseLeave: handleMouseLeave,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: isServices ? "/services" : "/packages",
					className: cn("text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:text-[var(--gold-bright)]", isOpen ? "text-[var(--gold-bright)]" : "text-white"),
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpenDropdown(isOpen ? null : label),
					"aria-expanded": isOpen,
					"aria-haspopup": "true",
					className: cn("p-0.5 transition-colors hover:text-[var(--gold-bright)]", isOpen ? "text-[var(--gold-bright)]" : "text-white"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3 transition-transform duration-200", isOpen && "rotate-180") })
				})]
			}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-full left-0 mt-4 w-64 rounded-md border border-[var(--gold)]/40 bg-[#061e19] shadow-lg animate-in fade-in slide-in-from-top-2 p-2 backdrop-blur-xl",
				children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "block px-4 py-2 text-sm text-white hover:bg-[var(--gold)]/10 hover:text-[var(--gold-bright)] rounded-md transition-colors",
					children: item.title
				}, idx))
			})]
		});
	};
	const renderMobileDropdown = (label) => {
		const isOpen = openDropdown === label;
		const isServices = label === "Services";
		const items = isServices ? SERVICES.map((s) => ({
			title: s.title,
			href: `/services/${s.slug}`
		})) : PACKAGES.map((p) => ({
			title: p.name,
			href: `/packages/${slugify$1(p.name)}`
		}));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: isServices ? "/services" : "/packages",
					onClick: () => setOpen(false),
					className: "text-[0.72rem] uppercase tracking-[0.2em] text-white hover:text-[var(--gold-bright)] transition-colors",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpenDropdown(isOpen ? null : label),
					className: "p-1 text-white hover:text-[var(--gold-bright)] transition-colors",
					"aria-label": `Toggle ${label} menu`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-200", isOpen && "rotate-180") })
				})]
			}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1 pl-4 border-l border-[var(--gold)]/20 mt-1 mb-2 animate-in fade-in slide-in-from-top-2",
				children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "py-2 text-[0.7rem] text-white/80 hover:text-[var(--gold-bright)] transition-colors",
					children: item.title
				}, idx))
			})]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-[color-mix(in_oklab,var(--ink)_78%,transparent)] backdrop-blur-xl" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Logo",
						className: "h-16 sm:h-20 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV_LINKS.map((l) => l.label === "Services" || l.label === "Packages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: renderDesktopDropdown(l.label) }, l.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "relative text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors hover:text-[var(--gold-bright)]",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						as: "a",
						href: "/contact",
						className: "hidden px-5 py-3 sm:inline-flex",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "glass-panel rounded-sm p-2.5 lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col gap-1 border-t border-border bg-[color-mix(in_oklab,var(--ink)_94%,transparent)] px-6 py-4 backdrop-blur-xl lg:hidden",
			children: NAV_LINKS.map((l) => l.label === "Services" || l.label === "Packages" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: renderMobileDropdown(l.label) }, l.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-white hover:text-[var(--gold-bright)] transition-colors block",
				children: l.label
			}, l.href))
		}) : null]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactFormSchema = objectType({
	name: stringType().trim().min(1, "Name is required."),
	email: stringType().trim().email("Enter a valid email address."),
	company: stringType().trim().optional().default(""),
	budget: stringType().trim().optional().default(""),
	message: stringType().trim().min(1, "Tell us about your business goals.")
});
var submitContactForm = createServerFn({ method: "POST" }).validator(contactFormSchema).handler(createSsrRpc("24d672fb73584c0403d628777d6e29971e34c8317bf1373db52c3b2cb37fcb61"));
function CustomDropdown({ options, value, onChange, placeholder = "Select an option", name, error, className = "" }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (containerRef.current && !containerRef.current.contains(event.target)) setIsOpen(false);
		}
		function handleKeyDown(event) {
			if (event.key === "Escape") setIsOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	const handleSelect = (option) => {
		onChange(option);
		setIsOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: `relative w-full ${className}`,
		children: [
			name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name,
				value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setIsOpen((prev) => !prev),
				"aria-haspopup": "listbox",
				"aria-expanded": isOpen,
				className: `w-full rounded-sm border px-4 py-3 text-sm text-left outline-none transition-all flex items-center justify-between bg-[color-mix(in_oklab,var(--teal-deep)_14%,transparent)] ${isOpen ? "border-[var(--gold)] ring-1 ring-[var(--gold)]" : error ? "border-red-500/80" : "border-border hover:border-[var(--gold)]/70 focus:border-[var(--gold)]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: value ? "text-foreground font-medium" : "text-muted-foreground",
					children: value || placeholder
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 text-[var(--gold-bright)] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}` })]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "listbox",
				className: "absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-sm border border-[var(--gold)] bg-[#0d221e] py-1.5 shadow-[var(--shadow-glow-teal)] max-h-64 overflow-y-auto animate-in fade-in-50 zoom-in-95 duration-150",
				children: options.map((option) => {
					const isSelected = value === option;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "option",
						"aria-selected": isSelected,
						onClick: () => handleSelect(option),
						className: `group flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer select-none transition-colors duration-150 ${isSelected ? "bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] text-[var(--gold-bright)] font-semibold" : "text-white hover:bg-[var(--gold)] hover:text-black font-normal"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-[var(--gold-bright)] group-hover:text-black shrink-0 ml-2" })]
					}, option);
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-red-400",
				children: error
			})
		]
	});
}
/** Swap this to change the background video (e.g. "/assets/hero-bg.mp4"). */
var HERO_VIDEO_SRC = {
	version: 1,
	asset_id: "3864211f-f2fc-414e-8e97-89d35f206848",
	project_id: "2ab0cfbe-9ce6-44bb-8460-b25a48c3a55c",
	url: "/__l5e/assets-v1/3864211f-f2fc-414e-8e97-89d35f206848/hero-bg.mp4",
	r2_key: "a/v1/2ab0cfbe-9ce6-44bb-8460-b25a48c3a55c/3864211f-f2fc-414e-8e97-89d35f206848/hero-bg.mp4",
	original_filename: "hero-bg.mp4",
	size: 19086328,
	content_type: "video/mp4",
	created_at: "2026-08-19T10:32:17Z"
}.url;
function ParallaxVideo({ src = HERO_VIDEO_SRC, speed = .4, className, overlayClassName, opacity = 1 }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotionPref();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("absolute inset-0 overflow-hidden", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-x-0 -top-[20%] h-[140%] will-change-transform",
			style: { y: reduced ? 0 : y },
			children: reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,color-mix(in_oklab,var(--teal-bright)_26%,transparent),transparent_65%)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "size-full object-cover",
				style: { opacity },
				src,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata",
				disablePictureInPicture: true,
				controls: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,20,0.25)_0%,rgba(10,20,20,0.38)_55%,rgba(10,20,20,0.5)_100%)]", overlayClassName) })]
	});
}
var FIELD = "w-full rounded-sm border border-border bg-[color-mix(in_oklab,var(--teal-deep)_14%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--gold)]";
function Contact() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		company: "",
		budget: "",
		message: ""
	});
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [sending, setSending] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const pkg = new URLSearchParams(window.location.search).get("package");
		if (pkg) {
			const matchedOption = BUDGET_OPTIONS.find((opt) => opt.toLowerCase().includes(pkg.toLowerCase()));
			if (matchedOption) setFormData((prev) => ({
				...prev,
				budget: matchedOption
			}));
		}
	}, []);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (fieldErrors[name]) setFieldErrors((prev) => ({
			...prev,
			[name]: ""
		}));
	};
	const handleBudgetChange = (value) => {
		setFormData((prev) => ({
			...prev,
			budget: value
		}));
		if (fieldErrors.budget) setFieldErrors((prev) => ({
			...prev,
			budget: ""
		}));
	};
	const validateForm = () => {
		const errors = {};
		if (!formData.name.trim()) errors.name = "Name is required.";
		if (!formData.email.trim()) errors.email = "Email is required.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = "Please enter a valid email address.";
		if (!formData.message.trim()) errors.message = "Tell us about your business goals.";
		setFieldErrors(errors);
		return Object.keys(errors).length === 0;
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		setFeedback(null);
		if (!validateForm()) {
			toast.error("Please fix the errors in the form before submitting.");
			return;
		}
		setSending(true);
		try {
			await submitContactForm({ data: formData });
			setFeedback({
				type: "success",
				message: "Thank you! Your enquiry has been submitted successfully. Our growth team will be in touch shortly."
			});
			toast.success("Enquiry sent successfully!");
			setFormData({
				name: "",
				email: "",
				company: "",
				budget: "",
				message: ""
			});
			setFieldErrors({});
		} catch (err) {
			console.error("Submission error:", err);
			const errMsg = err instanceof Error ? err.message : "Failed to send enquiry. Please try again.";
			setFeedback({
				type: "error",
				message: errMsg
			});
			toast.error(errMsg);
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-[var(--ink)] py-28 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxVideo, {
				speed: .3,
				opacity: .35,
				overlayClassName: "bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink)_88%,transparent)_0%,color-mix(in_oklab,var(--ink)_94%,transparent)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitBackdrop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.35]",
				style: { backgroundImage: "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--teal-bright) 30%, transparent) 0, transparent 45%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--gold) 22%, transparent) 0, transparent 45%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Let's Talk",
					title: "Let's Build Your Next Growth System.",
					sub: "From brand identity to AI-enabled business operations, we help businesses grow with structure, speed and measurable impact."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						noValidate: true,
						className: "glass-panel rounded-sm p-8 sm:p-10",
						children: [
							feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mb-6 flex items-start gap-3 rounded-sm border p-4 text-sm ${feedback.type === "success" ? "border-[var(--gold)]/60 bg-[color-mix(in_oklab,var(--teal-deep)_30%,transparent)] text-[var(--gold-bright)]" : "border-red-500/60 bg-red-950/40 text-red-300"}`,
								children: [feedback.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-[var(--gold-bright)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-5 shrink-0 text-red-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: feedback.type === "success" ? "Enquiry Sent" : "Submission Failed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs opacity-90",
									children: feedback.message
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-semibold mb-3",
										children: "Let's Connect"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl md:text-4xl font-semibold text-white mb-3",
										children: "Great Partnerships Begin With a Conversation."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm leading-relaxed max-w-md",
										children: "Tell us where you are, where you want to be and we'll map out exactly how to get you there."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										value: formData.name,
										onChange: handleChange,
										placeholder: "Name *",
										className: `${FIELD} ${fieldErrors.name ? "border-red-500/80" : ""}`
									}), fieldErrors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-red-400",
										children: fieldErrors.name
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										name: "email",
										value: formData.email,
										onChange: handleChange,
										placeholder: "Email *",
										className: `${FIELD} ${fieldErrors.email ? "border-red-500/80" : ""}`
									}), fieldErrors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-red-400",
										children: fieldErrors.email
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "company",
										value: formData.company,
										onChange: handleChange,
										placeholder: "Company",
										className: FIELD
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomDropdown, {
										name: "budget",
										options: BUDGET_OPTIONS,
										value: formData.budget,
										onChange: handleBudgetChange,
										placeholder: "Budget / Package"
									}) })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 5,
									value: formData.message,
									onChange: handleChange,
									placeholder: "Tell us about your business goals *",
									className: `${FIELD} resize-none ${fieldErrors.message ? "border-red-500/80" : ""}`
								}), fieldErrors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-red-400",
									children: fieldErrors.message
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 flex items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									type: "submit",
									disabled: sending,
									children: sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Sending…"]
									}) : "Send Enquiry"
								})
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel h-full rounded-sm p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "Direct Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-5 w-16" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "flex flex-col gap-4 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://wa.me/923427438726",
												children: "WhatsApp 0342 7438726"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "mailto:info@attarigroupofcompanies.com",
												children: "info@attarigroupofcompanies.com"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://crescentnovainternational.com/en/",
												target: "_blank",
												rel: "noreferrer",
												children: "crescentnovainternational.com"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "my-7 w-16" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-3 text-sm text-muted-foreground",
									children: [
										"Head Office — Wah Cantt, Pakistan",
										"Islamabad Office — Blue Area",
										"Chitral Office — Pakistan",
										"Riyadh — Saudi Arabia"
									].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-[var(--teal-bright)]" }), a]
									}, a))
								})
							]
						})
					})]
				})]
			})
		]
	});
}
function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
		label: s.title,
		href: `/services#${s.slug}`
	}));
	const packageLinks = PACKAGES.slice(0, 6).map((p) => ({
		label: p.name,
		href: `/packages/${slugify(p.name)}`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-[var(--ink)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 pt-16 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)] leading-none",
								children: "CNI AI & Digital Division"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/",
								"aria-label": "CNI Home",
								className: "-mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "CNI Logo",
									className: "h-24 sm:h-32 w-auto object-contain object-left"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed max-w-xs",
								children: "Intelligent growth for ambitious businesses — branding, digital, AI and beyond."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0 text-[var(--gold-bright)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Green Trust Tower, Ground Floor,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Blue Area, Islamabad"
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/923427438726",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), "WhatsApp"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.instagram.com/cniaianddigitaldivision/",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), "Instagram"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.facebook.com/profile.php?id=61593357982871",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), "Facebook"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.linkedin.com/company/aidigitaldivision/",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), "LinkedIn"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.tiktok.com/@cniaianddigitaldivision",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "size-3.5 shrink-0 text-[var(--gold-bright)]",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											xmlns: "http://www.w3.org/2000/svg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06Z" })
										}), "Tiktok"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:info@attarigroupofcompanies.com",
										className: "flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 shrink-0 text-[var(--gold-bright)]" }), "info@attarigroupofcompanies.com"]
									})
								]
							})
						]
					}), [
						{
							title: "Services",
							links: serviceLinks
						},
						{
							title: "Packages",
							links: packageLinks
						},
						{
							title: "Company",
							links: [
								{
									label: "Home",
									href: "/"
								},
								{
									label: "Services",
									href: "/services"
								},
								{
									label: "About Us",
									href: "/about"
								},
								{
									label: "Portfolio",
									href: "/portfolio"
								},
								{
									label: "Contact",
									href: "/contact"
								}
							]
						}
					].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-3",
						children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground hover:translate-x-0.5 inline-block",
							children: link.label
						}) }, link.href))
					})] }, col.title))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 w-full rounded-xl overflow-hidden border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.4787052931015!2d73.07596197441562!3d33.7224355350753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8308ecc255%3A0x7060e58f1e852b66!2sGreen%20Trust%20Tower!5e0!3m2!1sen!2s!4v1787639142439!5m2!1sen!2s",
						width: "100%",
						height: "260",
						style: {
							border: 0,
							display: "block"
						},
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "strict-origin-when-cross-origin",
						title: "CNI Office Location — Green Trust Tower, Islamabad"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-full mt-10 mb-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							currentYear,
							" Crescent Nova International — AI & Digital Division. All rights reserved."
						]
					})
				})
			]
		})
	});
}
//#endregion
export { GoldRule as a, Reveal as c, cn as d, Footer as i, SectionHeading as l, Contact as n, MagneticButton as o, CountUp as r, Navbar as s, CircuitBackdrop as t, TiltCard as u };
