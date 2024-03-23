import { FC } from 'react';

export type TOfferGalleryProps = {
  images: string[];
}

const ALT_IMAGE_TEXT = 'Photo studio';

export const OfferGallery: FC<TOfferGalleryProps> = ({images}) => (
  <div className='offer__gallery-container container' data-testid='offer-gallery'>
    <div className='offer__gallery'>
      {images.map((imageSrc) => (
        <div
          className='offer__image-wrapper'
          key={imageSrc}
          data-testid='offer-image'
        >
          <img
            className='offer__image'
            src={imageSrc}
            alt={ALT_IMAGE_TEXT}
          />
        </div>
      ))}
    </div>
  </div>
);
