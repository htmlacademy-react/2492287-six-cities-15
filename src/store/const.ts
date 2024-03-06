import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../const';

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

export type TError = {
  errorType: string;
  message: string;
}

export type TActionUtils = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
