import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { offers } from './mocks/offers';
import { favoriteOffers } from './mocks/favorites-offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';
import { nearOffers } from './mocks/near-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} favoriteOffers={favoriteOffers} nearOffers={nearOffers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);

