import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TAuthData, AuthorizationStatus, TState, TOffer, TOfferFull, TUserData, TReviewFull, TReview } from '../const';
import { AxiosError, AxiosInstance, isAxiosError } from 'axios';
import { addReview, loadReviews, loadFavorites, loadNearOffers, loadOffer, loadOffers, redirectToRoute, requireAuthorization, saveUser, setErrorText, setFavorite, setOffersDataLoadingStatus } from './action';
import { ApiRoute, AppRoute } from '../app/routes';
import { dropToken, saveToken } from '../services/token';
import { generatePath } from 'react-router-dom';
import { concatErrors } from './lib';
import { TError, TErrorLogin } from './const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(ApiRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try{
      dispatch(setErrorText(''));
      const {data} = await api.get<TOfferFull>(generatePath(ApiRoute.Offer, {id}));
      dispatch(loadOffer(data));
    } catch(err: unknown){
      if (isAxiosError(err)){
        const axiosErr = err as AxiosError;
        const error = axiosErr.response?.data as TError;
        dispatch(setErrorText(error.message));
      }
    }
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

export const setFavoriteAction = createAsyncThunk<void, {offerId: string; status: boolean}, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'data/setFavorite',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<TOfferFull>(generatePath(ApiRoute.FavoriteSet, {offerId, status: status ? '1' : '0'}));
    dispatch(setFavorite(data));
    dispatch(fetchFavoritesAction());
    dispatch(fetchOffersAction());
    dispatch(fetchOfferAction(offerId));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: TAppDispatch; state: TState; extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TUserData>(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUser(data));
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
  async ({login: email, password}, {dispatch, extra: api}) => {
    try{
      dispatch(setErrorText(''));
      const {data} = await api.post<TUserData>(ApiRoute.Login, {email, password});
      const token = data.token;
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(saveUser(data));
      dispatch(redirectToRoute(AppRoute.Root));
    }catch (error: unknown){
      dispatch(saveUser(null));
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      if (isAxiosError(error)){
        const axiosErr = error as AxiosError;
        const errorLogin = axiosErr.response?.data as TErrorLogin;
        const errorText = concatErrors(errorLogin.details);
        dispatch(setErrorText(errorText));
      }
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
    const {data} = await api.post<TReviewFull>(generatePath(ApiRoute.Comments, {offerId: review.offerId}), {comment: review.comment, rating: review.rating});
    dispatch(addReview(data));
    dispatch(fetchReviewsAction(review.offerId));
  },
);
