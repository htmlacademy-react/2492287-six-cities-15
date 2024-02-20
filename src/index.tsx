import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { offers } from './mocks/offers';
import { nearOffers } from './mocks/near-offers';
import { favoriteOffers } from './mocks/favorites-offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} favoriteOffers={favoriteOffers} nearOffers={nearOffers} reviews={reviews}/>
  </React.StrictMode>
);
