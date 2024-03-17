import { FC } from 'react';
import { setFavoriteAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SimpleSpinner } from '../simple-spinner';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../app';
import { getIsOfferDataLoading } from '../../store/offer-data/selectors';
import { getBookmarkClass } from './lib';

export type TButtonFavoriteProps = {
  offerId: string;
  isFavorite: boolean;
  typeCard: 'offer' | 'place-card';
  width: number;
  height: number;
  isAuth: boolean;
}

export const ButtonFavorite: FC<TButtonFavoriteProps> = ({offerId, isFavorite: offerIsFavorite, typeCard, width, height, isAuth}) => {
  const dispatch = useAppDispatch();
  const bookmarkClass = getBookmarkClass(offerIsFavorite, typeCard);
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuth){
      dispatch(setFavoriteAction({offerId: offerId, status: !offerIsFavorite}));
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
      <span className='visually-hidden'>{offerIsFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
};
