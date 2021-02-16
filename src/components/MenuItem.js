import React from 'react';
import { jsx, Link } from 'theme-ui';

const MenuItem = ({ item }) => (
  <Link
    to={item.link}
    sx={{
      variant: 'styles.navlink',
      p: 2,
    }}
  >
    {item.name}
  </Link>
);

export default MenuItem;
