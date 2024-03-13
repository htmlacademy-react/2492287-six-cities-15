import { createSlice } from '@reduxjs/toolkit';
import { OfferSortType, TCity, TOfferFull, TOffers, cities } from '../../const';
import { changeCity, clearOffer, setFavoritesOff, setOfferSortType } from '../action';
import { fetchFavoritesAction, fetchNearOffersAction,
  fetchOfferAction, fetchOffersAction, setFavoriteAction } from '../api-action';
import { setOfferFavorite } from '../lib';

type TOfferState = {
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
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.isNearOffersDataLoading = false;
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.isFavoritesDataLoading = false;
        state.favorites = action.payload;

        state.offers.forEach((offer) => {
          state.favorites.forEach((favorite) => {
            if (favorite.id === offer.id) {
              offer.isFavorite = favorite.isFavorite;
            }
          });
        });
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      })
      .addCase(setFavoriteAction.fulfilled, (state, action) => {
        if (state?.offer?.id === action.payload.id){
          state.offer.isFavorite = action.payload.isFavorite;
        }

        setOfferFavorite(state.offers, action.payload.id, action.payload.isFavorite);
        setOfferFavorite(state.nearOffers, action.payload.id, action.payload.isFavorite);

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          const offerIndex = state.nearOffers.findIndex((item) => item.id === action.payload.id);
          state.favorites.splice(offerIndex, 1);
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
      })
      .addCase(clearOffer, (state) => {
        state.offer = null;
      });
  }
});
