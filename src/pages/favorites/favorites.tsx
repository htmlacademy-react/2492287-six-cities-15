import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../const';
import { FavoriteLocationList } from '../../components/favorite-location-list';
import { AppRoute } from '../../app';
import { Link } from 'react-router-dom';

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
          <FavoriteLocationList offers={offers}/>
        </div>
      </main>
      <footer className='footer container'>
        <Link className='footer__logo-link' to={AppRoute.Root}>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </>
  );
};
