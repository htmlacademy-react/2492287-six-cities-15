import { FC } from 'react';
import { TCity, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { CityLink } from '../city-link';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  city: TCity;
}

export const FavoriteLocationList: FC<TFavoriteLocationPlaceProps> = ({offers, city}) => (
  <li className='favorites__locations-items' data-testid='favorite-location-list'>
    <div className='favorites__locations locations locations--current'>
      <div className='locations__item'>
        <CityLink
          city={city}
          isActive={false}
        />
      </div>
    </div>
    <OfferList
      offers={offers}
      offerCardType='Favorite'
    />
  </li>
);

