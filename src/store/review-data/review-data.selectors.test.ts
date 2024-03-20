import { AuthorizationStatus, NameSpace } from '../../const';
import { expectedOfferState } from '../../utils/mocks';
import { TReviewState } from './review-data';
import { TUserState } from '../user-process/user-process';
import { getAddReviewStatus, getIsFetchReviewsLoading, getReviews, getReviewsCount, getReviewsForOffer } from './review-data.selectors';

describe('GameData selectors', () => {
  const state = {
    [NameSpace.Offer]: expectedOfferState,
    [NameSpace.Review]: {reviews: [], addReviewStatus: 'none', isFetchReviewsLoading: false} as TReviewState,
    [NameSpace.User]: {user: null, authorizationStatus: AuthorizationStatus.Unknown} as TUserState
  };

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Review];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });

  it('should return addReviewStatus from state', () => {
    const { addReviewStatus } = state[NameSpace.Review];
    const result = getAddReviewStatus(state);
    expect(result).toEqual(addReviewStatus);
  });

  it('should return ReviewsCount from state', () => {
    const { reviews } = state[NameSpace.Review];
    const result = getReviewsCount(state);
    expect(result).toEqual(reviews.length);
  });

  it('should return ReviewsForOffer from state', () => {
    const { reviews } = state[NameSpace.Review];
    const result = getReviewsForOffer(state);
    expect(result).toEqual(reviews);
  });

  it('should return true from state', () => {
    const result = getIsFetchReviewsLoading(state);
    expect(result).toBeFalsy();
  });
});
