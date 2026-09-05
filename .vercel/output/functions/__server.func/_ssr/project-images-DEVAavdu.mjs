//#region node_modules/.nitro/vite/services/ssr/assets/project-images-DEVAavdu.js
var GC_collage_default = "/assets/GC%20collage-CsNQaAGM.png";
var Screenshot_2026_08_25_125149_default = "/assets/Screenshot%202026-08-25%20125149-BkDZHyj0.png";
var Screenshot_2026_08_25_130215_default = "/assets/Screenshot%202026-08-25%20130215-DY2Y8_KI.png";
var Screenshot_2026_08_25_130241_default = "/assets/Screenshot%202026-08-25%20130241-DhkP9RG7.png";
var home_page_default = "/assets/home-page-QFb0VJRj.png";
var Picture1_default = "/assets/Picture1-BYgP1QbK.png";
var Picture10_default = "/assets/Picture10-HWjWgN2X.png";
var Picture11_default = "/assets/Picture11-a0b4fWiG.png";
var Picture12_default = "/assets/Picture12-DfbC0bjE.png";
var Picture13_default = "/assets/Picture13-Dv2M1k1M.png";
var Picture14_default = "/assets/Picture14-CxT-WCp_.png";
var Picture15_default = "/assets/Picture15-DP7xPCgk.png";
var Picture16_default = "/assets/Picture16-CfSrjmDl.png";
var Picture17_default = "/assets/Picture17-Di2E_1g1.png";
var Picture18_default = "/assets/Picture18-BHkVkOVb.png";
var Picture19_default = "/assets/Picture19-DbEG-Mpp.png";
var Picture2_default = "/assets/Picture2-CJInd12N.png";
var Picture20_default = "/assets/Picture20-BRSqD5Oz.png";
var Picture21_default = "/assets/Picture21-D0C07yW-.png";
var Picture22_default = "/assets/Picture22-DNNHqz9P.png";
var Picture4_default = "/assets/Picture4-j3cQolF6.png";
var Picture5_default = "/assets/Picture5-CuEfEJlX.png";
var Picture6_default = "/assets/Picture6-BMdo65_N.png";
var Picture7_default = "/assets/Picture7-BlLflHIP.png";
var Picture8_default = "/assets/Picture8-D18zCJJh.png";
var Picture9_default = "/assets/Picture9-DnZoBoU-.png";
var Taskly_collage_default = "/assets/Taskly%20collage-BFhJNHgG.png";
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
		"/src/assets/projects/project2/Picture1.png": Picture1_default,
		"/src/assets/projects/project2/Picture10.png": Picture10_default,
		"/src/assets/projects/project2/Picture11.png": Picture11_default,
		"/src/assets/projects/project2/Picture12.png": Picture12_default,
		"/src/assets/projects/project2/Picture13.png": Picture13_default,
		"/src/assets/projects/project2/Picture14.png": Picture14_default,
		"/src/assets/projects/project2/Picture15.png": Picture15_default,
		"/src/assets/projects/project2/Picture16.png": Picture16_default,
		"/src/assets/projects/project2/Picture17.png": Picture17_default,
		"/src/assets/projects/project2/Picture18.png": Picture18_default,
		"/src/assets/projects/project2/Picture19.png": Picture19_default,
		"/src/assets/projects/project2/Picture2.png": Picture2_default,
		"/src/assets/projects/project2/Picture20.png": Picture20_default,
		"/src/assets/projects/project2/Picture21.png": Picture21_default,
		"/src/assets/projects/project2/Picture22.png": Picture22_default,
		"/src/assets/projects/project2/Picture4.png": Picture4_default,
		"/src/assets/projects/project2/Picture5.png": Picture5_default,
		"/src/assets/projects/project2/Picture6.png": Picture6_default,
		"/src/assets/projects/project2/Picture7.png": Picture7_default,
		"/src/assets/projects/project2/Picture8.png": Picture8_default,
		"/src/assets/projects/project2/Picture9.png": Picture9_default,
		"/src/assets/projects/project2/Taskly collage.png": Taskly_collage_default,
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
