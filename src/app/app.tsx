import {FC} from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoute from '../shared/app-route';
import AuthorizationStatus from '../shared/authorization-status';
import { Layout } from '../components/layout';
import { PrivateRoute } from '../components/private-route';
import { Favorites } from '../pages/favorites';
import { NotFound } from '../pages/not-found';
import { Offer } from '../pages/offer';
import { Login } from '../pages/login';
import { Main } from '../pages/main';

export type TAppProps = {
  offerCount: number;
}

export const App: FC<TAppProps> = ({offerCount} :TAppProps) => {
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
};
