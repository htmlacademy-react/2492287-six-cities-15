import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { store } from './store';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HistoryRouter } from './components/history-route';
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </React.StrictMode>
  </Provider>
);
