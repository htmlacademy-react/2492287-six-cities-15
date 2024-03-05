import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCity, loadReviews, loadFavorites,
  loadNearOffers, loadOffer, loadOffers, requireAuthorization,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus, saveUser, setFavoritesOff, setOfferSortType,
  setFavoriteOffer, setFavoriteInOffers, setFavoriteInNearOffers, addFavorite, delFavorite } from './action';
import { AuthorizationStatus, TCity, TReviewFull, TOffer,
  TOfferFull, cities, TUserData, OfferSortType } from '../const';
import { fetchOfferAction, loginAction, setFavoriteAction } from './api-action';
import { AxiosError, isAxiosError } from 'axios';
import { concatErrors, setOfferFavorite } from './lib';
import { TErrorLogin } from './const';
import { toast } from 'react-toastify';

type TLoading = 'idle' | 'loading' | 'failed';

export type TInitialState = {
  activeCity: TCity;
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  nearOffers: TOffer[];
  favorites: TOffer[];
  isOfferDataLoading: boolean;
  reviews: TReviewFull[];
  offer: TOfferFull | null;
  review?: TReviewFull;
  user: TUserData | null;
  isOfferLoading: boolean;
  loginError: string;
  favoriteLoadingStatus: TLoading;
  offerSortType: OfferSortType;
}

const initialState: TInitialState = {
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
  isOfferLoading: false,
  loginError: '',
  favoriteLoadingStatus: 'idle',
  offerSortType: OfferSortType.Popular
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
      state.offers.forEach((offer) => {
        state.favorites.forEach((favorite) => {
          if (favorite.id === offer.id) {
            offer.isFavorite = favorite.isFavorite;
          }
        });
      });
    })
    .addCase(setFavoriteOffer, (state, action) => {
      if (state?.offer?.id === action.payload.id){
        state.offer.isFavorite = action.payload.isFavorite;
      }
    })
    .addCase(setFavoriteInOffers, (state, action) => {
      const offer = state.offers.find((item) => item.id === action.payload.id);
      if (offer){
        setOfferFavorite(offer, action.payload.isFavorite);
      }
    })
    .addCase(setFavoriteInNearOffers, (state, action) => {
      const offer = state.nearOffers.find((item) => item.id === action.payload.id);
      if (offer){
        setOfferFavorite(offer, action.payload.isFavorite);
      }
    })
    .addCase(addFavorite, (state, action) => {
      state.favorites.push(action.payload);
    })
    .addCase(delFavorite, (state, action) => {
      const offerIndex = state.nearOffers.findIndex((item) => item.id === action.payload.id);
      state.favorites.splice(offerIndex, 1);
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
      state.isOfferLoading = false;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.isOfferLoading = false;
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
    })
    .addCase(setFavoritesOff, (state) => {
      state.favorites.splice(0, state.favorites.length);
      state.offers.map((item) => {
        item.isFavorite = false;
      });
    })
    .addCase(setOfferSortType, (state, action) => {
      state.offerSortType = action.payload;
    });
});
