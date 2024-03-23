import { AuthorizationStatus, NameSpace, cities } from '../../const';
import { expectedOfferState } from '../../utils/mocks';
import { TReviewState } from '../review-data/review-data';
import { TUserState } from '../user-process/user-process';
import { getActiveCity, getCityOffers, getFavorites, getImagesForOffer, getIsNearOffersDataLoading, getIsOfferDataLoading, getIsOffersDataLoading, getNearOffers, getNearOffersForList, getNearOffersForMap, getOffer, getOfferSortType, getOffers, getOffersCities, getSortedOffers } from './offer-data-selectors';


describe('GameData selectors', () => {
  const state = {
    [NameSpace.Offer]: expectedOfferState,
    [NameSpace.Review]: {reviews: [], addReviewStatus: 'none', isFetchReviewsLoading: false} as TReviewState,
    [NameSpace.User]: {user: null, authorizationStatus: AuthorizationStatus.Unknown} as TUserState
  };

  it('should return offer from state', () => {
    const { offer } = state[NameSpace.Offer];
    const result = getOffer(state);
    expect(result).toEqual(offer);
  });


  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Offer];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return isOfferDataLoading from state', () => {
    const { isOfferDataLoading } = state[NameSpace.Offer];
    const result = getIsOfferDataLoading(state);
    expect(result).toEqual(isOfferDataLoading);
  });

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Offer];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return isOffersDataLoading from state', () => {
    const { isOffersDataLoading } = state[NameSpace.Offer];
    const result = getIsOffersDataLoading(state);
    expect(result).toEqual(isOffersDataLoading);
  });

  it('should return nearOffers from state', () => {
    const { nearOffers } = state[NameSpace.Offer];
    const result = getNearOffers(state);
    expect(result).toEqual(nearOffers);
  });

  it('should return activeCity from state', () => {
    const { activeCity } = state[NameSpace.Offer];
    const result = getActiveCity(state);
    expect(result).toEqual(activeCity);
  });

  it('should return favorites from state', () => {
    const { favorites } = state[NameSpace.Offer];
    const result = getFavorites(state);
    expect(result).toEqual(favorites);
  });

  it('should return offerSortType from state', () => {
    const { offerSortType } = state[NameSpace.Offer];
    const result = getOfferSortType(state);
    expect(result).toEqual(offerSortType);
  });

  it('should return offers of Paris from state', () => {
    const { offers } = state[NameSpace.Offer];
    const result = getCityOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return sorted offers from state', () => {
    const { offers } = state[NameSpace.Offer];
    const result = getSortedOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return near offers from state', () => {
    const { nearOffers } = state[NameSpace.Offer];
    const result = getNearOffersForList(state);
    expect(result).toEqual(nearOffers);
  });

  it('should return near for map from state', () => {
    const { nearOffers, offer } = state[NameSpace.Offer];
    const result = getNearOffersForMap(state);

    expect(result).toEqual([nearOffers[0], offer]);
  });

  it('should return images for offer from state', () => {
    const { offer } = state[NameSpace.Offer];
    const result = getImagesForOffer(state);
    expect(result).toEqual(offer?.images);
  });

  it('should return cities from state', () => {
    const result = getOffersCities(state);
    expect(result).toEqual([cities[0].name]);
  });

  it('should return true from state', () => {
    const result = getIsNearOffersDataLoading(state);
    expect(result).toBeFalsy();
  });
});
