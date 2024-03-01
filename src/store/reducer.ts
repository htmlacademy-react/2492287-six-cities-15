import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCity, loadReviews, loadFavorites, loadNearOffers, loadOffer, loadOffers, requireAuthorization, setErrorText, setFavorite, setOfferDataLoadingStatus, setOffersDataLoadingStatus, saveUser } from './action';
import { AuthorizationStatus, TCity, TReviewFull, TOffer, TOfferFull, cities, TUserData } from '../const';

type InitalState = {
  activeCity: TCity;
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  nearOffers: TOffer[];
  favorites: TOffer[];
  isOfferDataLoading: boolean;
  errorText: string;
  reviews: TReviewFull[];
  offer: TOfferFull | null;
  favorite?: TOfferFull;
  review?: TReviewFull;
  user: TUserData | null;
}

const initialState: InitalState = {
  activeCity: cities[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  nearOffers: [],
  favorites: [],
  errorText: '',
  reviews: [],
  offer: null,
  user: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.city;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setFavorite, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setErrorText, (state, action) => {
      state.errorText = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.review = action.payload;
    });
});
