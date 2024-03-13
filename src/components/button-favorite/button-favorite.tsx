import { FC } from 'react';
import { TOffer } from '../../const';
import { setFavoriteAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SimpleSpinner } from '../simple-spinner';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../app';
import { getIsOfferDataLoading } from '../../store/offer-data/selectors';

export type TButtonFavoriteProps = {
  offer: TOffer;
  typeCard: 'offer' | 'place-card';
  width: number;
  height: number;
  isAuth: boolean;
}

export const ButtonFavorite: FC<TButtonFavoriteProps> = ({offer, typeCard, width, height, isAuth}) => {
  const dispatch = useAppDispatch();
  const bookmarkClass = offer.isFavorite ? ` ${typeCard}__bookmark-button--active` : '';
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuth){
      dispatch(setFavoriteAction({offerId: offer.id, status: !offer.isFavorite}));
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
    >
      <svg
        className={`${typeCard}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
};
