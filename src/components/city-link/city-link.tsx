import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TCity } from '../../const';
import { AppRoute } from '../../app';

export type TCityLinkProps = {
  city: TCity;
  isActive: boolean;
  onChangeCity?: (city: TCity) => void;
}
export const CityLink: FC<TCityLinkProps> = ({city, isActive, onChangeCity}) => {
  const handleLinkClick = () => {
    if(onChangeCity){
      return onChangeCity(city);
    }
  };
  return (
    <Link
      className={`locations__item-link ${isActive ? 'tabs__item--active' : ''}`}
      to={AppRoute.Root}
      onClick={handleLinkClick}
      data-testid='city-link'
    >
      <span>{city.name}</span>
    </Link>
  );
};
