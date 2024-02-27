import { createAction } from '@reduxjs/toolkit';
import { TCity, TOffer } from '../const';

export const changeCity = createAction<{city: TCity}>('cities/changeCity');
export const fillOffers = createAction<{offers: TOffer[]}>('cities/fillOffers');
