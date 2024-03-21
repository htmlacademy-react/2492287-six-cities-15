import { AuthorizationStatus, NameSpace } from '../../const';
import { expectedOfferState } from '../../utils/mocks';
import { TReviewState } from '../review-data/review-data';
import { getAuthorizationStatus, getIsAuth, getUser } from './user-process.selectors';
import { TUserState } from './user-process';

describe('GameData selectors', () => {
  const state = {
    [NameSpace.Offer]: expectedOfferState,
    [NameSpace.Review]: {reviews: [], addReviewStatus: 'none', isFetchReviewsLoading: false} as TReviewState,
    [NameSpace.User]: {user: null, authorizationStatus: AuthorizationStatus.Unknown} as TUserState
  };

  it('should return authorizationStatus from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toEqual(authorizationStatus);
  });

  it('should return user from state', () => {
    const { user } = state[NameSpace.User];
    const result = getUser(state);
    expect(result).toEqual(user);
  });

  it('should return isAuth from state', () => {
    const result = getIsAuth(state);
    expect(result).toBeFalsy();
  });
});
