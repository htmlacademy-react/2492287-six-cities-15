import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, TCity, TReviewFull, TOffer, TOfferFull, TUserData } from '../const';
import { AppRoute } from '../app';

export const changeCity = createAction<{city: TCity}>('cities/changeCity');
export const fillOffers = createAction<{offers: TOffer[]}>('cities/fillOffers');
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const loadOffer = createAction<TOfferFull | null>('data/loadOffer');
export const loadNearOffers = createAction<TOffer[]>('data/loadNearOffers');
export const loadFavorites = createAction<TOffer[]>('data/loadFavorites');
export const setFavorite = createAction<TOfferFull>('data/setFavorite');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');
export const saveUser = createAction<TUserData | null>('cities/saveUser');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
export const setErrorText = createAction<string>('cities/setErrorText');
export const loadReviews = createAction<TReviewFull[]>('data/loadReviews');
export const addReview = createAction<TReviewFull>('data/addComment');
