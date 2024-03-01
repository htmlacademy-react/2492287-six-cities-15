import { FC, useState } from 'react';
import { TCity, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { OfferCardType } from '../offer-card/lib';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  city: TCity;
}

export const FavoriteLocationPlaceList: FC<TFavoriteLocationPlaceProps> = ({offers, city}) => {
  const [, setSelectedOffer] = useState<TOffer | null>();
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <OfferList offers={offers.filter((item) => item.city.name === city.name)} offerCardType={OfferCardType.Favorite} setSelectedOffer={setSelectedOffer}/>
    </li>
  );
};
