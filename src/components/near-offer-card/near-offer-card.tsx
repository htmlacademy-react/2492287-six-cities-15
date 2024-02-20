import { FC } from 'react';
import Currency from '../../shared/currency';
import OfferTypes from '../../shared/offer-types';

export type TNearOfferCardProps = {
  price: number;
  currencyType: Currency;
  title: string;
  offerType: OfferTypes;
  ratingPercent: number;
  imageName: string;
  isBookmark?: boolean;
  isPremium?: boolean;
}

export const NearOfferCard: FC<TNearOfferCardProps> = ({price, currencyType, title, offerType, ratingPercent, imageName, isBookmark, isPremium}) => {
  const bookmarkClass = isBookmark ? ' place-card__bookmark-button--active' : '';

  return (
    <article className='near-places__card place-card'>
      {isPremium && <div className='place-card__mark'> <span>Premium</span> </div>}
      <div className='near-places__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img
            className='place-card__image'
            src={`img/${imageName}`}
            width={260}
            height={200}
            alt='Place image'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>{`${currencyType}${price} `}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
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
            <span className='visually-hidden'>{isBookmark ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${ratingPercent}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{title}</a>
        </h2>
        <p className='place-card__type'>{offerType}</p>
      </div>
    </article>
  );
};