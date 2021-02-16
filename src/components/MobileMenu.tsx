import React from 'react';
import { MenuButton } from 'theme-ui';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <MenuButton
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Mobile Navigation Button"
    />
  );
};

export default MobileMenu;
