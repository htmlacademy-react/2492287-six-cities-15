import {FC} from 'react';
import { TCity, cities } from '../../const';
import { CityTab } from '../city-tab';

export type TCityTabListProps = {
  activeCity: TCity;
  onChangeCity: (city: TCity) => void;
}

export const CityTabList: FC<TCityTabListProps> = ({activeCity, onChangeCity}) => (
  <ul className='locations__list tabs__list'>
    {
      cities.map((city) => (
        <li key={city.name} className='locations__item'>
          <CityTab
            city={city}
            isActive={activeCity === city}
            onChangeCity={onChangeCity}
          />
        </li>
      ))
    }
  </ul>
);

