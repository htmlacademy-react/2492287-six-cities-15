import { FC } from 'react';
import { OfferSortType } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setOfferSortType } from '../../store/action';

export type TOfferCardProps = {
  sortType: OfferSortType;
  isActive: boolean;
}

export const OfferSortItem: FC<TOfferCardProps> = ({sortType, isActive}) => {
  const dispatch = useAppDispatch();

  const sortTypeClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    dispatch(setOfferSortType(event.currentTarget.id as OfferSortType));
  };
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={sortTypeClickHandler}
      id={sortType}
    >
      {sortType}
    </li>
  );
};
