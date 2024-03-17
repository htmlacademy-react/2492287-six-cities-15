import { datatype, image, lorem, name } from 'faker';
import { TReviewState, reviewData } from './review-data';
import { addReviewAction, fetchReviewsAction } from '../api-action';

describe('ReviewData Slice', () => {
  it('should return initial state with empty action', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };
    const emptyAction = { type: '' };
    const result = reviewData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };
    const emptyAction = { type: '' };
    const result = reviewData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set reviews with "fetchReviewsAction.fulfilled"', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };

    const expectedState: TReviewState = {
      reviews: [{
        comment: lorem.word(),
        rating: datatype.number(5),
        offerId: datatype.uuid(),
        id: datatype.uuid(),
        date: datatype.datetime().toUTCString(),
        user: {
          name: name.firstName(),
          avatarUrl: image.imageUrl(),
          isPro: datatype.boolean()
        }
      }],
      addReviewStatus: 'none'
    };

    const result = reviewData.reducer(initialState, fetchReviewsAction.fulfilled(expectedState.reviews, '', ''));

    expect(result.reviews).toEqual(expectedState.reviews);
  });

  it('should set "review" with "addReviewAction.fulfilled"', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };

    const review = {
      comment: lorem.word(),
      rating: datatype.number(5),
      offerId: datatype.uuid(),
      id: datatype.uuid(),
      date: datatype.datetime().toUTCString(),
      user: {
        name: name.firstName(),
        avatarUrl: image.imageUrl(),
        isPro: datatype.boolean()
      }
    };

    const expectedState: TReviewState = {
      reviews: [review],
      review: review,
      addReviewStatus: 'none'
    };

    const result = reviewData.reducer(initialState, addReviewAction.fulfilled(review, '', review));

    expect(result).toEqual(expectedState);
  });

  it('should set "addReviewStatus" to "loading" with "addReviewAction.pending"', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };
    const result = reviewData.reducer(initialState, addReviewAction.pending);

    expect(result.addReviewStatus).toBe('loading');
  });

  it('should set "addReviewStatus" to "rejected" with "addReviewAction.rejected"', () => {
    const initialState: TReviewState = {
      reviews: [],
      addReviewStatus: 'none'
    };
    const result = reviewData.reducer(initialState, addReviewAction.rejected);

    expect(result.reviews.length).toBe(0);
    expect(result.addReviewStatus).toBe('rejected');
  });

});
