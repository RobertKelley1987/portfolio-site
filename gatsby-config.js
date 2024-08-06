/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "robert-kelley-portfolio",
        protocol: "https",
        hostname: "robertkelley.xyz",
      },
    },
  ],
};
