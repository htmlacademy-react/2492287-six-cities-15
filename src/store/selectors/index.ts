import { sortOffers } from '../lib';
import { TInitialState } from '../reducer';
import { createSelector } from 'reselect';

export const getOffer = (state: TInitialState) => state.offer;
export const getOffers = (state: TInitialState) => state.offers;
export const getIsOfferLoading = (state: TInitialState) => state.isOfferLoading;
export const getIsOfferDataLoading = (state: TInitialState) => state.isOffersDataLoading;
export const getNearOffers = (state: TInitialState) => state.nearOffers;
export const getActiveCity = (state: TInitialState) => state.activeCity;
export const getAuthorizationStatus = (state: TInitialState) => state.authorizationStatus;
export const getReviews = (state: TInitialState) => state.reviews;
export const getFavorites = (state: TInitialState) => state.favorites;
export const getUser = (state: TInitialState) => state.user;
export const getOfferSortType = (state: TInitialState) => state.offerSortType;

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
