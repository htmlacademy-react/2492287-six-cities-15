import { OfferSortType, TOffer } from '../../const';
import { TErrorLoginDetail } from '../const';

export const concatErrors = (errors: TErrorLoginDetail[]) => {
  let result = '';
  if (errors){
    errors.forEach((item) => {
      item?.messages?.forEach((mess: string) => {
        result += `${mess}\r\n`;
      });
    });
  }
  return result;
};

export const sortOffers = (offerSortType: OfferSortType, offers: TOffer[]) => {
  switch(offerSortType){
    case OfferSortType.PriceLowHigh: return [...offers].sort((offer1, offer2) => offer1.price - offer2.price);
    case OfferSortType.PriceHighLow: return [...offers].sort((offer1, offer2) => offer2.price - offer1.price);
    case OfferSortType.TopRated: return [...offers].sort((offer1, offer2) => offer2.rating - offer1.rating);
    default: return offers;
  }
};

export const setOfferFavorite = (offer: TOffer, isFavorite: boolean) => {
  offer.isFavorite = isFavorite;
};
