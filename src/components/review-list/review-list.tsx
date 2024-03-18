import { FC } from 'react';
import { TReviewFull } from '../../const';
import { ReviewCard } from '../review-card';

export type TOfferListProps = {
  reviewCount: number;
  reviews: TReviewFull[];
}

export const ReviewList: FC<TOfferListProps> = ({reviewCount, reviews}) => (
  <section className='offer__reviews reviews' data-testid='review-list'>
    <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{reviewCount}</span>
    </h2>
    <ul className='reviews__list'>
      {
        reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))
      }
    </ul>
  </section>
);
