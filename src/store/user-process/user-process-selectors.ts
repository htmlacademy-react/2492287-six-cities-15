import { AuthorizationStatus, NameSpace } from '../../const';
import { createSelector } from 'reselect';
import { TState } from '../const';

export const getAuthorizationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
export const getUser = (state: TState) => state[NameSpace.User].user;
export const getIsAuth = createSelector(
  [getAuthorizationStatus],
  (authorizationStatus) => authorizationStatus === AuthorizationStatus.Auth
);
