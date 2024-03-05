import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TAuthData, AuthorizationStatus, TState,
  TOffer, TOfferFull, TUserData, TReviewFull, TReview } from '../const';
import { AxiosInstance } from 'axios';
import { addReview, loadReviews, loadFavorites, loadNearOffers,
  loadOffer, loadOffers, redirectToRoute, requireAuthorization, saveUser,
  setOffersDataLoadingStatus, setFavoritesOff, setFavoriteInOffers,
  setFavoriteOffer, setFavoriteInNearOffers, addFavorite, delFavorite } from './action';
import { ApiRoute, AppRoute } from '../app/routes';
import { dropToken, saveToken } from '../services/token';
import { generatePath } from 'react-router-dom';

export const fetchOffersAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(ApiRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOfferFull>(generatePath(ApiRoute.Offer, {id}));
    dispatch(loadOffer(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(generatePath(ApiRoute.NearOffers, {offerId}));
    dispatch(loadNearOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(ApiRoute.Favorites);
    dispatch(loadFavorites(data));
  },
);

export const setFavoriteAction = createAsyncThunk<void, {offerId: string; status: boolean},
{dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/setFavorite',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<TOfferFull>(generatePath(ApiRoute.FavoriteSet, {offerId, status: status ? '1' : '0'}));

    dispatch(setFavoriteOffer(data));
    dispatch(setFavoriteInOffers(data));
    dispatch(setFavoriteInNearOffers(data));
    if (data.isFavorite) {
      dispatch(addFavorite(data));
    } else {
      dispatch(delFavorite(data));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TUserData>(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUser(data));
      dispatch(fetchFavoritesAction());
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try{
      const {data} = await api.post<TUserData>(ApiRoute.Login, {email, password});
      const token = data.token;
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUser(data));
      dispatch(fetchFavoritesAction());
      dispatch(redirectToRoute(AppRoute.Root));
    }catch (error: unknown){
      dispatch(saveUser(null));
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      return rejectWithValue(error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try{
      await api.delete(ApiRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(saveUser(null));
      dispatch(redirectToRoute(AppRoute.Login));
      dispatch(setFavoritesOff());
    }catch {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TReviewFull[]>(generatePath(ApiRoute.Comments, {offerId}));
    data.sort((review1, review2) => new Date(review2?.date).getTime() - new Date(review1?.date).getTime());
    dispatch(loadReviews(data));
  },
);

export const addReviewAction = createAsyncThunk<void, TReview, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/addReview',
  async (review, {dispatch, extra: api}) => {
    const {data} = await api.post<TReviewFull>(generatePath(ApiRoute.Comments, {offerId: review.offerId}),
      {comment: review.comment, rating: review.rating}
    );
    dispatch(addReview(data));
    dispatch(fetchReviewsAction(review.offerId));
  },
);
