import { FC } from 'react';
import { OfferCardType, getCardClassName, getCardImageClassName, getCardImageSize, getCardInfoClassName } from './lib';
import { TOffer } from '../../shared/offer';
import { AppRoute } from '../../app';
import { Link } from 'react-router-dom';

export type TOfferCardProps = {
  offer: TOffer;
  offerCardType: OfferCardType;
  setSelectedOffer?: (offer: TOffer) => void;
}

export const OfferCard: FC<TOfferCardProps> = ({offer, setSelectedOffer, offerCardType}) => {
  const bookmarkClass = offer.isBookmark ? ' place-card__bookmark-button--active' : '';
  const cardClass = getCardClassName(offerCardType);
  const cardImageClass = getCardImageClassName(offerCardType);
  const cardInfoClass = getCardInfoClassName(offerCardType);
  const imageSize = getCardImageSize(offerCardType);

  const offerMouseOverHandler = () => {
    if (setSelectedOffer){
      setSelectedOffer(offer);
    }
  };

  return (
    <article className={`${cardClass} place-card`} onMouseOver={offerMouseOverHandler}>
      {offer.isPremium && <div className='place-card__mark'> <span>Premium</span> </div>}
      <div className={`${cardImageClass} place-card__image-wrapper`}>
        <a href='#'>
          <img
            className='place-card__image'
            src={`img/${offer.imageName}`}
            width={imageSize.width}
            height={imageSize.height}
            alt='Place image'
          />
        </a>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>{`${offer.currency}${offer.price}`}</b>
            <span className='place-card__price-text'>
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button${bookmarkClass}`}
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>{offer.isBookmark ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.ratingPercent}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={AppRoute.Offer.replace(':id', String(offer.id))}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.offerType}</p>
      </div>
    </article>
  );
};
