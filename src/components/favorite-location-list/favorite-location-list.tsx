import { FC } from 'react';
import { TOffer } from '../../shared/offer';
import Place from '../../shared/place';
import { FavoriteLocationPlaceList } from '../favorite-location-place-list';

export type TFavoriteLocationProps = {
  offers: TOffer[];
}

export const FavoriteLocationList: FC<TFavoriteLocationProps> = ({offers}) => {
  const places = [...new Set(offers.map((offer: TOffer) => offer.place))];

  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {places.map((place: Place) => (
          <FavoriteLocationPlaceList key={place} offers={offers} place={place}/>
        ))}
      </ul>
    </section>
  );
};
