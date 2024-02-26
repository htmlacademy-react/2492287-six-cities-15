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
        <CityTab key={city.id} city={city} isActive={activeCity === city} onChangeCity={onChangeCity}/>
      ))
    }
  </ul>
);

