module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    description:"This is a description"
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-image","gatsby-plugin-sharp", 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  `gatsby-plugin-mdx`
],
};
