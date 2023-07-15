exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            date(formatString: "YYYY MMMM Do")
          }
        }
      }
    }
  `);
  data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: `blog${slug}`,
      component: require.resolve(`./src/templates/blog-post.tsx`),
      context: { id: node.id },
    });
  });
};
