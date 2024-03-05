import { FC } from 'react';
import { TReviewFull } from '../../const';
import { Rating } from '../rating';

export type TReviewUserProps = {
  review: TReviewFull;
}

export const ReviewInfo: FC<TReviewUserProps> = ({review}) => {
  const reviewPeriod = new Intl.DateTimeFormat('us-US', {month: 'long', year: 'numeric'}).format(new Date(review.date));
  const reviewDate = review.date.split('T')[0];

  return (
    <div className='reviews__info'>
      <Rating objectType={'reviews'} rating={review.rating}/>
      <p className='reviews__text'>
        {review.comment}
      </p>
      <time className='reviews__time' dateTime={reviewDate}>
        {reviewPeriod}
      </time>
    </div>
  );
};
