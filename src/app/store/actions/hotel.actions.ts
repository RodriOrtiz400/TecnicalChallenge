import { createAction, props } from '@ngrx/store';

export const getHotel = createAction(
  '[Hotels] Get Hotel'
);

export const getHotelSucces = createAction(
  '[Hotels] Get Hotel Success',
  props<{ hotels: any[] }>()
);

export const getHotelError = createAction(
  '[Hotels] Get Hotel Error',
  props<{ payload: any }>()
);
