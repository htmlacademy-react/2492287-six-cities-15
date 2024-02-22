import { FC } from 'react';
import { TReview } from '../../const';
import { ReviewCard } from '../review-card';

export type TOfferListProps = {
  reviews: TReview[];
}

export const ReviewList: FC<TOfferListProps> = ({reviews}) => (
  <>
    <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{reviews.length}</span>
    </h2>
    <ul className='reviews__list'>
      {
        reviews.sort((review1, review2) => review2.date.getTime() - review1.date.getTime()).map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))
      }
    </ul>
  </>
);
