/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const BlogPost = ({ data }): React.ReactElement => {
  return (
    <Layout>
      <>
        <Box as="h1" variant="styles.h1">
          {data.mdx.frontmatter.title}
        </Box>
        {data.mdx.frontmatter.author && (
          <Box>
            <p>
              Author:&nbsp;
              <Link to="/" sx={{ variant: 'styles.a', color: 'navText' }}>
                {data.mdx.frontmatter.author}
              </Link>
            </p>
          </Box>
        )}
        <Box>{data.mdx.body}</Box>
      </>
    </Layout>
  );
};

export const query = graphql`
  query POST_BY_ID($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        author
        date
        title
      }
    }
  }
`;

// export const query = graphql`
//   query POST_BY_SLUG($slug: String) {
//     mdx(slug: { eq: $slug }) {
//       id
//       body
//       frontmatter {
//         author
//         date
//         slug
//         title
//       }
//     }
//   }
// `;

export default BlogPost;
