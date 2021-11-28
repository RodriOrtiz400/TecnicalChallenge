import { createAction, props } from '@ngrx/store';

export const getHotels = createAction(
  '[Hotels] Get Hotels',
  props<{
    destination: string;
    checkin: string;
    checkout: string;
    guests: number;
  }>());

export const getHotelsSucces = createAction(
  '[Hotels] Get Hotels Success',
  props<{ hotels: any[] }>()
);

export const getHotelsError = createAction(
  '[Hotels] Get Hotels Error',
  props<{ payload: any }>()
);
