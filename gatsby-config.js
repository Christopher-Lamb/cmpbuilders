/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cmp_builders`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `CMP Builders`,
        short_name: `CMP Builders`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.png`,
        icons: [
          {
            src: `${__dirname}/src/images/HammerIcon.png`,
            sizes: `64x64 32x32 24x24 16x16`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/logo192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/logo512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `src/images/`,
      },
      __key: "images",
    },
  ],
};
