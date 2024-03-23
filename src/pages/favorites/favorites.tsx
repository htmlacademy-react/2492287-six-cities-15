import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo';
import { useAppSelector } from '../../hooks';
import { FavoriteCityList } from '../../components/favorite-city-list';
import { getFavorites, getIsFavoritesDataLoading } from '../../store/offer-data/offer-data-selectors';
import { APP_TITLE } from '../../const';
import { Spinner } from '../../components/spinner';
import { FAVORITES_LOADING_TEXT, PageMainFavoriteClass } from './const';

export const Favorites: FC = () => {
  const favorites = useAppSelector(getFavorites);
  const isFavoritesDataLoading = useAppSelector(getIsFavoritesDataLoading);
  const favoritesClassName = favorites.length > 0
    ? PageMainFavoriteClass.Favorites
    : PageMainFavoriteClass.FavoritesEmpty;
  const favoritesComponent = isFavoritesDataLoading
    ? <Spinner text={FAVORITES_LOADING_TEXT}/>
    : <FavoriteCityList offers={favorites}/>;

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}: favorites</title>
      </Helmet>
      <main
        className={`page__main ${favoritesClassName}`}
        data-testid='favorites'
      >
        <div className='page__favorites-container container'>
          {favoritesComponent}
        </div>
      </main>
      <footer className='footer container'>
        <Logo logoLocation='Footer'/>
      </footer>
    </>
  );
};
