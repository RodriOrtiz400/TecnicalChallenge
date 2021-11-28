import { createReducer, on } from '@ngrx/store';

import { getHotels, getHotelsError, getHotelsSucces } from '../actions/index';

export interface HotelsState {
  hotels: any[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const hotelsInitialState: HotelsState = {
  hotels: [],
  loaded: false,
  loading: false,
  error: null,
};

const _hotelReducer = createReducer(
  hotelsInitialState,

  on(getHotels, (state) => ({ ...state, loading: true })),

  on(getHotelsSucces, (state, { hotels }) => ({
    ...state,
    loading: false,
    loaded: true,
    hotels: hotels,
  })),

  on(getHotelsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function hotelReducer(state: any, action: any) {
  return _hotelReducer(state, action);
}
