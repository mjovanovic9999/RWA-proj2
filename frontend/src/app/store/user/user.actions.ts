import { createAction, props } from '@ngrx/store';

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
    oldPassword: string;
    newPassword: string;
    newPasswordRepeat: string;
  }>()
);
export const updateAccountSuccess = createAction('Update Account Success');

export const logout = createAction('Logout');
export const logoutSuccess = createAction('Logout Sucess');

export const isLoggedIn = createAction('Is Logged In');
