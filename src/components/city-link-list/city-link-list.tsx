import {FC} from 'react';
import { TCity, cities } from '../../const';
import { CityLink } from '../city-link';

export type TCityLinkListProps = {
  activeCity: TCity;
}

export const CityLinkList: FC<TCityLinkListProps> = ({activeCity}) => (
  <ul className='locations__list tabs__list' data-testid='city-link-container'>
    {
      cities.map((city) => (
        <li
          key={city.name}
          className='locations__item'
          data-testid='city-link-item'
        >
          <CityLink
            city={city}
            isActive={activeCity === city}
          />
        </li>
      ))
    }
  </ul>
);

