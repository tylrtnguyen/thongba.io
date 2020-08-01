const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    author: config.name,
    description: config.siteDescription,
    keywords: config.siteKeywords,
    logo: config.mainLogo,
    location: config.location
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'portfolio',
        path: `${__dirname}/content/portfolio`
      }
    },
    {
      resolve: `gatsby-plugin-simple-analytics`,
      options: {
        domain: 'sa.thongba.io',
        events: true,
        trackPageViews: true
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90
            },
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Pacifico', 'Lato']
        }
      }
    }
  ],
}
