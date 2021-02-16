module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: 'gatsby-theme-blog-darkmode',
      options: {},
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Personal Site`,
    author: `Kamille Norris`,
    description: `My site description...`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'blog',
        link: '/blog',
      },
    ],
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/LadyKamille`,
      },
      {
        name: `github`,
        url: `https://github.com/LadyKamille`,
      },
    ],
  },
};
