import { FC } from 'react';

export type TRatingProps = {
  objectType: 'offer' | 'reviews';
  rating: number;
}

export const Rating: FC<TRatingProps> = ({rating, objectType}) => (
  <div className={`${objectType}__rating rating`}>
    <div className={`${objectType}__stars rating__stars`}>
      <span style={{ width: `${Math.round(rating * 20)}%` }} />
      <span className='visually-hidden'>Rating</span>
    </div>
    {objectType === 'offer' && <span className='offer__rating-value rating__value'>{rating}</span>}
  </div>
);
