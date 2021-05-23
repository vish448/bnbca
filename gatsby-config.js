require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  /* Site config here */
  siteMetadata: {
    title:'BownBeeCa',
    description: `BownBeeCa - Indian Kids Ethinic wear`,
    company: `BownBeeCanada`,
    companyWebsite:`bownbee.ca`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`content`,
        path:`${__dirname}/src/content/products`
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`images`,
        path:`${__dirname}/src/images`
      }
    },
    `gatsby-transformer-csv`,
    {
      resolve:`gatsby-plugin-snipcart`,
      options: {
        apiKey:process.env.SNIPCART,
        js: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.css`,
        autopop: false
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "BownBeeCa",
        short_name: "BownBeeCa",
        start_url: "/",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `47575967550`,
      },
    },
  ],
}
