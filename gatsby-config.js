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
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
    }
  ],
}
