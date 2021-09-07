import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as Actions from './user.actions';

export interface UserLoginState {
  isLoggedIn: boolean;
}

export const userReducer = createReducer(
  false,
  on(Actions.loginSuccess, () => true),
  on(Actions.registerSuccess, () => true),
  on(Actions.logout, () => false)
);
