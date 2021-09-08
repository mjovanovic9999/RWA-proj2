import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as Actions from './user.actions';

export interface UserLoginState {
  isLoggedIn: boolean;
}

export const initialState: UserLoginState = {
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialState,
  on(Actions.loginSuccess, (state) => ({ ...state, isLoggedIn: true })),
  on(Actions.registerSuccess, (state) => ({ ...state, isLoggedIn: true })),
  on(Actions.logout, (state) => ({ ...state, isLoggedIn: false }))
);
