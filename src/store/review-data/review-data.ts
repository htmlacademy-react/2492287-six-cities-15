import { createSlice } from '@reduxjs/toolkit';
import { TReviewFull, TReviewFulls } from '../../const';
import { addReviewAction, fetchReviewsAction } from '../api-actions';
import { TFethcStatus } from './const';

export type TReviewState = {
  reviews: TReviewFulls;
  review?: TReviewFull;
  addReviewStatus: TFethcStatus;
  isFetchReviewsLoading: boolean;
}

const initialState: TReviewState = {
  reviews: [],
  addReviewStatus: 'none',
  isFetchReviewsLoading: false
};

export const reviewData = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isFetchReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isFetchReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isFetchReviewsLoading = false;
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
