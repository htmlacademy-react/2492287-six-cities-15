import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE, LogoLocation, TOffer } from '../../const';
import { FavoriteLocationList } from '../../components/favorite-location-list';
import { Logo } from '../../components/logo';
import { getFavoriteOffers } from '../../mocks/favorites-offers';

export const Favorites: FC = () => {
  const [favoriteOffers, setFavoriteOffers] = useState<TOffer[]>([]);

  useEffect(() => {
    setFavoriteOffers(getFavoriteOffers());
  }, []);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}: favorites</title>
      </Helmet>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <FavoriteLocationList offers={favoriteOffers}/>
        </div>
      </main>
      <footer className='footer container'>
        <Logo logoLocation={LogoLocation.Footer}/>
      </footer>
    </>
  );
};
