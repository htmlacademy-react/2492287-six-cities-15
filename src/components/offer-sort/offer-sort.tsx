import { FC, useEffect, useState } from 'react';
import { OfferSortType } from '../../const';
import { OfferSortItem } from '../offer-sort-item';
import { useAppDispatch } from '../../hooks';
import { setOfferSortType } from '../../store/action';

export type TOfferCardProps = {
  selectedSort: OfferSortType;
}

type OfferSortTypeKey = keyof typeof OfferSortType;

export const OfferSort: FC<TOfferCardProps> = ({selectedSort}) => {
  const [isShowOfferSort, setIsShowOfferSort] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpenSortClick = () => {
    setIsShowOfferSort(!isShowOfferSort);
  };

  const handleSelectSortType = (sortType: OfferSortType) => {
    dispatch(setOfferSortType(sortType));
  };

  useEffect(() => {
    let mounted = true;
    if(mounted) {
      setIsShowOfferSort(false);
    }
    return () => {
      mounted = false;
    };
  }, [selectedSort]);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by{' '}</span>
      <span className='places__sorting-type' tabIndex={0} onClick={handleOpenSortClick}>
        {selectedSort}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      {

        <ul className={`places__options places__options--custom ${isShowOfferSort ? 'places__options--opened' : ''}`}>
          {
            isShowOfferSort &&
            Object.keys(OfferSortType).map((key: string) => {
              const curSortType = OfferSortType[key as OfferSortTypeKey];
              return (
                <OfferSortItem
                  isActive={selectedSort === curSortType}
                  sortType={curSortType}
                  key={key}
                  onSelectSortType={handleSelectSortType}
                />
              );
            })
          }
        </ul>
      }
    </form>
  );
};
