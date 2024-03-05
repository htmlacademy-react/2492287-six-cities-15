import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAuthData, AuthorizationStatus, TOffer, TOfferFull,
  TUserData, TReviewFull, TReview } from '../const';
import { addReview, loadReviews, loadFavorites, loadNearOffers,
  loadOffer, loadOffers, redirectToRoute, requireAuthorization, saveUser,
  setOffersDataLoadingStatus, setFavoritesOff, setFavoriteInOffers,
  setFavoriteOffer, setFavoriteInNearOffers, addFavorite, delFavorite } from './action';
import { ApiRoute, AppRoute } from '../app/routes';
import { dropToken, saveToken } from '../services/token';
import { TActionUtils } from './const';

export const fetchOffersAction = createAsyncThunk<void, undefined, TActionUtils>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(ApiRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, TActionUtils>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TOfferFull>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, TActionUtils>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, TActionUtils>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(ApiRoute.Favorites);
    dispatch(loadFavorites(data));
  },
);

export const setFavoriteAction = createAsyncThunk<void, {offerId: string; status: boolean}, TActionUtils>(
  'data/setFavorite',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<TOfferFull>(`${ApiRoute.Favorites}/${offerId}/${status ? '1' : '0'}`);
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

export const checkAuthAction = createAsyncThunk<void, undefined, TActionUtils>(
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

export const loginAction = createAsyncThunk<void, TAuthData, TActionUtils>(
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

export const logoutAction = createAsyncThunk<void, undefined, TActionUtils>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(saveUser(null));
    dispatch(redirectToRoute(AppRoute.Login));
    dispatch(setFavoritesOff());
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, TActionUtils>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TReviewFull[]>(`${ApiRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  },
);

export const addReviewAction = createAsyncThunk<void, TReview, TActionUtils>(
  'data/addReview',
  async (review, {dispatch, extra: api}) => {
    const {data} = await api.post<TReviewFull>(`${ApiRoute.Comments}/${review.offerId}/${review.rating}`);
    dispatch(addReview(data));
    dispatch(fetchReviewsAction(review.offerId));
  },
);
