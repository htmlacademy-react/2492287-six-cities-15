import { FC, memo } from 'react';
import { getCardClassName, getCardImageClassName,
  getCardImageSize, getCardInfoClassName, getOfferLinkById } from './lib';
import { Link } from 'react-router-dom';
import { TOffer } from '../../const';
import {ButtonFavorite }from '../button-favorite';
import { useAppSelector } from '../../hooks';
import { getIsAuth } from '../../store/user-process/user-process-selectors';
import { ALT_IMAGE_TEXT, FavoriteButtonSize,
  OfferCardType, TOfferCardType } from './const';
import { Rating } from '../rating';

export type TOfferCardProps = {
  offer: TOffer;
  offerCardType: TOfferCardType;
  onHover?: (offer: TOffer | null) => void;
}

const OfferCard: FC<TOfferCardProps> = ({offer, onHover, offerCardType}) => {
  const cardClass = getCardClassName(OfferCardType[offerCardType]);
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
      data-testid='offer-card'
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
            width={imageSize.Width}
            height={imageSize.Height}
            alt={ALT_IMAGE_TEXT}
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
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            buttonTypeClassName='place-card'
            width={FavoriteButtonSize.width}
            height={FavoriteButtonSize.height}
            isAuth={isAuth}
          />
        </div>
        <Rating cardTypeClassName='place-card' rating={offer.rating} />
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
