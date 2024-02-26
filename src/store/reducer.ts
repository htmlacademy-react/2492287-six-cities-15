import { createReducer } from "@reduxjs/toolkit";
import { offers } from "../mocks/offers";
import { changeCity, fillOffers } from "./action";
import { cities } from "../const";

const initialState = {
  activeCity: cities[0],
  offers: offers
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.city;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
})