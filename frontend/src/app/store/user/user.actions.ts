import { createAction, props } from '@ngrx/store';
//add dugme dodati
//dodati delete
export const login = createAction(
  'Login',
  props<{
    username: string;
    password: string;
  }>()
);

export const loginSuccess = createAction('Login Success');

export const register = createAction(
  'Register',
  props<{
    username: string;
    password: string;
  }>()
);

export const registerSuccess = createAction('Register Success');

export const updateAccount = createAction(
  'Update Account',
  props<{
    username: string;
    password: string;
  }>()
);
export const updateAccountSuccess = createAction('Update Account Success');

//iz logged in mozda provera ako ugasi tab ako vreme dozvoli
//logout takodje
export const logout = createAction('Logout');

export const isLoggedIn = createAction('Is Logged In');
