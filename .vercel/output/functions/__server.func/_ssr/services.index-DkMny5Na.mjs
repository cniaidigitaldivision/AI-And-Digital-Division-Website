import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, M as ArrowUpRight, N as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useTransform, c as motion, i as useSpring, s as useScroll } from "../_libs/framer-motion+[...].mjs";
import { c as Reveal, i as Footer, s as Navbar } from "./Contact-DWLIruNB.mjs";
import { l as SERVICES } from "./router-CoCz_VNl.mjs";
import { a as Technology, i as Support } from "./SectionsB-YjmYagvd.mjs";
import { a as digital_marketing_paid_media_default, c as seo_aeo_ai_visibility_default, i as crm_whatsapp_automation_default, l as website_development_ecommerce_default, n as branding_identity_default, o as erp_pos_portals_custom_software_default, r as content_models_influencers_default, s as printing_corporate_collateral_default, t as ai_automations_dashboards_integrations_default } from "./website-development-ecommerce-BQj6z9zk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-DkMny5Na.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var serviceImages = /* #__PURE__ */ Object.assign({
	"../assets/services/ai-automations-dashboards-integrations.jpg": ai_automations_dashboards_integrations_default,
	"../assets/services/branding-identity.jpg": branding_identity_default,
	"../assets/services/content-models-influencers.jpg": content_models_influencers_default,
	"../assets/services/crm-whatsapp-automation.jpg": crm_whatsapp_automation_default,
	"../assets/services/digital-marketing-paid-media.jpg": digital_marketing_paid_media_default,
	"../assets/services/erp-pos-portals-custom-software.jpg": erp_pos_portals_custom_software_default,
	"../assets/services/printing-corporate-collateral.jpg": printing_corporate_collateral_default,
	"../assets/services/seo-aeo-ai-visibility.jpg": seo_aeo_ai_visibility_default,
	"../assets/services/website-development-ecommerce.jpg": website_development_ecommerce_default
});
function getImageUrl(name) {
	if (!name) return "";
	return serviceImages[`../assets/services/${name}`] || "";
}
function ServiceCard({ service, index }) {
	const imageUrl = getImageUrl(service.imageName);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: `/services/${service.slug}`,
			className: "block h-full group relative rounded-2xl overflow-hidden glass-panel border border-border hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)] transition-all duration-500 hover:-translate-y-2 bg-[var(--ink)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imageUrl,
					alt: service.title,
					className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative p-8 pt-6 flex flex-col h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-[var(--gold)] transition-colors",
						children: service.title
					}),
					service.simpleExplainer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[var(--gold)] font-medium mb-6 italic opacity-90 leading-relaxed",
						children: service.simpleExplainer
					}),
					service.miniProcess && service.miniProcess.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-2 mb-6 text-xs font-mono uppercase tracking-wider text-muted-foreground",
						children: service.miniProcess.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--cream)] bg-[var(--teal)]/20 px-2 py-1 rounded-md",
								children: step
							}), i < service.miniProcess.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3 h-3 text-[var(--gold)] opacity-50" })]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 mb-8 flex-1",
						children: service.items.slice(0, 3).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leading-tight",
								children: item.title
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex items-center justify-between text-sm font-semibold text-[var(--gold)] group-hover:text-[var(--cream)] transition-colors pt-4 border-t border-border/50",
						children: ["Explore Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })]
					})
				]
			})]
		})
	});
}
function ServicesIndexPage() {
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
									children: "Our Services"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
								children: "Comprehensive solutions designed to transform your ideas into intelligent systems, powerful brands, and sustainable growth."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-7xl mx-auto px-6 py-24 sm:py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
							children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								service,
								index
							}, service.slug))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technology, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Support, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicesIndexPage as component };
