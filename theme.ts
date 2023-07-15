import type { Theme } from 'theme-ui';

const darkBlue = `#007acc`;
const blueGray = `#282c35`;

const darkGray = `#232129`;

const lightPurple = `#D9BAE8`;
const darkPurple = `#151318`;

const white = `#FFFFFF`;

export const theme: Theme = {
  colors: {
    text: blueGray,
    primary: darkBlue,
    heading: blueGray,
    nav: darkBlue,
    navText: white,
    modes: {
      dark: {
        background: darkGray,
        nav: darkPurple,
        navText: lightPurple,
        text: white,
      },
    },
  },
};
