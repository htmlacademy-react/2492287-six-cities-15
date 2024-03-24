import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer, TOfferFull, TUserData, TReviewFull,
  TReview, TOffers, TReviewFulls } from '../const';
import { clearFavoriteOffer, redirectToRoute, setFavoritesOff } from './action';
import { ApiRoute, AppRoute } from '../app/routes';
import { dropToken, saveToken } from '../services/token';
import { SliceName, TActionUtils, TAuthData } from './const';

export const fetchOfferAction = createAsyncThunk<TOfferFull, string, TActionUtils>(
  `${SliceName.OfferData}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOfferFull>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<TOffers, undefined, TActionUtils>(
  `${SliceName.OfferData}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Offers);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<TOffers, string, TActionUtils>(
  `${SliceName.OfferData}fetchNearOffers`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOffers>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOffers, undefined, TActionUtils>(
  `${SliceName.OfferData}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Favorite);
    return data;
  },
);

export const addFavoriteAction = createAsyncThunk<TOffer,
  {offerId: string; status: boolean}, TActionUtils>(
    `${SliceName.OfferData}/addFavorite`,
    async ({offerId, status}, {extra: api}) => {
      const {data} = await api.post<TOfferFull>(`${ApiRoute.Favorite}/${offerId}/${status ? '1' : '0'}`);
      return data;
    },
  );

export const fetchReviewsAction = createAsyncThunk<TReviewFulls, string, TActionUtils>(
  `${SliceName.ReviewData}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviewFull[]>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<TReviewFull, TReview, TActionUtils>(
  `${SliceName.ReviewData}/addReview`,
  async (review, {extra: api}) => {
    const {data} = await api.post<TReviewFull>(`${ApiRoute.Comments}/${review.offerId}`,
      {comment: review.comment, rating: review.rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<TUserData, undefined, TActionUtils>(
  `${SliceName.UserProcess}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TUserData>(ApiRoute.Login);
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, TActionUtils>(
  `${SliceName.UserProcess}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(ApiRoute.Login, {email, password});

    saveToken(data.token);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, TActionUtils>(
  `${SliceName.UserProcess}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dispatch(setFavoritesOff());
    dispatch(clearFavoriteOffer());
    dropToken();
  },
);
