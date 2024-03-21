import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { clearFavoriteOffer, redirectToRoute, setFavoritesOff } from './action';
import * as tokenStorage from '../services/token';
import { TAuthData, TState } from './const';
import { ApiRoute } from '../app/routes';
import { addReviewAction, checkAuthAction, fetchFavoritesAction, fetchNearOffersAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, loginAction, logoutAction, addFavoriteAction } from './api-actions';
import { extractActionsTypes } from '../utils/mocks';
import { AuthorizationStatus } from '../const';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  type AppThunkDispatch = ThunkDispatch<TState, ReturnType<typeof createAPI>, Action>;
  const mockStoreCreator = configureMockStore<TState, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ Offer: { offers: [], favorites: [] }, User: { user: null, authorizationStatus: AuthorizationStatus.NoAuth }});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        fetchFavoritesAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "fetchFavoritesAction", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: TAuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        fetchOffersAction.pending.type,
        fetchFavoritesAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: TAuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "setFavoritesOff", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        setFavoritesOff.type,
        clearFavoriteOffer.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/xxx`).reply(200);

      await store.dispatch(fetchOfferAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type
      ]);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 200', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/xxx`).reply(404);

      await store.dispatch(fetchOfferAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type
      ]);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/xxx`).reply(200);

      await store.dispatch(fetchOfferAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type
      ]);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 200', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(404);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type
      ]);
    });
  });

  describe('fetchNearOffersAction', () => {
    it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/xxx/nearby`).reply(200);

      await store.dispatch(fetchNearOffersAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type
      ]);
    });

    it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.rejected" when server response 404', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/xxx/nearby`).reply(404);

      await store.dispatch(fetchNearOffersAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.rejected.type
      ]);
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(200);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type
      ]);
    });

    it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.rejected" when server response 401', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(401);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.rejected.type
      ]);
    });
  });

  describe('addFavoriteAction', () => {
    it('should dispatch "addFavoriteAction.pending", "addFavoriteAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/xxx/1`).reply(200);

      await store.dispatch(addFavoriteAction({offerId: 'xxx', status: true}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addFavoriteAction.pending.type,
        addFavoriteAction.fulfilled.type
      ]);
    });

    it('should dispatch "addFavoriteAction.pending", "addFavoriteAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/xxx/1`).reply(400);

      await store.dispatch(addFavoriteAction({offerId: 'xxx', status: true}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addFavoriteAction.pending.type,
        addFavoriteAction.rejected.type
      ]);
    });

    it('should dispatch "addFavoriteAction.pending", "addFavoriteAction.rejected" when server response 401', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/xxx/1`).reply(401);

      await store.dispatch(addFavoriteAction({offerId: 'xxx', status: true}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addFavoriteAction.pending.type,
        addFavoriteAction.rejected.type
      ]);
    });

    it('should dispatch "addFavoriteAction.pending", "addFavoriteAction.rejected" when server response 404', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/xxx/1`).reply(404);

      await store.dispatch(addFavoriteAction({offerId: 'xxx', status: true}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addFavoriteAction.pending.type,
        addFavoriteAction.rejected.type
      ]);
    });

    it('should dispatch "addFavoriteAction.pending", "addFavoriteAction.rejected" when server response 409', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/xxx/1`).reply(409);

      await store.dispatch(addFavoriteAction({offerId: 'xxx', status: true}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addFavoriteAction.pending.type,
        addFavoriteAction.rejected.type
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/xxx`).reply(200);

      await store.dispatch(fetchReviewsAction('xxx'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);
    });

    it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.rejected" when server response 404', async() => {
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/xxx`).reply(404);

      await store.dispatch(fetchReviewsAction('xxx'));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type
      ]);
    });
  });

  describe('addReviewAction', () => {
    it('should dispatch "addReviewAction.pending", "addReviewAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/xxx`).reply(200);

      await store.dispatch(addReviewAction({comment: '', rating: 3, offerId: 'xxx'}));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.fulfilled.type
      ]);
    });

    it('should dispatch "addReviewAction.pending", "addReviewAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/xxx`).reply(400);

      await store.dispatch(addReviewAction({comment: '', rating: 3, offerId: 'xxx'}));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        addReviewAction.pending.type,
        addReviewAction.rejected.type
      ]);
    });

  });
});
