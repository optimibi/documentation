// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	// title: "Datafor",
	// tagline: "Dinosaurs are cool",
	// url: "https://datafor.com.cn",
	// baseUrl: "/",
	// onBrokenLinks: "throw",
	// onBrokenMarkdownLinks: "warn",
	// favicon: "img/favicon.ico",
	// // If you aren't using GitHub pages, you don't need these.
	// organizationName: "facebook", // Usually your GitHub org/user name.
	// projectName: "docusaurus", // Usually your repo name.
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	// i18n: {
	// 	defaultLocale: "zh",
	// 	locales: ["en", "zh"],
	// 	localeConfigs: {
	// 		en: {
	// 			label: "English"
	// 		},
	// 		zh: {
	// 			label: "简体中文"
	// 		}
	// 	}
	// },

	title: "OPTIMIBI",
	tagline: "OPTIMIBI Documentation",
	url: "https://optimibi.github.io/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "optimibi", // Usually your GitHub org/user name.
	projectName: "documentation", // Usually your repo name.

	themes: [
		// ... Your other themes.
		[
			"@easyops-cn/docusaurus-search-local",
			{
				hashed: true,
				docsRouteBasePath: "/",
				language: ["en", "zh"],
				highlightSearchTermsOnTargetPage: true,
				explicitSearchResultPath: true,
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					path: "docs",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/optimibi/documentation/edit/main",
				},
				pages: {
					path: "src/pages",
					routeBasePath: "/docs",
					// ... configuration object here
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "帮助文档",
				logo: {
					src: "img/DataFor-ImageFont.svg",
				},
				items: [
					{
						type: "docSidebar",
						position: "left",
						sidebarId: "docsSidebar",
						label: "Documentation",
					},
					{
						type: "docSidebar",
						position: "left",
						sidebarId: "apiSidebar",
						label: "API",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Datafor Co., Ltd.",
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Datafor Co., Ltd.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			colorMode: {
				defaultMode: "light",
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
		}),
};

module.exports = config;
