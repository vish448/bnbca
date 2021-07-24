require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  /* Site config here */
  siteMetadata: {
    title:'BownBeeAustralia',
    description: `BownBeeAustralia - Indian Kids Ethinic wear`,
    company: `BownBeeAustralia`,
    companyWebsite:`bownbee.com.au`,
    siteUrl: `https://www.bownbee.com.au`,
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
    `gatsby-plugin-sitemap`,
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
      resolve:`gatsby-plugin-snipcartv3`,
      options: {
        apiKey:process.env.SNIPCARTAU,
        js: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.css`,
        autopop: false
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "BownBeeAu",
        short_name: "BownBeeAu",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-R3KHCKHRZS", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          anonymize_ip: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
