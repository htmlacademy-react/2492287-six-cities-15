import { createSlice } from '@reduxjs/toolkit';
import { TReviewFull, TReviewFulls } from '../../const';
import { addReviewAction, fetchReviewsAction } from '../api-action';

export type TReviewState = {
  reviews: TReviewFulls;
  isReviewsDataLoading: boolean;
  review?: TReviewFull;
}

const initialState: TReviewState = {
  reviews: [],
  isReviewsDataLoading: false
};

export const reviewData = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.review = action.payload;
        state.reviews.push(action.payload);
      });
  }
});
