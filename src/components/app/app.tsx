import {JSX} from 'react';
import Main from '../../pages/main/main';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoute from '../../shared/AppRoute';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../Layout/layout';

type AppProps = {
  offerCount: number;
}

function App({offerCount} :AppProps): JSX.Element {
  const authorizationStatus: AuthorizationStatus = AuthorizationStatus.NoAuth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorizationStatus={AuthorizationStatus.NoAuth}/>}
          >
            <Route index element={<Main offerCount={offerCount} />}/>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites/>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Offer/>}/>
            <Route path={AppRoute.Login} element={<Login/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
