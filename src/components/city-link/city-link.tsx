import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TCity } from '../../const';
import { AppRoute } from '../../app';

export type TCityLinkProps = {
  city: TCity;
  isActive: boolean;
  onChangeCity?: (city: TCity) => void;
}
export const CityLink: FC<TCityLinkProps> = ({city, isActive, onChangeCity}) => (
  <Link
    className={`locations__item-link ${isActive ? 'tabs__item--active' : ''}`}
    to={AppRoute.Root}
    onClick={() => {
      if(onChangeCity){
        return onChangeCity(city);
      }
    }}
    data-testid='city-link'
  >
    <span>{city.name}</span>
  </Link>
);
