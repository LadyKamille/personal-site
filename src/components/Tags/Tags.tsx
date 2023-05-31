import { Badge } from 'theme-ui';

import * as TagStyles from './Tags.module.css';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }): React.ReactElement => {
  if (!tags.length) {
    return <></>;
  }

  return (
    <ul className={TagStyles.tags}>
      {tags.map((tagName, index) => {
        return (
          <li className={TagStyles.tag} key={`${tagName}-${index}`}>
            <Badge variant="primary">#{tagName}</Badge>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
