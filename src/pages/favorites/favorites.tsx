import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo';
import { useAppSelector } from '../../hooks';
import { FavoriteCityList } from '../../components/favorite-city-list';
import { getFavorites } from '../../store/offer-data/selectors';
import { APP_TITLE } from '../../const';
import { FavoritesEmpty } from '../../components/favorites-empty';

export const Favorites: FC = () => {
  const favorites = useAppSelector(getFavorites);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}: favorites</title>
      </Helmet>
      <main
        className='page__main page__main--favorites'
        data-testid='favorites'
      >
        <div className='page__favorites-container container'>
          {favorites.length > 0 && <FavoriteCityList offers={favorites}/>}
          {
            favorites.length === 0 && <FavoritesEmpty/>
          }
        </div>
      </main>
      <footer className='footer container'>
        <Logo logoLocation='Footer'/>
      </footer>
    </>
  );
};
