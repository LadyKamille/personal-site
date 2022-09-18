import { Badge } from 'theme-ui';
import TagStyles from './Tags.module.css';

const Tags = ({ tags }) => {
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
