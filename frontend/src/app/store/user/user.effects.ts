import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadNotes } from '../notes/notes.actions';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffect {
  constructor(private userService: UserService, private actions$: Actions) {}

  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap((credentials) =>
        this.userService.login(credentials.username, credentials.password).pipe(
          mergeMap(() => [UserActions.loginSuccess(), loadNotes()]),
          catchError(() => of({ type: 'login error' }))
        )
      )
    );
  });

  registerEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.register),
      mergeMap((credentials) =>
        this.userService
          .register(credentials.username, credentials.password)
          .pipe(
            mergeMap(() => [UserActions.registerSuccess(), loadNotes()]),
            catchError(() => of({ type: 'register error' }))
          )
      )
    );
  });

  updateAccountEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateAccount),
      mergeMap((credentials) =>
        this.userService
          .updateAccount(
            credentials.oldPassword,
            credentials.newPassword,
            credentials.newPasswordRepeat
          )
          .pipe(
            map(() => UserActions.updateAccountSuccess()),
            catchError(() => of({ type: 'update error' }))
          )
      )
    );
  });

  isLoggedInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.isLoggedIn),
      mergeMap(() =>
        this.userService.isLoggedIn().pipe(
          mergeMap(() => [UserActions.loginSuccess(), loadNotes()]),
          catchError(() => of({ type: 'user isnt logged in' }))
        )
      )
    );
  });

  logoutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.logout),
      mergeMap(() =>
        this.userService.logout().pipe(
          map(() => UserActions.logoutSuccess()),
          catchError(() => of({ type: 'user isnt logged in' }))
        )
      )
    );
  });
}
