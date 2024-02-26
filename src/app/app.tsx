import { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './';
import { PrivateRoute } from '../components/private-route';
import { Favorites } from '../pages/favorites';
import { NotFound } from '../pages/not-found';
import { Offer } from '../pages/offer';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { OfferCardType } from '../components/offer-card/lib';
import { Layout } from '../components/layout';
import { AuthorizationStatus, TOffer, TReview } from '../const';

export type TAppProps = {
  offers: TOffer[];
  reviews: TReview[];
}

export const App: FC<TAppProps> = ({offers, reviews} :TAppProps) => {
  const authorizationStatus: AuthorizationStatus = AuthorizationStatus.Auth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorizationStatus={AuthorizationStatus.NoAuth}/>}
          >
            <Route index element={<Main offers={offers} />}/>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites/>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Offer nearOfferCardType={OfferCardType.Near} reviews={reviews}/>}/>
            <Route path={AppRoute.Login} element={<Login/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};
