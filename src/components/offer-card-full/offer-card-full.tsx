import { FC } from 'react';
import { TOfferFull } from '../../const';
import { ButtonFavorite } from '../button-favorite';
import { OfferUser } from '../offer-user';
import { ReviewList } from '../review-list';
import { useAppSelector } from '../../hooks';
import { ReviewCreateCard } from '../review-create-card';
import { Rating } from '../rating';
import { getReviewsForOffer } from '../../store/review-data/selectors';
import { getAdultsText, getBedroomsText } from './lib';

export type TOfferFullCardProps = {
  offer: TOfferFull;
  isAuth: boolean;
}

export const OfferCardFull: FC<TOfferFullCardProps> = ({ offer, isAuth }) => {
  const reviews = useAppSelector(getReviewsForOffer);

  return (
    <div className='offer__container container' data-testid='offer-card-container'>
      <div className='offer__wrapper'>
        {
          offer.isPremium &&
          <div className='offer__mark'>
            <span>Premium</span>
          </div>
        }
        <div className='offer__name-wrapper'>
          <h1 className='offer__name'>
            {offer.title}
          </h1>
          <ButtonFavorite
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            typeCard='offer'
            width={31}
            height={33}
            isAuth={isAuth}
          />
        </div>
        <Rating objectType={'offer'} rating={offer.rating} isRound/>
        <ul className='offer__features'>
          <li className='offer__feature offer__feature--entire'>Apartment</li>
          <li className='offer__feature offer__feature--bedrooms'>
            {getBedroomsText(offer.bedrooms)}
          </li>
          <li className='offer__feature offer__feature--adults'>
            {getAdultsText(offer.maxAdults)}
          </li>
        </ul>
        <div className='offer__price'>
          <b className='offer__price-value'>€{offer.price}</b>
          <span className='offer__price-text'>&nbsp;night</span>
        </div>
        <div className='offer__inside'>
          <h2 className='offer__inside-title'>What&apos;s inside</h2>
          <ul className='offer__inside-list'>
            {offer.goods.map((good) => (
              <li className='offer__inside-item' key={good}>{good}</li>
            ))}
          </ul>
        </div>
        <div className='offer__host'>
          <h2 className='offer__host-title'>Meet the host</h2>
          <OfferUser user={offer.host} />
        </div>
        <ReviewList reviews={reviews} />
        {isAuth && <ReviewCreateCard />}
      </div>
    </div>
  );
};

