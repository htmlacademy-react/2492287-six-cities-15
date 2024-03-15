import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, OfferConfig } from '../../const';
import { TState } from '../const';

export const getReviews = (state: TState) => state[NameSpace.Review].reviews;
export const getAddReviewStatus = (state: TState) => state[NameSpace.Review].addReviewStatus;

export const getReviewsForOffer = createSelector(
  [
    getReviews
  ],
  (reviews) => (
    [...reviews]
      .sort((review1, review2) => (new Date(review2?.date).getTime() - new Date(review1?.date).getTime()))
      .slice(0, OfferConfig.reviewsCount)
  )
);
