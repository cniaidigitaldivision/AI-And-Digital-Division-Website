import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Reveal } from "./Contact-DWLIruNB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClientLogos-CQrSTjMZ.js
var import_jsx_runtime = require_jsx_runtime();
var CLIENT_LOGOS = Object.values(/* @__PURE__ */ Object.assign({
	"../../assets/logos/AGC Logo Png.png": "/assets/AGC%20Logo%20Png-BfYEfOSy.png",
	"../../assets/logos/Al Maida Logo PNG 4.png": "/assets/Al%20Maida%20Logo%20PNG%204-CbBz6oUe.png",
	"../../assets/logos/Attari logo 4.png": "/assets/Attari%20logo%204-TEj2XbX2.png",
	"../../assets/logos/CRH Logo 9.png": "/assets/CRH%20Logo%209-Bk2D5XdC.png",
	"../../assets/logos/Crescent Nova 2.png": "/assets/Crescent%20Nova%202-DOCYcFxZ.png",
	"../../assets/logos/Daniyal Marketing Black logo.png": "/assets/Daniyal%20Marketing%20Black%20logo-DLfUjBOL.png",
	"../../assets/logos/Investo 21.png": "/assets/Investo%2021-C4jATYuK.png",
	"../../assets/logos/TOWN SQU logo 1.png": "/assets/TOWN%20SQU%20logo%201-yR9g9eEv.png",
	"../../assets/logos/The Executive-logo-green.png": "/assets/The%20Executive-logo-green-XmdE-Hfh.png",
	"../../assets/logos/jashn e subhe noor new logo.png": "/assets/jashn%20e%20subhe%20noor%20new%20logo-D0n85woi.png",
	"../../assets/logos/logo-transparent.png": "/assets/logo-transparent-DhBC_NdC.png"
}));
function ClientLogos() {
	const half = Math.ceil(CLIENT_LOGOS.length / 2);
	const logosTop = CLIENT_LOGOS.slice(0, half);
	const logosBottom = CLIENT_LOGOS.slice(half);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: "w-full relative flex flex-col gap-10 bg-white/[0.05] backdrop-blur-md rounded-3xl py-12 border border-white/10 shadow-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-10 w-full overflow-hidden",
			style: {
				WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
				maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max items-center animate-marquee-left hover:[animation-play-state:paused]",
				children: [
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-16 sm:gap-24 items-center px-8 sm:px-12 shrink-0",
					children: logosTop.map((logo, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: `Client Logo ${idx + 1}`,
						className: "h-12 sm:h-16 lg:h-20 w-auto object-contain shrink-0 cursor-default hover:scale-105 transition-transform drop-shadow-sm"
					}, idx))
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max items-center animate-marquee-right hover:[animation-play-state:paused]",
				children: [
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-16 sm:gap-24 items-center px-8 sm:px-12 shrink-0",
					children: logosBottom.map((logo, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: `Client Logo ${idx + 1}`,
						className: "h-12 sm:h-16 lg:h-20 w-auto object-contain shrink-0 cursor-default hover:scale-105 transition-transform drop-shadow-sm"
					}, idx))
				}, i))
			})]
		})
	});
}
//#endregion
export { ClientLogos as t };
