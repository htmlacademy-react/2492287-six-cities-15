import { FC } from 'react';

export type TOfferGalleryProps = {
  images: string[];
}

export const OfferGallery: FC<TOfferGalleryProps> = ({images}) => (
  <div className='offer__gallery-container container'>
    <div className='offer__gallery'>
      {images.map((imageSrc) => (
        <div className='offer__image-wrapper' key={imageSrc}>
          <img
            className='offer__image'
            src={imageSrc}
            alt='Photo studio'
          />
        </div>
      ))}
    </div>
  </div>
);
