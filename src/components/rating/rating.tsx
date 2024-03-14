import { FC } from 'react';

export type TRatingProps = {
  objectType: 'offer' | 'reviews' | 'place-card';
  rating: number;
  isRound?: boolean;
}

export const Rating: FC<TRatingProps> = ({rating, objectType, isRound}) => {
  const roundedRating = isRound ? Math.round(rating) : rating;
  return (
    <div className={`${objectType}__rating rating`}>
      <div className={`${objectType}__stars rating__stars`}>
        <span style={{ width: `${roundedRating * 20}%` }} />
        <span className='visually-hidden'>Rating</span>
      </div>
      {
        objectType === 'offer' &&
        <span className='offer__rating-value rating__value'>{rating}</span>
      }
    </div>
  );
};
