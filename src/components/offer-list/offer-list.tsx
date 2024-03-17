import { FC } from 'react';
import { getCardListClassName } from './lib';
import { TOffer } from '../../const';
import { OfferCard } from '../offer-card';
import { TOfferCardType } from '../offer-card/const';

export type TOfferListProps = {
  offers: TOffer[];
  offerCardType: TOfferCardType;
  onHover?: (offer: TOffer | null) => void ;
}

export const OfferList: FC<TOfferListProps> = ({offers, offerCardType, onHover}) => {
  if (!offers){
    return null;
  }

  const listClass = getCardListClassName(offerCardType);

  return (
    <div className={listClass} data-testid='offer-list'>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onHover={onHover}
            offerCardType={offerCardType}
            data-testid='offer-item'
          />
        ))
      }
    </div>
  );
};
