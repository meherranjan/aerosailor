module.exports = {
	siteMetadata: {
		title: `Aerosailor`,
		description: `A blog of my mental ramblings.`,
		author: `@meherranjan`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`,
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
		`gatsby-plugin-sass`,
	],
}
