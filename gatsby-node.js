const path = require('path');
const postTemplate = path.resolve(`./src/templates/post.tsx`);

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  posts.forEach((node, index) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: `blog/${slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        previousSlug: posts[index - 1]?.frontmatter.slug,
        nextSlug: posts[index + 1]?.frontmatter.slug,
      },
    });
  });
};
