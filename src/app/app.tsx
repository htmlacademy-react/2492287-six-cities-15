import { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './';
import { PrivateRoute } from './private-route';
import { Favorites } from '../pages/favorites';
import { NotFound } from '../pages/not-found';
import { Offer } from '../pages/offer';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { Layout } from '../components/layout';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';
import { Loading } from '../pages/loading';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { getIsOffersDataLoading } from '../store/offer-data/selectors';

export const App: FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer/>}/>
          <Route
            path={AppRoute.Login}
            element={isAuth ? <Navigate to={AppRoute.Root}/> : <Login/>}
          />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </HelmetProvider>
  );
};

