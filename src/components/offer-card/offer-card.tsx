import { FC, memo } from 'react';
import { OfferCardType, getCardClassName, getCardImageClassName,
  getCardImageSize, getCardInfoClassName, getOfferLinkById } from './lib';
import { Link } from 'react-router-dom';
import { TOffer } from '../../const';
import {ButtonFavorite }from '../button-favorite';
import { useAppSelector } from '../../hooks';
import { getIsAuth } from '../../store/user-process/selectors';

export type TOfferCardProps = {
  offer: TOffer;
  offerCardType: OfferCardType;
  onHover?: (offer: TOffer | null) => void;
}

const OfferCard: FC<TOfferCardProps> = ({offer, onHover, offerCardType}) => {
  const cardClass = getCardClassName(offerCardType);
  const cardImageClass = getCardImageClassName(offerCardType);
  const cardInfoClass = getCardInfoClassName(offerCardType);
  const imageSize = getCardImageSize(offerCardType);
  const offerLink = getOfferLinkById(offer.id);
  const isAuth = useAppSelector(getIsAuth);

  const handleOfferMouseEnter = () => {
    if (onHover){
      onHover(offer);
    }
  };

  const handleOfferMouseLeave = () => {
    if (onHover){
      onHover(null);
    }
  };

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={handleOfferMouseLeave}
    >
      {
        offer.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      }
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
          <ButtonFavorite
            offer={offer}
            typeCard='place-card'
            width={18}
            height={19}
            isAuth={isAuth}
          />
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

const MemoOfferCard = memo(OfferCard);

export {MemoOfferCard as OfferCard};
