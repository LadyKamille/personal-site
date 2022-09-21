import { Image } from 'theme-ui';

import ResponsiveImageStyles from './ResponsiveImage.module.css';

interface Props {
  src: string;
}

const ResponsiveImage: React.FC<Props> = ({ src }): React.ReactElement => (
  <Image className={ResponsiveImageStyles.img} src={src} />
);

export default ResponsiveImage;
