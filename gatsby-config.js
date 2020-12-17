/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: "Mathías Falcón — Full Stack Developer",
    siteUrl: `https://mathfalcon.github.io/portfolio/`,
    description:
      "Hey! I am Mathías and I work as a Full Stack Dev, check out my portfolio!",
  },
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mathías Falcón - Portfolio",
        short_name: "Portfolio MF",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#151515",
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
