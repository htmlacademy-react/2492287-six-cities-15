import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, TUserData } from '../../const';
import { requireAuthorization, saveUser } from '../action';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { AxiosError, isAxiosError } from 'axios';
import { concatErrors } from '../lib';
import { toast } from 'react-toastify';
import { TErrorLogin } from '../const';

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
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        if (isAxiosError(action.payload)){
          const axiosErr = action.payload as AxiosError;
          const errorLogin = axiosErr.response?.data as TErrorLogin;
          toast.error(concatErrors(errorLogin.details));
        }
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
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
