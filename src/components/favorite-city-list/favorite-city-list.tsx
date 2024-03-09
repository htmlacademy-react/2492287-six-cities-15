import { FC } from 'react';
import { TOffer, cities } from '../../const';
import { FavoriteLocationList } from '../favorite-location-list';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteCityList: FC<TFavoriteLocationProps> = ({offers}) => {
  const cityList = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {cityList.map((cityName) => (
          <FavoriteLocationList
            key={cityName}
            offers={offers.filter((item) => item.city.name === cityName)}
            city={cities.find((item) => item.name === cityName) || cities[0]}
          />
        ))}
      </ul>
    </section>
  );
};
