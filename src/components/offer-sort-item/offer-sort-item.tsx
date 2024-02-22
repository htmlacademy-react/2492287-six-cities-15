import { FC } from 'react';
import { OfferSortType } from '../../const';

export type TOfferCardProps = {
  sortType: OfferSortType;
  isActive: boolean;
  setSelectedSort: (selectedSort: OfferSortType) => void;
}

export const OfferSortItem: FC<TOfferCardProps> = ({sortType, isActive, setSelectedSort}) => {
  const sortTypeClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    setSelectedSort(event.currentTarget.id as OfferSortType);
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
