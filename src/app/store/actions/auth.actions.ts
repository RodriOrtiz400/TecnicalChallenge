import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[Auth] setUser', props<{ user: any }>());

export const unSetUser = createAction('[Auth] unSetUser');
