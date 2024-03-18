import { FC } from 'react';
import { TOffer, cities } from '../../const';
import { FavoriteLocationList } from '../favorite-location-list';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteCityList: FC<TFavoriteLocationProps> = ({offers}) => {
  const offerCities = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {offerCities.map((offerCity) => (
          <FavoriteLocationList
            key={offerCity}
            offers={offers.filter((offer) => offer.city.name === offerCity)}
            city={cities.find((city) => city.name === offerCity) || cities[0]}
          />
        ))}
      </ul>
    </section>
  );
};
