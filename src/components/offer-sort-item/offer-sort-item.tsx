import { FC } from 'react';
import { OfferSortType } from '../../const';

export type TOfferCardProps = {
  sortType: OfferSortType;
  isActive: boolean;
  onSelectSortType?: (sortType: OfferSortType) => void;
}

export const OfferSortItem: FC<TOfferCardProps> = ({sortType, isActive, onSelectSortType}) => {

  const handleSortTypeClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    if (onSelectSortType) {
      onSelectSortType(event.currentTarget.id as OfferSortType);
    }
  };

  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleSortTypeClick}
      id={sortType}
      data-testid='offer-sort-item'
    >
      {sortType}
    </li>
  );
};
