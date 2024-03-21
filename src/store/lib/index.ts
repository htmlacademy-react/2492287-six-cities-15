import { OfferSortType, TOffer, TOffers } from '../../const';

export const sortOffers = (offerSortType: OfferSortType, offers: TOffer[]) => {
  switch(offerSortType){
    case OfferSortType.PriceLowHigh: return [...offers].sort((offer1, offer2) => offer1.price - offer2.price);
    case OfferSortType.PriceHighLow: return [...offers].sort((offer1, offer2) => offer2.price - offer1.price);
    case OfferSortType.TopRated: return [...offers].sort((offer1, offer2) => offer2.rating - offer1.rating);
    default: return offers;
  }
};
export const setOfferFavorite = (offers: TOffers, offerId: string, isFavorite: boolean) => {
  const offer = offers.find((item) => item.id === offerId);
  if (offer){
    offer.isFavorite = isFavorite;
  }
};
