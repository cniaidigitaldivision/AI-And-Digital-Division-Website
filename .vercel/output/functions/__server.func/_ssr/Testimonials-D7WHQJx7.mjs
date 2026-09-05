import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as Quote } from "../_libs/lucide-react.mjs";
import { c as motion } from "../_libs/framer-motion+[...].mjs";
import { a as GoldRule } from "./Contact-CwUWyaTP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-D7WHQJx7.js
var import_jsx_runtime = require_jsx_runtime();
var TESTIMONIALS = [
	{
		name: "Ali Ahmed",
		role: "Founder & CEO",
		company: "Ahmed Developments",
		initials: "AA",
		quote: "CNI completely transformed how we show up online. Within three months our inbound leads doubled, the website looks world-class, and our social channels finally have a consistent voice. Couldn't ask for a better growth partner."
	},
	{
		name: "Shahzaib Mirza",
		role: "Head of Marketing",
		company: "Mirza Living Spaces",
		initials: "SM",
		quote: "We've worked with several agencies before, but CNI is a different league. They understood our brand immediately, built the CRM automation we'd been putting off for years, and the reporting actually tells us what's working. Highly recommend."
	},
	{
		name: "Mr. Moiz Siddiqui",
		role: "Director",
		company: "Siddiqui Group of Companies",
		initials: "MS",
		quote: "The ERP solution CNI built for us has saved us hours of manual work every single day. Our operations team is more efficient, our data is clean, and we finally have real-time visibility into the business. Exceptional team."
	},
	{
		name: "Hassan Raza",
		role: "Managing Partner",
		company: "Raza Real Estate",
		initials: "HR",
		quote: "CNI built a complete real estate portal for us with lead capture, an agent dashboard, and WhatsApp automation. The quality of leads coming through is remarkable — pre-qualified, already engaged, and ready to talk."
	},
	{
		name: "Bilal Khan",
		role: "CEO",
		company: "Khan Premium Retail",
		initials: "BK",
		quote: "Our branding had been inconsistent for years. CNI came in, understood our vision, and delivered a brand identity that finally feels premium. The packaging redesign alone changed how customers perceive us. Sales reflect it."
	},
	{
		name: "Ayesha Siddiqui",
		role: "Operations Manager",
		company: "The Executive Group",
		initials: "AS",
		quote: "From the very first meeting, CNI felt genuinely invested in our growth. The SEO work they did put us on the first page of Google for our most competitive keywords in less than four months. Absolutely brilliant work."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		style: {
			background: "var(--ink, #040f0d)",
			borderTop: "1px solid rgba(255,255,255,0.08)"
		},
		className: "py-24 sm:py-32 overflow-hidden flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .2
				},
				transition: { duration: .65 },
				className: "mb-14 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow block mb-4",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mb-5 w-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl",
						children: "What Our Clients Say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm sm:text-base text-muted-foreground",
						children: "Trusted by brands across Pakistan and Saudi Arabia. Here's what a few of them have to say about working with CNI."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex w-full overflow-hidden mt-4 group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]",
					children: [0, 1].map((setIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-[320px] sm:w-[400px] shrink-0 mr-6 group/card relative flex flex-col rounded-[20px] p-7 md:p-8 overflow-hidden",
							style: {
								background: "#061e19",
								border: "1px solid rgba(255,255,255,0.1)",
								transition: "border-color 0.3s"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -right-8 -top-8 size-36 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500",
									style: { background: "radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									style: {
										color: "var(--gold-bright, #e6b830)",
										opacity: .6
									},
									className: "size-7 mb-5 shrink-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex-1 text-sm leading-[1.9] italic",
									style: { color: "rgba(255,255,255,0.65)" },
									children: [
										"“",
										t.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 mb-5 h-px w-10",
									style: { background: "rgba(201,162,39,0.35)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 select-none tracking-wide",
										style: {
											background: "rgba(6,30,25,0.9)",
											border: "1px solid rgba(201,162,39,0.4)",
											color: "var(--gold-bright, #e6b830)"
										},
										children: t.initials
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-white leading-tight",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs mt-0.5",
										style: { color: "rgba(255,255,255,0.45)" },
										children: [
											t.role,
											", ",
											t.company
										]
									})] })]
								})
							]
						}, `${setIndex}-${i}`))
					}, setIndex))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` } })]
	});
}
//#endregion
export { Testimonials as t };
