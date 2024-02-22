import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo';
import { LogoLocation } from '../../const';

export const FavoritesEmpty: FC = () =>
  (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className='page__main page__main--favorites page__main--favorites-empty'>
        <div className='page__favorites-container container'>
          <section className='favorites favorites--empty'>
            <h1 className='visually-hidden'>Favorites (empty)</h1>
            <div className='favorites__status-wrapper'>
              <b className='favorites__status'>Nothing yet saved.</b>
              <p className='favorites__status-description'>
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className='footer'>
        <Logo logoLocation={LogoLocation.Footer}/>
      </footer>
    </>
  );
