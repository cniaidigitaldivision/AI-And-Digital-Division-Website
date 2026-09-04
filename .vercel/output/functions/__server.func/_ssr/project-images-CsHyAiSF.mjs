//#region node_modules/.nitro/vite/services/ssr/assets/project-images-CsHyAiSF.js
var GC_collage_default = "/assets/GC%20collage-CsNQaAGM.png";
var Screenshot_2026_08_25_125149_default = "/assets/Screenshot%202026-08-25%20125149-BkDZHyj0.png";
var Screenshot_2026_08_25_130215_default = "/assets/Screenshot%202026-08-25%20130215-DY2Y8_KI.png";
var Screenshot_2026_08_25_130241_default = "/assets/Screenshot%202026-08-25%20130241-DhkP9RG7.png";
var home_page_default = "/assets/home-page-QFb0VJRj.png";
var Taskly_collage_default = "/assets/Taskly%20collage-BFhJNHgG.png";
var WhatsApp_Image_2026_08_25_at_10_50_55_AM_default = "/assets/WhatsApp%20Image%202026-08-25%20at%2010.50.55%20AM-CIbqTUef.jpeg";
var WhatsApp_Image_2026_08_25_at_10_51_34_AM_default = "/assets/WhatsApp%20Image%202026-08-25%20at%2010.51.34%20AM-DQS3dR-E.jpeg";
var WhatsApp_Image_2026_08_25_at_10_51_53_AM_default = "/assets/WhatsApp%20Image%202026-08-25%20at%2010.51.53%20AM-vrYf9FqT.jpeg";
var WhatsApp_Image_2026_08_25_at_10_54_46_AM_default = "/assets/WhatsApp%20Image%202026-08-25%20at%2010.54.46%20AM-DsVrE9m7.jpeg";
var Screenshot_2026_08_25_141741_default = "/assets/Screenshot%202026-08-25%20141741-SEN3dUQE.png";
var Screenshot_2026_08_25_141823_default = "/assets/Screenshot%202026-08-25%20141823-DTmcpwVU.png";
var Screenshot_2026_08_25_141927_default = "/assets/Screenshot%202026-08-25%20141927-C0SufK3a.png";
var Screenshot_2026_08_25_141946_default = "/assets/Screenshot%202026-08-25%20141946-cYNKA9oi.png";
function getProjectImages(folderName) {
	if (!folderName) return [];
	const allImages = /* #__PURE__ */ Object.assign({
		"/src/assets/projects/project1/GC collage.png": GC_collage_default,
		"/src/assets/projects/project1/Screenshot 2026-08-25 125149.png": Screenshot_2026_08_25_125149_default,
		"/src/assets/projects/project1/Screenshot 2026-08-25 130215.png": Screenshot_2026_08_25_130215_default,
		"/src/assets/projects/project1/Screenshot 2026-08-25 130241.png": Screenshot_2026_08_25_130241_default,
		"/src/assets/projects/project1/home-page.png": home_page_default,
		"/src/assets/projects/project2/Taskly collage.png": Taskly_collage_default,
		"/src/assets/projects/project2/WhatsApp Image 2026-08-25 at 10.50.55 AM.jpeg": WhatsApp_Image_2026_08_25_at_10_50_55_AM_default,
		"/src/assets/projects/project2/WhatsApp Image 2026-08-25 at 10.51.34 AM.jpeg": WhatsApp_Image_2026_08_25_at_10_51_34_AM_default,
		"/src/assets/projects/project2/WhatsApp Image 2026-08-25 at 10.51.53 AM.jpeg": WhatsApp_Image_2026_08_25_at_10_51_53_AM_default,
		"/src/assets/projects/project2/WhatsApp Image 2026-08-25 at 10.54.46 AM.jpeg": WhatsApp_Image_2026_08_25_at_10_54_46_AM_default,
		"/src/assets/projects/project3/Screenshot 2026-08-25 141741.png": Screenshot_2026_08_25_141741_default,
		"/src/assets/projects/project3/Screenshot 2026-08-25 141823.png": Screenshot_2026_08_25_141823_default,
		"/src/assets/projects/project3/Screenshot 2026-08-25 141927.png": Screenshot_2026_08_25_141927_default,
		"/src/assets/projects/project3/Screenshot 2026-08-25 141946.png": Screenshot_2026_08_25_141946_default
	});
	const matches = [];
	for (const path in allImages) if (path.includes(`/src/assets/projects/${folderName}/`)) matches.push(allImages[path]);
	return matches.sort();
}
//#endregion
export { getProjectImages as t };
