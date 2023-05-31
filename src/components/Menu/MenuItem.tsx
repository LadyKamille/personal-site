/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import React from 'react';

import { MenuLink } from './Menu';

interface Props {
  item: MenuLink;
}

const MenuItem: React.FC<Props> = ({ item }): React.ReactElement =>
  item.external ? (
    <a href={item.link} sx={{ color: 'navText' }}>
      {item.name}
    </a>
  ) : (
    <Link to={item.link} sx={{ variant: 'styles.a', color: 'navText' }}>
      {item.name}
    </Link>
  );

export default MenuItem;
