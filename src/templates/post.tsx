/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import { Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Gallery from '../components/Gallery/Gallery';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';
import Tags from '../components/Tags/Tags';
import Layout from '../components/layout';

const shortcodes = { Gallery, ResponsiveImage, Tags };

export default function PageTemplate({
  data,
  children,
  pageContext,
  ...props
}) {
  return (
    <Layout {...props}>
      <>
        <Link to="/blog" sx={{ variant: 'styles.a', color: 'primary' }}>
          Back to all posts
        </Link>

        <h1>{data.mdx.frontmatter.title}</h1>
        <p>Published on {data.mdx.frontmatter.date}</p>

        <MDXProvider components={shortcodes}>{children}</MDXProvider>

        <Box sx={{ mt: 4 }}>
          {pageContext.previousSlug && (
            <Link
              to={`/blog/${pageContext.previousSlug}`}
              sx={{ color: 'navText' }}
            >
              Previous
            </Link>
          )}
          &nbsp;
          {pageContext.nextSlug && (
            <Link
              to={`/blog/${pageContext.nextSlug}`}
              sx={{ color: 'navText' }}
            >
              Next
            </Link>
          )}
        </Box>
      </>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
