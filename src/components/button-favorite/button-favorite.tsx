import { FC } from 'react';
import { addFavoriteAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SimpleSpinner } from '../simple-spinner';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../app';
import { getIsOfferDataLoading } from '../../store/offer-data/offer-data.selectors';
import { getBookmarkClass } from './lib';
import { TButtonType } from './const';

export type TButtonFavoriteProps = {
  offerId: string;
  isFavorite: boolean;
  typeCard: TButtonType;
  width: number;
  height: number;
  isAuth: boolean;
}

export const ButtonFavorite: FC<TButtonFavoriteProps> = ({offerId, isFavorite, typeCard, width, height, isAuth}) => {
  const dispatch = useAppDispatch();
  const bookmarkClass = getBookmarkClass(isFavorite, typeCard);
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuth){
      dispatch(addFavoriteAction({offerId: offerId, status: !isFavorite}));
      
    } else {
      navigate(AppRoute.Login);
    }
  };

  if (isOfferDataLoading){
    return <SimpleSpinner/>;
  }

  return (
    <button
      className={`${typeCard}__bookmark-button button${bookmarkClass}`}
      type='button'
      onClick={handleButtonClick}
      data-testid='button-favorite'
    >
      <svg
        className={`${typeCard}__bookmark-icon`}
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
