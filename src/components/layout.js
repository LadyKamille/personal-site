import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Header from 'gatsby-theme-blog/src/components/header';
import Menu from './Menu';

const Layout = ({ children, ...props }) => (
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
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Menu
          menuItems={data?.site?.siteMetadata?.menuLinks}
          title={data?.site?.siteMetadata?.title}
        />
        <Header {...props} />
        <div style={{ width: '70%', margin: '0 auto' }}>{children}</div>
      </>
    )}
  />
);

export default Layout;
