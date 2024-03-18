import { createSlice } from '@reduxjs/toolkit';
import { TReviewFull, TReviewFulls } from '../../const';
import { addReviewAction, fetchReviewsAction } from '../api-actions';

export type TReviewState = {
  reviews: TReviewFulls;
  review?: TReviewFull;
  addReviewStatus: 'loading' |'rejected' | 'none';
}

const initialState: TReviewState = {
  reviews: [],
  addReviewStatus: 'none'
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
      .addCase(addReviewAction.pending, (state) => {
        state.addReviewStatus = 'loading';
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.review = action.payload;
        state.reviews.push(action.payload);
        state.addReviewStatus = 'none';
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.addReviewStatus = 'rejected';
      });
  }
});
