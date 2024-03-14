import { datatype, image, lorem, name } from 'faker';
import { reviewData } from './review-data';
import { addReviewAction, fetchReviewsAction } from '../api-action';

describe('ReviewData Slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      reviews: [],
      isReviewsDataLoading: false
    };
    const emptyAction = { type: '' };
    const result = reviewData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const initialState = {
      reviews: []
    };
    const emptyAction = { type: '' };
    const result = reviewData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set reviews with "fetchReviewsAction.fulfilled"', () => {
    const initialState = {
      reviews: []
    };

    const expectedState = {
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
      }]
    };

    const result = reviewData.reducer(initialState, fetchReviewsAction.fulfilled(expectedState.reviews, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "review" with "addReviewAction.fulfilled"', () => {
    const initialState = {
      reviews: []
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

    const expectedState = {
      reviews: [review],
      review: review
    };

    const result = reviewData.reducer(initialState, addReviewAction.fulfilled(review, '', review));

    expect(result).toEqual(expectedState);
  });
});
