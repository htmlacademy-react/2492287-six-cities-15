import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TCity } from '../../const';
import { AppRoute } from '../../app';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

export type TCityLinkProps = {
  city: TCity;
  isActive: boolean;
}
export const CityLink: FC<TCityLinkProps> = ({city, isActive}) => {
  const dispatch = useAppDispatch();
  const handleLinkClick = () => {
    dispatch(changeCity(city));
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
