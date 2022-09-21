import MenuItem from '../Menu/MenuItem';
import { MenuLink } from '../Menu/Menu';

import TwitterLogo from '../../../content/assets/twitter.svg';
import GithubLogo from '../../../content/assets/github.png';
import LinkedInLogo from '../../../content/assets/linkedin.png';

import FooterStyles from './Footer.module.css';

interface SocialLinks {
  name: string;
  url: string;
}

interface Props {
  menuLinks: MenuLink[];
  socialLinks: SocialLinks[];
}

const Footer: React.FC<Props> = ({
  menuLinks,
  socialLinks,
}): React.ReactElement => (
  <footer
    className={FooterStyles.footer}
    sx={{
      backgroundColor: 'nav',
      color: 'navText',
    }}
  >
    <div className={FooterStyles.footerNav}>
      <ul>
        {menuLinks.map((item: MenuLink) => (
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
