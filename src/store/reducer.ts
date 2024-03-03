import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCity, loadReviews, loadFavorites, loadNearOffers, loadOffer, loadOffers, requireAuthorization, setFavorite, setOfferDataLoadingStatus, setOffersDataLoadingStatus, saveUser } from './action';
import { AuthorizationStatus, TCity, TReviewFull, TOffer, TOfferFull, cities, TUserData } from '../const';
import { fetchOfferAction, loginAction, setFavoriteAction } from './api-action';
import { AxiosError, isAxiosError } from 'axios';
import { concatErrors } from './lib';
import { TErrorLogin } from './const';
import { toast } from 'react-toastify';

type TLoading = 'idle' | 'loading' | 'failed';

type InitalState = {
  activeCity: TCity;
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  nearOffers: TOffer[];
  favorites: TOffer[];
  isOfferDataLoading: boolean;
  reviews: TReviewFull[];
  offer: TOfferFull | null;
  favorite?: TOfferFull;
  review?: TReviewFull;
  user: TUserData | null;
  offerLoadingStatus: TLoading;
  loginError: string;
  favoriteLoadingStatus: TLoading;
}

const initialState: InitalState = {
  activeCity: cities[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  nearOffers: [],
  favorites: [],
  reviews: [],
  offer: null,
  user: null,
  offerLoadingStatus: 'idle',
  loginError: '',
  favoriteLoadingStatus: 'idle'
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

      const favoriteIndex = state.favorites.findIndex((item) => item.id === action.payload.id);

      if (favoriteIndex > -1){
        state.favorites.splice(favoriteIndex, 1);
      } else if (action.payload.isFavorite){
        state.favorites.push(action.payload);
      }

      const offer = state.offers.find((item) => item.id === action.payload.id);
      if (offer){
        offer.isFavorite = action.payload.isFavorite;
      }

      if (state.offer && (state.offer.id === action.payload.id)){
        state.offer.isFavorite = action.payload.isFavorite;
      }
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.review = action.payload;
    })
    .addCase(fetchOfferAction.fulfilled, (state) => {
      state.offerLoadingStatus = 'idle';
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.offerLoadingStatus = 'loading';
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.offerLoadingStatus = 'failed';
      state.offer = null;
    })
    .addCase(setFavoriteAction.fulfilled, (state) => {
      state.favoriteLoadingStatus = 'idle';
    })
    .addCase(setFavoriteAction.pending, (state) => {
      state.favoriteLoadingStatus = 'loading';
    })
    .addCase(setFavoriteAction.rejected, (state) => {
      state.favoriteLoadingStatus = 'failed';
    })
    .addCase(loginAction.pending, (state) => {
      state.loginError = '';
    })
    .addCase(loginAction.rejected, (state, action) => {
      if (isAxiosError(action.payload)){
        const axiosErr = action.payload as AxiosError;
        const errorLogin = axiosErr.response?.data as TErrorLogin;
        state.loginError = concatErrors(errorLogin.details);
        toast.error(state.loginError);
      }
    });
});
