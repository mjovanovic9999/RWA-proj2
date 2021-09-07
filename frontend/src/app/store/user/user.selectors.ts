import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const selectIsUserLoggedIn = createSelector(
  (state: AppState) => state.userLogin,
  (userLogin) => userLogin.isLoggedIn
);
