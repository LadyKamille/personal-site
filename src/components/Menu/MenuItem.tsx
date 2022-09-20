/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import { Link } from 'gatsby';

const MenuItem = ({ item }) =>
  item.external ? (
    <Styled.a href={item.link} sx={{ color: 'navText' }}>
      {item.name}
    </Styled.a>
  ) : (
    <Link to={item.link} sx={{ variant: 'styles.a', color: 'navText' }}>
      {item.name}
    </Link>
  );

export default MenuItem;
