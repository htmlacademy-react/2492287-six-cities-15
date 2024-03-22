import { OfferCardType, TOfferCardType } from '../../offer-card/const';

const CardListClass = {
  City: 'cities__places-list places__list tabs__content',
  Favorite: 'favorites__places',
  Near: 'near-places__list places__list'
};

export const getCardListClassName = (offerCardType: TOfferCardType) => {
  switch(offerCardType){
    case OfferCardType.City: return CardListClass.City;
    case OfferCardType.Favorite: return CardListClass.Favorite;
    case OfferCardType.Near: return CardListClass.Near;
    default: return '';
  }
};
