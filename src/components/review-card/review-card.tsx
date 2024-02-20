import { FC } from 'react';
import { TReview } from '../../shared/review';

export type TReviewCardProps = {
  review: TReview;
}

export const ReviewCard: FC<TReviewCardProps> = ({review}) => {
  const reviewPeriod = new Intl.DateTimeFormat('us-US', {month: 'long', year: 'numeric'}).format(review.date);
  const reviewDate = review.date.toISOString().split('T')[0];

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={`img/${review.avatar}`}
            width={54}
            height={54}
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{review.userName}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${review.rating * 20}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {review.review}
        </p>
        <time className='reviews__time' dateTime={reviewDate}>
          {reviewPeriod}
        </time>
      </div>
    </li>
  );
};
