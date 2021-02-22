module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/blog',
      },
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
        name: 'Home',
        link: '/',
        external: false,
      },
      {
        name: 'Blog',
        link: '/blog',
        external: false,
      },
      {
        name: 'D&D',
        link: 'https://www.foundry.kamillenorris.com/setup',
        external: true,
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
