import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, TUserData } from '../../const';
import { requireAuthorization, saveUser } from '../action';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

export type TUserState = {
  user: TUserData | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: TUserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown
};

export const userProcess = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(saveUser, (state, action) => {
        state.user = action.payload;
      })
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  }

});
