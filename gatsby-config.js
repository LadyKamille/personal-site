module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: '/blog',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kamille Norris',
        short_name: 'KMN',
        start_url: '/',
        display: 'standalone',
        icon: './static/favicon.png',
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Kamille Norris',
    author: 'Kamille Norris',
    description: 'My site description...',
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
        name: 'twitter',
        url: 'https://twitter.com/LadyKamille',
      },
      {
        name: 'github',
        url: 'https://github.com/LadyKamille',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/kamille-norris-a37971a4/',
      },
    ],
  },
};
