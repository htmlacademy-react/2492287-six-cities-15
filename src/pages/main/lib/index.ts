import { OfferSortType, TOffer } from '../../../const';

export const getSortedOffers = (offerSortType: OfferSortType, offers: TOffer[]) => {
  switch(offerSortType){
    case OfferSortType.PriceLowHigh: return [...offers].sort((offer1, offer2) => offer1.price - offer2.price);
    case OfferSortType.PriceHighLow: return [...offers].sort((offer1, offer2) => offer2.price - offer1.price);
    case OfferSortType.TopRated: return [...offers].sort((offer1, offer2) => offer2.rating - offer1.rating);
    default: return [...offers].sort((offer1, offer2) => offer1.id - offer2.id);
  }
};
