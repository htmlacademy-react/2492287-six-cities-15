import { FC } from 'react';
import { TReviewFull } from '../../const';
import { ReviewUser } from '../review-user';
import { ReviewInfo } from '../review-info';

export type TReviewCardProps = {
  review: TReviewFull;
}

export const ReviewCard: FC<TReviewCardProps> = ({review}) => (
  <li className='reviews__item'>
    <ReviewUser user={review.user}/>
    <ReviewInfo review={review}/>
  </li>
);
