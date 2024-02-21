import { FC } from 'react';
import { FavoriteLocationPlaceList } from '../favorite-location-place-list';
import { City, TOffer } from '../../const';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteLocationList: FC<TFavoriteLocationProps> = ({offers}) => {
  const cities: City[] = [...new Set(offers.map((offer) => offer.city))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {cities.map((city) => (
          <FavoriteLocationPlaceList key={city} offers={offers} city={city}/>
        ))}
      </ul>
    </section>
  );
};
