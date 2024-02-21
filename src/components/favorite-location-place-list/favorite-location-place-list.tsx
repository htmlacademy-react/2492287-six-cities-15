import { FC } from 'react';
import { City, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { OfferCardType } from '../offer-card/lib';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  city: City;
}

export const FavoriteLocationPlaceList: FC<TFavoriteLocationPlaceProps> = ({offers, city}) =>
  (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{city}</span>
          </a>
        </div>
      </div>
      <OfferList offers={offers.filter((item) => item.city === city)} offerCardType={OfferCardType.Favorite}/>
    </li>
  );
