import { FC } from 'react';
import { STAR_TO_WIDTH_COEFFICIENT, TCardTypeClassName } from './const';

export type TRatingProps = {
  cardTypeClassName: TCardTypeClassName;
  rating: number;
}

export const Rating: FC<TRatingProps> = ({rating, cardTypeClassName}) => (
  <div className={`${cardTypeClassName}__rating rating`}>
    <div className={`${cardTypeClassName}__stars rating__stars`}>
      <span style={{ width: `${Math.round(rating) * STAR_TO_WIDTH_COEFFICIENT}%` }} />
      <span className='visually-hidden'>Rating</span>
    </div>
    {
      cardTypeClassName === 'offer' &&
        <span className='offer__rating-value rating__value'>{rating}</span>
    }
  </div>
);
