import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TCity } from '../../const';
import { AppRoute } from '../../app';

export type TCityTabProps = {
  city: TCity;
  isActive: boolean;
  onChangeCity: (city: TCity) => void;
}
export const CityTab: FC<TCityTabProps> = ({city, isActive, onChangeCity}) => {
  const handleLinkClick = () => {
    if (onChangeCity){
      onChangeCity(city);
    }
  };
  return (
    <Link
      className={`locations__item-link ${isActive ? 'tabs__item--active' : ''}`}
      to={AppRoute.Root}
      onClick={handleLinkClick}
    >
      <span>{city.name}</span>
    </Link>
  );
};
