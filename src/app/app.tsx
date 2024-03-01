import { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from './';
import { PrivateRoute } from './private-route';
import { Favorites } from '../pages/favorites';
import { NotFound } from '../pages/not-found';
import { Offer } from '../pages/offer';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { OfferCardType } from '../components/offer-card/lib';
import { Layout } from '../components/layout';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';
import { Loading } from '../pages/loading';
import { HistoryRouter } from '../components/history-route';
import browserHistory from '../browser-history';

export const App: FC = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorizationStatus={authorizationStatus}/>}
          >
            <Route index element={<Main/>}/>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites/>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Offer nearOfferCardType={OfferCardType.Near}/>}/>
            <Route path={AppRoute.Login} element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

