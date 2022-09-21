/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';

import { MenuLink } from './Menu';

interface Props {
  item: MenuLink;
}

const MenuItem: React.FC<Props> = ({ item }): React.ReactElement =>
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
