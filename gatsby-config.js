const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
	siteMetadata: {
		title: ``,
		description: ``,
		url: `https://aerosailor.com`,
		author: `@meherranjan`,
		image: `/self.jpg`,
		twitterUsername: "@meherranjan",

		siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
		pathPrefix,
		title: website.title,
		titleAlt: website.titleAlt,
		description: website.description,
		banner: website.logo,
		headline: website.headline,
		siteLanguage: website.siteLanguage,
		ogLanguage: website.ogLanguage,
		author: website.author,
		twitter: website.twitter,
		facebook: website.facebook,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
							languageExtensions: [
								{
									language: "superscript",
									extend: "javascript",
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							]
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 720,
							stripMetadata: true,
							defaultQuality: 100,
						},
					},
					`gatsby-remark-reading-time`
				],
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				// icon: `src/images/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`
	],
}
