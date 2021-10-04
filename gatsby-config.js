const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `James the Dog Walker`,
    description: `Dog walking services in Lakewood, California`,
    keywords: [`Southern California dog walker`, `dog walking`, `dog sitting`, `dog sitter near me`, `dog walker near me prices`, `dog walking prices`, `Lakewood dog walker`, `dog walking services`, `dog walker near me`, `local dog walker`,], 
    siteUrl: `https://jamesthedogwalker.com`,
    image: `logo.jpg`,
    instagramUsername: ``,
    pages: [
      {
        name: "Home",
        href: "/"
      },
      {
        name: "About",
        href: "/about"
      },
      {
        name: "Services",
        href: "/services"
      },
      {
        name: "Blog",
        href: "/blog"
      },
      {
        name: "FAQ's",
        href: "/faq"
      },
      {
        name: "Contact",
        href: "/contact"
      },
    ],
    author: `Kelsi Hoyle`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Website Data",
            mapping: { "Image": "fileNode", "Content": "text/markdown" }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Testimonials",
            mapping: { "Image": "fileNode" }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "About",
            mapping: { "Image": "fileNode", "Content": "text/markdown" }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Services",
            mapping: { "Image": "fileNode", "Content": "text/markdown"}
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "FAQ",
            mapping: { "Answer": "text/markdown" }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "Blog",
            mapping: { "Images": "fileNode", "Post": "text/markdown" }
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `james-dog-walker`,
        short_name: `james`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/james.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/testimonials`
        ]
    }
  },
    `gatsby-plugin-layout`
  ],
}
