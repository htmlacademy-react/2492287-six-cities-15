import { OfferSortType, cities } from '../../const';
import { expectedEmptyOfferState, expectedFavorites, expectedOfferFavoritesState, expectedOfferFull, expectedOfferState, expectedOffers } from '../../utils/mocks';
import { changeCity, clearFavoriteOffer, setFavoritesOff, setOfferSortType } from '../action';
import { fetchFavoritesAction, fetchNearOffersAction, fetchOfferAction, fetchOffersAction, addFavoriteAction } from '../api-actions';
import { offerData } from './offer-data';

describe('OfferData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = offerData.reducer(expectedEmptyOfferState, emptyAction);
    expect(result).toEqual(expectedEmptyOfferState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = offerData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedEmptyOfferState);
  });

  it('should set "activeCity" to "cities[1]" with "changeCity"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.activeCity = cities[1];
    const result = offerData.reducer(state, changeCity(cities[1]));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true" with "fetchOffersAction.pending"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const result = offerData.reducer(state, fetchOffersAction.pending);

    expect(result.isOffersDataLoading).toBeTruthy();
  });

  it('should set "isOffersDataLoading" to "false" with "fetchOffersAction.rejected"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    state.isOffersDataLoading = true;
    const result = offerData.reducer(state, fetchOffersAction.rejected);

    expect(result.isOffersDataLoading).toBeFalsy();
  });

  it('should set "offers" to array with TOffer, "isOffersDataLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.offers = expectedOffers;
    expectedState.isOffersDataLoading = false;

    const result = offerData.reducer(state, fetchOffersAction.fulfilled(expectedOffers, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading" to "true" with "fetchOfferAction.pending"', () => {
    const state = structuredClone(expectedEmptyOfferState);

    const result = offerData.reducer(state, fetchOfferAction.pending);
    expect(result.isOfferDataLoading).toBeTruthy();
  });
  it('should set "isOfferDataLoading" to "false" with "fetchOfferAction.rejected"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    state.isOfferDataLoading = true;

    const result = offerData.reducer(state, fetchOfferAction.rejected);
    expect(result.isOfferDataLoading).toBeFalsy();
  });
  it('should set "offer" to offer, "isOfferDataLoading" to "false" with "fetchOfferAction.fulfilled"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.offer = expectedOfferFull;
    expectedState.isOffersDataLoading = false;

    const result = offerData.reducer(state, fetchOfferAction.fulfilled(expectedOfferFull, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffers" to array with TOffer with "fetchNearOffersAction.fulfilled"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.nearOffers = Array.from(expectedOffers);

    const result = offerData.reducer(state, fetchNearOffersAction.fulfilled(expectedOffers, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffers" to array with TOffer with "fetchNearOffersAction.pending"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.nearOffers = [];

    const result = offerData.reducer(state, fetchNearOffersAction.pending);
    expect(result.isNearOffersDataLoading).toBeTruthy();
  });

  it('should set "nearOffers" to array with TOffer with "fetchNearOffersAction.rejected"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const expectedState = structuredClone(expectedEmptyOfferState);
    expectedState.nearOffers = [];

    const result = offerData.reducer(state, fetchNearOffersAction.rejected);
    expect(result.isNearOffersDataLoading).toBeFalsy();
  });

  it('should set "favorites" to array TOffer with "fetchFavoritesAction.fulfilled"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    expectedState.favorites = expectedFavorites;

    const result = offerData.reducer(state, fetchFavoritesAction.fulfilled(expectedFavorites, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoritesDataLoading" to true with "fetchFavoritesAction.pending"', () => {
    const state = structuredClone(expectedOfferState);

    const result = offerData.reducer(state, fetchFavoritesAction.pending);
    expect(result.isFavoritesDataLoading).toEqual(true);
  });

  it('should set "isFavoritesDataLoading" to false with "fetchFavoritesAction.rejected"', () => {
    const state = structuredClone(expectedOfferState);

    const result = offerData.reducer(state, fetchFavoritesAction.rejected);
    expect(result.isFavoritesDataLoading).toEqual(false);
  });

  it('should set "offer.isFavorite" to true, find and set offer in (offers, nearOffers) and set "isFavorite" to true, add to favorites with addtFavoriteAction.fulfilled"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    expectedState.favorites = [expectedState.offers[0]];

    const result = offerData.reducer(state, addFavoriteAction.fulfilled(state.offers[0], '', {offerId: state.offers[0].id, status: true}));
    expect(result).toEqual(expectedState);
  });

  it('should set "isAddFavoriteDataLoading" to "true" with "addFavoriteAction.pending"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    const result = offerData.reducer(state, addFavoriteAction.pending);

    expect(result.isAddFavoriteLoading).toBeTruthy();
  });

  it('should set "isAddFavoriteDataLoading" to "false" with "addFavoriteAction.rejected"', () => {
    const state = structuredClone(expectedEmptyOfferState);
    state.isAddFavoriteLoading = true;
    const result = offerData.reducer(state, addFavoriteAction.rejected);

    expect(result.isAddFavoriteLoading).toBeFalsy();
  });

  it('should set "offer.isFavorite" to false, find and set offer in (offers, nearOffers) and set "isFavorite" to false, del from favorites with "addFavoriteAction.fulfilled"', () => {
    const state = structuredClone(expectedOfferFavoritesState);
    const expectedState = structuredClone(state);
    expectedState.favorites = [];
    const result = offerData.reducer(state, addFavoriteAction.fulfilled(state.favorites[0], '', {offerId: state.favorites[0].id, status: false}));
    expect(result?.favorites).toEqual(expectedState?.favorites);
  });

  it('should clear "favorites" array, find and set {isFavorite} in (offers, nearOffers) with "setFavoritesOff.fulfilled"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    expectedState.favorites = [];
    expectedState.offers[0].isFavorite = false;
    expectedState.nearOffers[0].isFavorite = false;

    const result = offerData.reducer(state, setFavoritesOff);
    expect(result).toEqual(expectedState);
  });

  it('should set "Price low to high" with "setOfferSortType"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    expectedState.offerSortType = OfferSortType.PriceLowHigh;

    const result = offerData.reducer(state, setOfferSortType(OfferSortType.PriceLowHigh));
    expect(result.offerSortType).toEqual(expectedState.offerSortType);
  });

  it('should set "Price high to low" with "setOfferSortType"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    expectedState.offerSortType = OfferSortType.PriceHighLow;

    const result = offerData.reducer(state, setOfferSortType(OfferSortType.PriceHighLow));
    expect(result.offerSortType).toEqual(expectedState.offerSortType);
  });
  it('should set "isFavorite" in offer to false with "clearFavoriteOffer"', () => {
    const state = structuredClone(expectedOfferState);
    const expectedState = structuredClone(expectedOfferState);
    if (expectedState.offer){
      expectedState.offer.isFavorite = false;
    }

    const result = offerData.reducer(state, clearFavoriteOffer);
    expect(result.offer?.isFavorite).toBeFalsy();
  });
  it('should not fall when offer is null with "clearFavoriteOffer"', () => {
    const state = structuredClone(expectedEmptyOfferState);

    const result = offerData.reducer(state, clearFavoriteOffer);
    expect(result.offer).toBeNull();
  });
});
