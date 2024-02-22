import { FC, useEffect, useState } from 'react';
import { OfferSortType } from '../../const';
import { OfferSortItem } from '../offer-sort-item';

export type TOfferCardProps = {
  selectedSort: OfferSortType;
  setSelectedSort: (selectedSort: OfferSortType) => void;
}

type OfferSortTypeKey = keyof typeof OfferSortType;

export const OfferSort: FC<TOfferCardProps> = ({selectedSort, setSelectedSort}) => {
  const [isShowOfferSort, setIsShowOfferSort] = useState<boolean>(false);

  const sortClickHandler = () => {
    setIsShowOfferSort(!isShowOfferSort);
  };

  useEffect(() => {
    setIsShowOfferSort(false);
  }, [selectedSort]);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0} onClick={sortClickHandler}>
        {selectedSort}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      {
        isShowOfferSort &&
        <ul className='places__options places__options--custom places__options--opened'>
          {
            Object.keys(OfferSortType).map((key: string) => {
              const curSortType = OfferSortType[key as OfferSortTypeKey];
              return (
                <OfferSortItem
                  isActive={selectedSort === curSortType}
                  sortType={curSortType}
                  key={key}
                  setSelectedSort={setSelectedSort}
                />
              );
            })
          }
        </ul>
      }
    </form>
  );
};
