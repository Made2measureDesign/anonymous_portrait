module.exports = {
  siteMetadata: {
    title: `Anonymous Portrait`,
    description: `Why disclose your identity? 
    One of the most successful achievements of blockchain technology is to allow trustful interactions among anonymous parties. Purchase one of the artworks, get your own anonymous portrait.Stay protected, own your data, be anonymous.`,
    author: `@anonymous`,
    social: [
      {
        url: 'https://twitter.com/anonymousportr1',
        name: '@anonymousportr1'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
