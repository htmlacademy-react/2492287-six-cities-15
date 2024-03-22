import { FC } from 'react';
import { STAR_TO_WIDTH_COEFFICIENT, TRatingObjectType } from './const';

export type TRatingProps = {
  objectType: TRatingObjectType;
  rating: number;
}

export const Rating: FC<TRatingProps> = ({rating, objectType}) => (
  <div className={`${objectType}__rating rating`}>
    <div className={`${objectType}__stars rating__stars`}>
      <span style={{ width: `${Math.round(rating) * STAR_TO_WIDTH_COEFFICIENT}%` }} />
      <span className='visually-hidden'>Rating</span>
    </div>
    {
      objectType === 'offer' &&
        <span className='offer__rating-value rating__value'>{rating}</span>
    }
  </div>
);
