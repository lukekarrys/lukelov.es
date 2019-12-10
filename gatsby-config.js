module.exports = {
  siteMetadata: {
    title: `lukelov.es`,
    author: `@lukekarrys`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6a9fb5`,
        theme_color: `#6a9fb5`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820,
              withWebp: true
            }
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-static-images`
        ]
      }
    }
  ]
}
