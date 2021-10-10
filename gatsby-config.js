module.exports = {
  siteMetadata: {
    title: "抑之",
    description: "cui zhiyang's blog",
    image: "./static/magic.png", 
    titleTemplate: "%s ▞ cui zhiyang",
    copyright: 'This website is copyright 2021 Cui Zhiyang',
    contact: 'dorajackcui@gmail.com',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cui zhiyang's blog`,
        short_name: `Yizhi blog`,
        start_url: `/`,
        background_color: `#FFFDFA`,
        display: `standalone`,
        icon: `static/magic.png`
      },
    },  
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 500,
              loading:'lazy',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  
};
