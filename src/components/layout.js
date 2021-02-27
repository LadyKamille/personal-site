import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import LayoutStyles from './layout.module.css';

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
        <div className={LayoutStyles.content}>{children}</div>
        <Footer
          menuLinks={data?.site?.siteMetadata?.menuLinks}
          socialLinks={data?.site?.siteMetadata?.social}
        />
      </div>
    )}
  />
);

export default Layout;
