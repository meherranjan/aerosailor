
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Aerosailor — JavaScript, Technology, Music & everything under the sun', // Navigation and Site Title
  titleAlt: 'Aerosailor', // Title for JSONLD
  description: 'A blog by Meher featuring content on JavaScript, ReactJS, Functional Programming, Elm, Machine Learning, Technology, Web, Scrum, Book Reviews & Lifestyle.',
  headline: 'Writing and publishing content from Meher', // Headline for schema.org JSONLD
  url: 'https://aerosailor.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Aerosailor', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Meher Ranjan Howji', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#FFF',

  twitter: '@meherranjan', // Twitter Username
  facebook: 'meherranjan', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}