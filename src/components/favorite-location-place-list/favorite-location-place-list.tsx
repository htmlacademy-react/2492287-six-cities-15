import { FC } from 'react';
import { Place, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { OfferCardType } from '../offer-card/lib';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  place: Place;
}

export const FavoriteLocationPlaceList: FC<TFavoriteLocationPlaceProps> = ({offers, place}) =>
  (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{place}</span>
          </a>
        </div>
      </div>
      <OfferList offers={offers.filter((item: TOffer) => item.place === place)} offerCardType={OfferCardType.Favorite}/>
    </li>
  );
