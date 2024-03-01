import { FC } from 'react';
import { OfferCardType, getCardClassName, getCardImageClassName, getCardImageSize, getCardInfoClassName, getOfferLinkById } from './lib';
import { Link } from 'react-router-dom';
import { TOffer } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setFavoriteAction } from '../../store/api-action';

export type TOfferCardProps = {
  offer: TOffer;
  offerCardType: OfferCardType;
  setSelectedOffer?: (offer: TOffer | null) => void;
}

export const OfferCard: FC<TOfferCardProps> = ({offer, setSelectedOffer, offerCardType}) => {
  const bookmarkClass = offer.isFavorite ? ' place-card__bookmark-button--active' : '';
  const cardClass = getCardClassName(offerCardType);
  const cardImageClass = getCardImageClassName(offerCardType);
  const cardInfoClass = getCardInfoClassName(offerCardType);
  const imageSize = getCardImageSize(offerCardType);
  const offerLink = getOfferLinkById(offer.id);
  const dispatch = useAppDispatch();

  const handleOfferMouseOver = () => {
    if (setSelectedOffer){
      setSelectedOffer(offer);
    }
  };

  const handleMouseOut = () => {
    if (setSelectedOffer){
      setSelectedOffer(null);
    }
  };

  const handleFavoriteClick = () => {
    dispatch(setFavoriteAction({offerId: offer.id, status: !offer.isFavorite}));
  };

  return (
    <article className={`${cardClass} place-card`} onMouseOver={handleOfferMouseOver} onMouseOut={handleMouseOut}>
      {offer.isPremium && <div className='place-card__mark'> <span>Premium</span> </div>}
      <div className={`${cardImageClass} place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img
            className='place-card__image'
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt='Place image'
          />
        </Link>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>{`€${offer.price}`}</b>
            <span className='place-card__price-text'>
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button${bookmarkClass}`}
            onClick={handleFavoriteClick}
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={offerLink}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
};
