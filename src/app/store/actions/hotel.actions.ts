import { createAction, props } from '@ngrx/store';

export const getHotel = createAction(
  '[Hotel] Get Hotel',
  props<{
    id: string;
  }>()
);

export const getHotelSucces = createAction(
  '[Hotel] Get Hotel Success',
  props<{ hotel: any }>()
);

export const getHotelError = createAction(
  '[Hotel] Get Hotel Error',
  props<{ payload: any }>()
);

export const logoutHotel = createAction('[Hotel] Log Out');
