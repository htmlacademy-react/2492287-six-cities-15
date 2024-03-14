import { createSlice } from '@reduxjs/toolkit';
import { TReviewFull, TReviewFulls } from '../../const';
import { addReviewAction, fetchReviewsAction } from '../api-action';

export type TReviewState = {
  reviews: TReviewFulls;
  review?: TReviewFull;
}

const initialState: TReviewState = {
  reviews: []
};

export const reviewData = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.review = action.payload;
        state.reviews.push(action.payload);
      });
  }
});
