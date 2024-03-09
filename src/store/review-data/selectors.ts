import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TState } from '../const';

export const getReviews = (state: TState) => state[NameSpace.Review].reviews;

export const getReviewsSorted = createSelector(
  getReviews,
  (reviews) => [...reviews].sort((review1, review2) => new Date(review2?.date).getTime() - new Date(review1?.date).getTime())
);
