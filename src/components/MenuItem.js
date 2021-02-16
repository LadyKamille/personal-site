import React from 'react';
import { Link } from 'theme-ui';

const MenuItem = ({ item }) => <Link to={item.link}>{item.name}</Link>;

export default MenuItem;
