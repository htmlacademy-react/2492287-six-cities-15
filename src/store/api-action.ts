import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer, TOfferFull, TUserData, TReviewFull,
  TReview, TOffers, TReviewFulls } from '../const';
import { redirectToRoute, setFavoritesOff } from './action';
import { ApiRoute, AppRoute } from '../app/routes';
import { dropToken, saveToken } from '../services/token';
import { TActionUtils, TAuthData } from './const';

export const fetchOfferAction = createAsyncThunk<TOfferFull, string, TActionUtils>(
  'data/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOfferFull>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<TOffers, undefined, TActionUtils>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Offers);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<TOffers, string, TActionUtils>(
  'data/fetchNearOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOffers>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOffers, undefined, TActionUtils>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Favorites);
    return data;
  },
);

export const setFavoriteAction = createAsyncThunk<TOffer,
  {offerId: string; status: boolean}, TActionUtils>(
    'data/setFavorite',
    async ({offerId, status}, {extra: api}) => {
      const {data} = await api.post<TOfferFull>(`${ApiRoute.Favorites}/${offerId}/${status ? '1' : '0'}`);
      return data;
    },
  );

export const fetchReviewsAction = createAsyncThunk<TReviewFulls, string, TActionUtils>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviewFull[]>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<TReviewFull, TReview, TActionUtils>(
  'data/addReview',
  async (review, {extra: api}) => {
    const {data} = await api.post<TReviewFull>(`${ApiRoute.Comments}/${review.offerId}`,
      {comment: review.comment, rating: review.rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<TUserData, undefined, TActionUtils>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TUserData>(ApiRoute.Login);
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, TActionUtils>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, TActionUtils>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dispatch(setFavoritesOff());
    dropToken();
  },
);
