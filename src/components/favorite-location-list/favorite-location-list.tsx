import { FC } from 'react';
import { TCity, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { OfferCardType } from '../offer-card/lib';
import { CityTab } from '../city-tab';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  city: TCity;
}

export const FavoriteLocationList: FC<TFavoriteLocationPlaceProps> = ({offers, city}) => {
  const dispatch = useAppDispatch();
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <CityTab city={city} isActive={false} onChangeCity={() => dispatch(changeCity(city))} />
        </div>
      </div>
      <OfferList
        offers={offers}
        offerCardType={OfferCardType.Favorite}
      />
    </li>
  );
};

