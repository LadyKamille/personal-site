import { MDXProvider } from '@mdx-js/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'theme-ui';

import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Menu from './Menu/Menu';
import ResponsiveImage from './ResponsiveImage/ResponsiveImage';
import Tags from './Tags/Tags';

import { theme } from '../../theme';
import * as LayoutStyles from './layout.module.css';

interface Props {
  children: JSX.Element;
}

const shortcodes = { Gallery, ResponsiveImage, Tags };

const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query site {
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
  `);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Layout;
