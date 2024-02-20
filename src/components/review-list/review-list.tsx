import { FC } from 'react';
import { TReview } from '../../const';
import { ReviewCard } from '../review-card';

export type TOfferListProps = {
  reviews: TReview[];
}

export const ReviewList: FC<TOfferListProps> = ({reviews}) => (
  <ul className='reviews__list'>
    {
      reviews.map((review: TReview) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))
    }
  </ul>
);
