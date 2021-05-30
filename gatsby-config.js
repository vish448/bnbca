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
      resolve:`gatsby-plugin-snipcartv3`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-ELLMZPMGQP",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
  ],
}
