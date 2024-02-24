import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TCity } from '../../const';

export type TCityTabProps = {
  city: TCity;
  isActive: boolean;
  setActiveCity: (city: TCity) => void;
}
export const CityTab: FC<TCityTabProps> = ({city, isActive, setActiveCity}) => (
  <li className='locations__item'>
    <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to='#' onClick={() => setActiveCity(city)}>
      <span>{city.name}</span>
    </Link>
  </li>
);
