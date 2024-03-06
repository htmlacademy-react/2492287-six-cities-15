import { FC } from 'react';
import { OfferCardType } from '../offer-card/lib';
import { OfferCard } from '../offer-card';
import { getCardListClassName } from './lib';
import { TOffer } from '../../const';

export type TOfferListProps = {
  offers: TOffer[];
  offerCardType: OfferCardType;
  onHover?: (offer: TOffer | null) => void ;
}

export const OfferList: FC<TOfferListProps> = ({offers, offerCardType, onHover}) => {
  if (!offers){
    return null;
  }

  const listClass = getCardListClassName(offerCardType);

  return (
    <div className={listClass}>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onHover = {onHover}
            offerCardType={offerCardType}
          />
        ))
      }
    </div>
  );
};
