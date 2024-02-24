import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { LogoLocation, TOffer } from '../../const';
import { FavoriteLocationList } from '../../components/favorite-location-list';
import { Logo } from '../../components/logo';

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
        <Logo logoLocation={LogoLocation.Footer}/>
      </footer>
    </>
  );
};
