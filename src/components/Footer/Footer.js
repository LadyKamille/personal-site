/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import MenuItem from '../Menu/MenuItem';

import FooterStyles from './Footer.module.css';
import TwitterLogo from '../../../content/assets/twitter.svg';
import GithubLogo from '../../../content/assets/github.png';
import LinkedInLogo from '../../../content/assets/linkedin.png';

const Footer = ({ menuLinks, socialLinks }) => (
  <footer
    className={FooterStyles.footer}
    sx={{
      backgroundColor: 'nav',
      color: 'navText',
    }}
  >
    <div className={FooterStyles.footerNav}>
      <ul>
        {menuLinks.map((item) => (
          <li key={item.name}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
    <div>
      <a href={socialLinks[0].url} target="_blank">
        <img src={TwitterLogo} alt="Twitter" />
      </a>

      <a href={socialLinks[1].url} target="_blank">
        <img src={GithubLogo} alt="Github" />
      </a>

      <a href={socialLinks[2].url} target="_blank">
        <img src={LinkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  </footer>
);

export default Footer;
