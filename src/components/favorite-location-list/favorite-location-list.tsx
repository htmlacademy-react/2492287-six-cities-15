import { FC } from 'react';
import { TCity, TOffer } from '../../const';
import { OfferList } from '../offer-list';
import { CityLink } from '../city-link';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

export type TFavoriteLocationPlaceProps = {
  offers: TOffer[];
  city: TCity;
}

export const FavoriteLocationList: FC<TFavoriteLocationPlaceProps> = ({offers, city}) => {
  const dispatch = useAppDispatch();
  const handleChangeCity = () => dispatch(changeCity(city));
  return (
    <li className='favorites__locations-items' data-testid='favorite-location-list'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <CityLink
            city={city}
            isActive={false}
            onChangeCity={handleChangeCity}
          />
        </div>
      </div>
      <OfferList
        offers={offers}
        offerCardType='Favorite'
      />
    </li>
  );
};

