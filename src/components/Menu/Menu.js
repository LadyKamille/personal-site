/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import MobileMenu from './MobileMenu';
import MenuItem from './MenuItem';
import MenuStyles from './Menu.module.css';

const Menu = ({ menuItems, title }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={MenuStyles.primaryNav}
      sx={{
        backgroundColor: 'nav',
      }}
    >
      <ul className={mobileMenuIsOpen ? MenuStyles.open : ''}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <MenuItem item={item} />
          </li>
        ))}
        <li
          className={MenuStyles.mobileNavigationItem}
          key="mobile-button"
          sx={{
            color: 'navText',
          }}
        >
          <span className={MenuStyles.title}>{title}</span>
          <MobileMenu
            isOpen={mobileMenuIsOpen}
            setIsOpen={setMobileMenuIsOpen}
          />
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
