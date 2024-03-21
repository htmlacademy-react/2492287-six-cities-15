import { datatype, image, internet, name } from 'faker';
import { AuthorizationStatus } from '../../const';
import { userProcess } from './user-process';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { expectedUserData } from '../../utils/mocks';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      user: null,
      authorizationStatus: AuthorizationStatus.Auth };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {user: null, authorizationStatus: AuthorizationStatus.Unknown };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = {user: null, authorizationStatus: AuthorizationStatus.NoAuth };

    const userData = {
      name: name.firstName(),
      avatarUrl: image.imageUrl(),
      isPro: datatype.boolean(),
      email: internet.email(),
      token: internet.password()
    };
    const expectedState = {user: userData, authorizationStatus: AuthorizationStatus.Auth };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(userData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {user: expectedUserData, authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = {user: null, authorizationStatus: AuthorizationStatus.NoAuth };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {

    const initialState = { user: null, authorizationStatus: AuthorizationStatus.NoAuth };
    const expectedState = { user: expectedUserData, authorizationStatus: AuthorizationStatus.Auth };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(expectedUserData, '', {login: 'sdf', password: 'sd3'}));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = { user: expectedUserData, authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = { user: null, authorizationStatus: AuthorizationStatus.NoAuth };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = { user: expectedUserData, authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = { user: null, authorizationStatus: AuthorizationStatus.NoAuth };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
