module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kamille Norris`,
        short_name: `KMN`,
        start_url: `/`,
        display: `standalone`,
        icon: `./static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Kamille Norris`,
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
        link: 'https://www.foundry.kamillenorris.com/',
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
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kamille-norris-a37971a4/`,
      },
    ],
  },
};
