import { createSlice } from '@reduxjs/toolkit';
import { OfferSortType, TCity, TOfferFull, TOffers, cities } from '../../const';
import { changeCity, clearFavoriteOffer, clearOffer, setFavoritesOff, setOfferSortType } from '../action';
import { fetchFavoritesAction, fetchNearOffersAction,
  fetchOfferAction, fetchOffersAction, addFavoriteAction } from '../api-actions';
import { setOfferFavorite } from '../lib';

export type TOfferState = {
  activeCity: TCity;
  offer: TOfferFull | null;
  isOfferDataLoading: boolean;
  offers: TOffers;
  isOffersDataLoading: boolean;
  nearOffers: TOffers;
  isNearOffersDataLoading: boolean;
  favorites: TOffers;
  isFavoritesDataLoading: boolean;
  offerSortType: OfferSortType;
}

const initialState: TOfferState = {
  activeCity: cities[0],
  offer: null,
  isOfferDataLoading: false,
  offers: [],
  isOffersDataLoading: false,
  nearOffers: [],
  isNearOffersDataLoading: false,
  favorites: [],
  isFavoritesDataLoading: false,
  offerSortType: OfferSortType.Popular
};

export const offerData = createSlice({
  name: 'offer',
  initialState: initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action) => {
        state.activeCity = action.payload;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferDataLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.offer = null;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        if (state?.offer?.id === action.payload.id){
          state.offer.isFavorite = action.payload.isFavorite;
        }
        setOfferFavorite(state.offers, action.payload.id, action.payload.isFavorite);
        setOfferFavorite(state.nearOffers, action.payload.id, action.payload.isFavorite);

        if (action.payload.isFavorite) {
          if (!state.favorites.includes(action.payload)){
            state.favorites.push(action.payload);
          }
        } else {
          const offerIndex = state.favorites.findIndex((item) => item.id === action.payload.id);
          if (offerIndex > -1){
            state.favorites.splice(offerIndex, 1);
          }
        }
      })
      .addCase(setFavoritesOff, (state) => {
        state.favorites.splice(0, state.favorites.length);
        state.offers.map((item) => {
          item.isFavorite = false;
        });
        state.nearOffers.map((item) => {
          item.isFavorite = false;
        });
      })
      .addCase(setOfferSortType, (state, action) => {
        state.offerSortType = action.payload;
      })
      .addCase(clearOffer, (state) => {
        state.offer = null;
      })
      .addCase(clearFavoriteOffer, (state) => {
        if (state.offer){
          state.offer.isFavorite = false;
        }
      });
  }
});
