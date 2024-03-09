import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { offerData } from './offer-data/offer-data';
import { reviewData } from './review-data/review-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Review]: reviewData.reducer
});
