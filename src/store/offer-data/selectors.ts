import { sortOffers } from '../lib';
import { createSelector } from 'reselect';
import { TState } from '../const';
import { NameSpace } from '../../const';

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
