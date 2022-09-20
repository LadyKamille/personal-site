import { Grid, Image } from 'theme-ui';

import GalleryStyles from './Gallery.module.css';

const Gallery = ({ images }) => {
  const imageNum = images.length;

  return (
    <Grid
      className={GalleryStyles.gallery}
      gap={0}
      columns={[1, Math.round(imageNum / 2), imageNum]}
    >
      {images.map((image, index) => (
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
