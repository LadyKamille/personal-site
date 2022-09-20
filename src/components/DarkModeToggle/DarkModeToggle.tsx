/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React from 'react';

import DarkModeStyles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
  const [mode, setMode] = useColorMode();

  return (
    <>
      <input
        id="toggle"
        className={DarkModeStyles.toggle}
        type="checkbox"
        checked={mode === 'dark'}
        onChange={(e) => {
          const next = mode === 'dark' ? 'light' : 'dark';
          setMode(next);
        }}
        aria-label="Toggle dark mode"
      />
    </>
  );
};

export default DarkModeToggle;
