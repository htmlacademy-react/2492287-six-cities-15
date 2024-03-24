import { FC, useEffect, useState } from 'react';
import { addFavoriteAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SimpleSpinner } from '../simple-spinner';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../app';
import { getIsAddFavoriteLoading } from '../../store/offer-data/offer-data-selectors';
import { getBookmarkClass } from './lib';
import { TButtonTypeClassName } from './const';

export type TButtonFavoriteProps = {
  offerId: string;
  isFavorite: boolean;
  buttonTypeClassName: TButtonTypeClassName;
  width: number;
  height: number;
  isAuth: boolean;
}

export const ButtonFavorite: FC<TButtonFavoriteProps> = ({offerId, isFavorite, buttonTypeClassName, width, height, isAuth}) => {
  const dispatch = useAppDispatch();
  const bookmarkClass = getBookmarkClass(isFavorite, buttonTypeClassName);
  const isAddFavoriteLoading = useAppSelector(getIsAddFavoriteLoading);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAuth){
      setIsLoadingData(true);
      dispatch(addFavoriteAction({offerId: offerId, status: !isFavorite}));
    } else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (!isAddFavoriteLoading && mounted) {
      setIsLoadingData(false);
    }
    return (
      () => {
        mounted = false;
      }
    );
  }, [isAddFavoriteLoading]);

  if (isLoadingData && isAddFavoriteLoading){
    return <SimpleSpinner/>;
  }

  return (
    <button
      className={`${buttonTypeClassName}__bookmark-button button${bookmarkClass}`}
      type='button'
      onClick={handleButtonClick}
      data-testid='button-favorite'
    >
      <svg
        className={`${buttonTypeClassName}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
      <div>{isFavorite}</div>
    </button>
  );
};
