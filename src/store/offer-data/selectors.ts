import { sortOffers } from '../lib';
import { createSelector } from 'reselect';
import { TState } from '../const';
import { NameSpace, OfferConfig, TOffer, TOffers } from '../../const';

export const getOffer = (state: TState) => state[NameSpace.Offer].offer;
export const getOffers = (state: TState) => state[NameSpace.Offer].offers;
export const getIsOfferDataLoading = (state: TState) => state[NameSpace.Offer].isOfferDataLoading;
export const getIsOffersDataLoading = (state: TState) => state[NameSpace.Offer].isOffersDataLoading;
export const getNearOffers = (state: TState) => state[NameSpace.Offer].nearOffers;
export const getActiveCity = (state: TState) => state[NameSpace.Offer].activeCity;
export const getFavorites = (state: TState) => state[NameSpace.Offer].favorites;
export const getOfferSortType = (state: TState) => state[NameSpace.Offer].offerSortType;

export const getCityOffers = createSelector(
  [
    getOffers,
    getActiveCity
  ],
  (offers, city) => offers.filter((item) => item.city.name === city.name)
);

export const getSortedOffers = createSelector(
  [
    getCityOffers,
    getOfferSortType
  ],
  (offers, sort) => sortOffers(sort, offers)
);

export const getNearOffersForMap = createSelector(
  [
    getOffer,
    getNearOffers
  ],
  (offer, nearOffers) => {
    const offers: TOffers = [offer as TOffer];

    for (let i = 0; i < nearOffers.length && i < 3; i++) {
      offers.push(nearOffers[i]);
    }
    return offers;
  }
);

export const getImagesForOffer = createSelector(
  [
    getOffer
  ],
  (offer) => {

    if (offer) {
      return offer.images.slice(0, OfferConfig.imagesCount);
    }
    return [];
  }
);

export const getNearOffersForCard = createSelector(
  [
    getOffer,
    getNearOffers
  ],
  (offer, nearOffers) => {
    const offers: TOffers = nearOffers.slice(0, OfferConfig.nearOffersCount);
    if (offer){
      offers.push(offer);
    }
    return offers;
  }
);


