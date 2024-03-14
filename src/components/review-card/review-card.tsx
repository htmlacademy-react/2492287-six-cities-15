import { FC } from 'react';
import { TReviewFull } from '../../const';
import { ReviewUser } from '../review-user';
import { Rating } from '../rating';

export type TReviewCardProps = {
  review: TReviewFull;
}

export const ReviewCard: FC<TReviewCardProps> = ({review}) => {
  const reviewPeriod = new Date(review.date).toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const reviewDate = review.date.split('T')[0];
  return (
    <li className='reviews__item' data-testid='review-card'>
      <ReviewUser user={review.user}/>
      <div className='reviews__info'>
        <Rating objectType={'reviews'} rating={review.rating}/>
        <p className='reviews__text'>
          {review.comment}
        </p>
        <time className='reviews__time' dateTime={reviewDate}>
          {reviewPeriod}
        </time>
      </div>
    </li>
  );
};
