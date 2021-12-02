import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const logIn = createAction(
  '[Auth] Log In',
  props<{ username: string; password: string; airline: string }>()
);

export const logInSucces = createAction(
  '[Auth] Log In Success',
  props<{ user: User }>()
);

export const logInError = createAction(
  '[Auth] Log In Error',
  props<{ payload: any }>()
);

export const setUser = createAction('[Auth] setUser', props<{ user: any }>());

export const unSetUser = createAction('[Auth] unSetUser');

export const logoutAuth = createAction('[Auth] Log Out');
