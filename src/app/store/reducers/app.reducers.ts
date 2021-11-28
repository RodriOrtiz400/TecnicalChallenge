import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './index';

export interface AppState {
  ui: reducers.UiState;
  auth: reducers.AuthState;
  hotels: reducers.HotelsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.uiReducer,
  auth: reducers.authReducer,
  hotels: reducers.hotelReducer,
};
