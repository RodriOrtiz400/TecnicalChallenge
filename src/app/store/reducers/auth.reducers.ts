import { createReducer, on } from '@ngrx/store';

import { setUser, unSetUser } from '../actions/auth.actions';

export interface AuthState {
  user: any;
}

export const authInitialState: AuthState = {
  user: null,
};

const _authReducer = createReducer(
  authInitialState,

  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(unSetUser, (state) => ({ ...state, user: null }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
