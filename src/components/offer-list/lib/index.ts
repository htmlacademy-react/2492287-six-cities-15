import { TOfferCardType } from '../../offer-card/const';

export const getCardListClassName = (offerCardType: TOfferCardType) => {
  switch(offerCardType){
    case 'City': return 'cities__places-list places__list tabs__content';
    case 'Favorite': return 'favorites__places';
    case 'Near': return 'near-places__list places__list';
    default: return '';
  }
};
