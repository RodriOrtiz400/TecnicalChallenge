import { createAction, props } from '@ngrx/store';

export const getHotel = createAction(
  '[Hotels] Get Hotel',
  props<{
    id: string;
  }>()
);

export const getHotelSucces = createAction(
  '[Hotels] Get Hotel Success',
  props<{ hotel: any }>()
);

export const getHotelError = createAction(
  '[Hotels] Get Hotel Error',
  props<{ payload: any }>()
);
