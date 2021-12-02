import { createReducer, on } from '@ngrx/store';
import { logoutAuth } from '../actions/auth.actions';

import {
  logIn,
  logInSucces,
  logInError,
} from '../actions/auth.actions';

export interface AuthState {
  user: any;
  loading: boolean;
}

export const authInitialState: AuthState = {
  user: null,
  loading: false,
};

const _authReducer = createReducer(
  authInitialState,

  on(logIn, (state) => ({ ...state, loading: true })),
  on(logInSucces, (state, { user }) => ({
    ...state,
    user: { ...user },
    loading: false,
  })),
  on(logInError, (state) => ({ ...state, loading: false })),
  on(logoutAuth, (state) => ({
    user: authInitialState.user,
    loading: authInitialState.loading,
  }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
