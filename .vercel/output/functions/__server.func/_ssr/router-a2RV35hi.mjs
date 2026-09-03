import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { a as SERVICES, l as logo_default, r as PACKAGES } from "./cni-data-CDBQlKtJ.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, p as notFound, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._slug-tkKqxCV9.js
var $$splitComponentImporter$11 = () => import("./packages._slug-DKIQDG5h.mjs");
function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
var Route$12 = createFileRoute("/packages/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	loader: ({ params }) => {
		const pkg = PACKAGES.find((p) => slugify(p.name) === params.slug);
		if (!pkg) throw notFound();
		return { pkg };
	}
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio._slug-_9rGFEaU.js
var $$splitComponentImporter$10 = () => import("./portfolio._slug-CjAKhT5P.mjs");
var Route$11 = createFileRoute("/portfolio/$slug")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-Dn3y42zV.js
var $$splitComponentImporter$9 = () => import("./services._slug-DSa8q4KM.mjs");
var Route$10 = createFileRoute("/services/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	}
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-a2RV35hi.js
var router_a2RV35hi_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DzVxwqxj.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CNI AI & Digital Division" },
			{
				name: "description",
				content: "Intelligent Growth. Integrated Business Transformation."
			},
			{
				name: "author",
				content: "Crescent Nova International"
			},
			{
				property: "og:title",
				content: "CNI AI & Digital Division"
			},
			{
				property: "og:description",
				content: "Intelligent Growth. Integrated Business Transformation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: logo_default,
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function WhatsAppFAB() {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2",
		style: { isolation: "isolate" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					opacity: hovered ? 1 : 0,
					transform: hovered ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
					transition: "opacity 0.22s ease, transform 0.22s ease",
					pointerEvents: "none"
				},
				className: "rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[0.72rem] font-medium text-white shadow-lg whitespace-nowrap border border-white/10",
				children: "Chat on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/923427438726",
				target: "_blank",
				rel: "noreferrer noopener",
				"aria-label": "Chat on WhatsApp",
				onMouseEnter: () => setHovered(true),
				onMouseLeave: () => setHovered(false),
				style: {
					transform: hovered ? "scale(1.12)" : "scale(1)",
					transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 56,
					height: 56,
					borderRadius: "50%",
					background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
					boxShadow: hovered ? "0 0 0 0 transparent, 0 8px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.25)" : "0 4px 18px rgba(37,211,102,0.38), 0 2px 8px rgba(0,0,0,0.2)",
					position: "relative"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						position: "absolute",
						inset: 0,
						borderRadius: "50%",
						background: "rgba(37,211,102,0.35)",
						animation: "wa-pulse 2.2s ease-out infinite"
					},
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 32 32",
					width: "28",
					height: "28",
					fill: "white",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2C8.28 2 2 8.28 2 16c0 2.49.67 4.83 1.84 6.85L2 30l7.34-1.81A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2Zm0 25.5a11.46 11.46 0 0 1-5.84-1.6l-.42-.25-4.35 1.07 1.1-4.24-.27-.44A11.5 11.5 0 1 1 16 27.5Zm6.3-8.62c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59l-.66-.01c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4Z" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      ` })
		]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFAB, {})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-BekIqfqN.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CNI AI & Digital Division | Intelligent Growth & Transformation" },
		{
			name: "description",
			content: "Branding, websites, SEO, CRM, ERP and AI automation for ambitious businesses in Pakistan and Saudi Arabia. The AI & Digital Division of Crescent Nova International."
		},
		{
			property: "og:title",
			content: "CNI AI & Digital Division"
		},
		{
			property: "og:description",
			content: "Intelligent Growth. Integrated Business Transformation. Your growth partner in Pakistan & Saudi Arabia."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./Gallery-DXCTwq1E.mjs");
var Route$7 = createFileRoute("/Gallery")({
	head: () => ({ meta: [{ title: "Gallery | CNI AI & Digital Division" }, {
		name: "description",
		content: "A look inside CNI — our team and the Islamabad office behind every project."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-_4eiKilN.mjs");
var Route$6 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./contact-DEMhKt-6.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | CNI AI & Digital Division" }, {
		name: "description",
		content: "Get in touch with CNI AI & Digital Division."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./packages-BNLFs_o1.mjs");
var Route$4 = createFileRoute("/packages")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./services-CF39xF4H.mjs");
var Route$3 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./packages.index-BwYTVB9G.mjs");
var Route$2 = createFileRoute("/packages/")({
	head: () => ({ meta: [{ title: "Packages | CNI AI & Digital Division" }, {
		name: "description",
		content: "Scalable digital growth packages designed to accelerate your brand — from social media to full AI-powered growth systems."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./portfolio.index-Cp0Y4Fcd.mjs");
var Route$1 = createFileRoute("/portfolio/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./services.index-s5Mk1uO4.mjs");
var Route = createFileRoute("/services/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var GalleryRoute = Route$7.update({
	id: "/Gallery",
	path: "/Gallery",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$6.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var PackagesRoute = Route$4.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$9
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$9
});
var PackagesIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => PackagesRoute
});
var PackagesSlugRoute = Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PackagesRoute
});
var PortfolioIndexRoute = Route$1.update({
	id: "/portfolio/",
	path: "/portfolio/",
	getParentRoute: () => Route$9
});
var PortfolioSlugRoute = Route$11.update({
	id: "/portfolio/$slug",
	path: "/portfolio/$slug",
	getParentRoute: () => Route$9
});
var ServicesIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicesRoute
});
var ServicesSlugRoute = Route$10.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var PackagesRouteChildren = {
	PackagesSlugRoute,
	PackagesIndexRoute
};
var PackagesRouteWithChildren = PackagesRoute._addFileChildren(PackagesRouteChildren);
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	GalleryRoute,
	AboutRoute,
	ContactRoute,
	PackagesRoute: PackagesRouteWithChildren,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	PortfolioSlugRoute,
	PortfolioIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, Route$12 as i, Route$10 as n, Route$11 as r, router_a2RV35hi_exports as t };
