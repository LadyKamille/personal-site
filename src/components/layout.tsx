import { MDXProvider } from '@mdx-js/react';
import { graphql, StaticQuery } from 'gatsby';

import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Tags from './Tags/Tags';

import LayoutStyles from './layout.module.css';

const shortcodes = { Tags };

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              external
            }
            social {
              name
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={LayoutStyles.layout}>
        <Menu
          menuItems={data?.site?.siteMetadata?.menuLinks}
          title={data?.site?.siteMetadata?.title}
        />
        <MDXProvider components={shortcodes}>
          <div className={LayoutStyles.content}>{children}</div>
        </MDXProvider>
        <Footer
          menuLinks={data?.site?.siteMetadata?.menuLinks}
          socialLinks={data?.site?.siteMetadata?.social}
        />
      </div>
    )}
  />
);

export default Layout;
