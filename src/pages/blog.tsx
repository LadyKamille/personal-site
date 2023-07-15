/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Blog = ({ ...props }): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query blogPostSummary {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

  return (
    <Layout {...props}>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
        <Box
          key={id}
          id={id}
          as="article"
          sx={{
            mb: 4,
            p: 3,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #d1d1d1',
            borderRadius: '15px',
          }}
        >
          <Link
            to={`/blog/${frontmatter.slug}`}
            sx={{ variant: 'styles.a', color: 'primary' }}
          >
            <Heading>{frontmatter.title}</Heading>
          </Link>
          <Box as="p" variant="styles.p">
            {frontmatter.date}
          </Box>
          <Box as="p" variant="styles.p">
            {excerpt}
          </Box>
        </Box>
      ))}
    </Layout>
  );
};

export default Blog;
