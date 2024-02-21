import { OfferCardType } from '../../offer-card/lib';

export const getCardListClassName = (offerCardType: OfferCardType) => {
  switch(offerCardType){
    case OfferCardType.City: return 'cities__places-list places__list tabs__content';
    case OfferCardType.Favorite: return 'favorites__places';
    case OfferCardType.Near: return 'near-places__list places__list';
    default: return '';
  }
};
