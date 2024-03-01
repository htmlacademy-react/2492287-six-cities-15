import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE, LogoLocation } from '../../const';
import { FavoriteLocationList } from '../../components/favorite-location-list';
import { Logo } from '../../components/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction } from '../../store/api-action';

export const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}: favorites</title>
      </Helmet>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          {favorites.length > 0 && <FavoriteLocationList offers={favorites}/>}
          {
            favorites.length === 0 &&
            <section className='favorites favorites--empty'>
              <h1 className='visually-hidden'>Favorites (empty)</h1>
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          }
        </div>
      </main>
      <footer className='footer container'>
        <Logo logoLocation={LogoLocation.Footer}/>
      </footer>
    </>
  );
};
