import React from 'react';
import { MenuButton } from 'theme-ui';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<Props> = ({
  isOpen,
  setIsOpen,
}): React.ReactElement => {
  return (
    <MenuButton
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Mobile Navigation Button"
    />
  );
};

export default MobileMenu;
