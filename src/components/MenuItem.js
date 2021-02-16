/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

const MenuItem = ({ item }) => (
  <Link to={item.link} sx={{ variant: 'styles.a' }}>
    {item.name}
  </Link>
);

export default MenuItem;
