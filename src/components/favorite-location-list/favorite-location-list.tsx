import { FC } from 'react';
import { FavoriteLocationPlaceList } from '../favorite-location-place-list';
import { TOffer, cities } from '../../const';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteLocationList: FC<TFavoriteLocationProps> = ({offers}) => {
  const cityList: string[] = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {cityList.map((cityName) => (
          <FavoriteLocationPlaceList key={cityName} offers={offers.filter((item) => item.city.name === cityName)} city={cities.find((item) => item.name === cityName) || cities[0]}/>
        ))}
      </ul>
    </section>
  );
};
