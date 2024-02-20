import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../shared/offer';
import { FavoriteLocationList } from '../../components/favorite-location-list';

export type TFavoritesProps = {
  offers: TOffer[];
}

export const Favorites: FC<TFavoritesProps> = ({offers}) => {
  if (!offers) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Saved listing</title>
      </Helmet>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          asfd
          <FavoriteLocationList offers={offers}/>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </a>
      </footer>
    </>
  );
};
