import { AxiosInstance } from 'axios';
import { store } from '.';

export type TAppDispatch = typeof store.dispatch;
export type TState = ReturnType<typeof store.getState>;

export type TActionUtils = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}

export type TAuthData = {
  login: string;
  password: string;
};

export const SliceName = {
  UserProcess: 'user-process',
  OfferData: 'offer-data',
  ReviewData: 'review-data',
} as const;
