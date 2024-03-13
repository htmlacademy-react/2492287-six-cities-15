import { AxiosInstance } from 'axios';
import { store } from '.';

export type TAppDispatch = typeof store.dispatch;
export type TErrorLoginDetail = {
  property: string;
  value: string;
  messages: string[];
}

export type TErrorLogin = {
  errorType: string;
  errorMessage: string;
  details: TErrorLoginDetail[];
}

export type TActionUtils = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}

export type TAuthData = {
  login: string;
  password: string;
};

export type TState = ReturnType<typeof store.getState>;
