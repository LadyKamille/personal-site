import { Image } from 'theme-ui';

import ResponsiveImageStyles from './ResponsiveImage.module.css';

const ResponsiveImage = ({ src }: { src: string }) => (
  <Image className={ResponsiveImageStyles.img} src={src} />
);

export default ResponsiveImage;
