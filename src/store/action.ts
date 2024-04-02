import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, TCity, TUserData, OfferSortType } from '../const';
import { AppRoute } from '../app';

export const changeCity = createAction<TCity>('cities/changeCity');
export const clearOffer = createAction('data/clearOffer');
export const clearFavoriteOffer = createAction('data/clearFavoriteOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');
export const saveUser = createAction<TUserData | null>('cities/saveUser');
export const setFavoritesOff = createAction('data/setFavoritesOff');
export const setOfferSortType = createAction<OfferSortType>('city/setOfferSortType');
