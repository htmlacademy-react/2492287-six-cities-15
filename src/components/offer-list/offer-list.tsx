import { FC, useState } from 'react';
import { OfferCardType } from '../offer-card/lib';
import { OfferCard } from '../offer-card';
import { getCardListClassName } from './lib';
import { TOffer } from '../../const';

export type TOfferListProps = {
  offers: TOffer[];
  offerCardType: OfferCardType;
}

export const OfferList: FC<TOfferListProps> = ({offers, offerCardType}) => {
  const [, setSelectedOffer] = useState<TOffer>();
  if (!offers){
    return null;
  }

  const listClass = getCardListClassName(offerCardType);

  return (
    <div className={listClass}>
      {
        offers.map((offer: TOffer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            setSelectedOffer = {setSelectedOffer}
            offerCardType={offerCardType}
          />
        ))
      }
    </div>
  );
};
