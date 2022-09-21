import React from 'react';
import { Grid, Image } from 'theme-ui';

import GalleryStyles from './Gallery.module.css';

interface Img {
  src: string;
}

interface Props {
  images: Img[];
}

const Gallery: React.FC<Props> = ({ images }): React.ReactElement => {
  const imageNum = images.length;

  return (
    <Grid
      className={GalleryStyles.gallery}
      gap={0}
      columns={[1, Math.round(imageNum / 2), imageNum]}
    >
      {images.map((image: Img, index: number) => (
        <Image
          className={GalleryStyles.galleryImg}
          src={image.src}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default Gallery;
