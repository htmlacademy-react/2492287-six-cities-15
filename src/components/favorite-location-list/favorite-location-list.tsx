import { FC } from 'react';
import { FavoriteLocationPlaceList } from '../favorite-location-place-list';
import { TOffer, cities } from '../../const';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteLocationList: FC<TFavoriteLocationProps> = ({offers}) => {
  const cityIds: number[] = [...new Set(offers.map((offer) => offer.cityId))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {cityIds.map((cityId) => (
          <FavoriteLocationPlaceList key={cityId} offers={offers} city={cities.find((city) => city.id === cityId) || cities[0]}/>
        ))}
      </ul>
    </section>
  );
};
