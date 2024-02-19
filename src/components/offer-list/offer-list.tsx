import { FC } from 'react';
import { CityOfferCard } from '../city-offer-card';
import { TOffer } from '../../mocks/offers';

export type TOfferListProps = {
  data: TOffer[]
}

export const OfferList: FC<TOfferListProps> = ({data}) => {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        data.map((offer: TOffer) => (
          <CityOfferCard
            price={offer.price}
            currency={offer.currency}
            isPremium={offer.isPremium}
            isBookmark={offer.isBookmark}
            title={offer.title}
            offerType={offer.offerType}
            ratingPercent={offer.ratingPercent}
            imageName={offer.imageName}
          />
        ))
      }
    </div>
  );
};
