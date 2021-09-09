import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .post<{ username: string; password: string }>(
        environment.URL + '/users/login',
        { username: username, password: password }, 
        { withCredentials: true, observe: 'response' }
      )
      .pipe(catchError(errorHandler));
  }

  register(username: string, password: string) {
    return this.httpClient
      .post<{ username: string; password: string }>(
        environment.URL + '/users/register',
        { username: username, password: password }, 
        { withCredentials: true, observe: 'response' }
      )
      .pipe(catchError(errorHandler));
  }

  isLoggedIn() {
    return this.httpClient
      .get(environment.URL + '/users', {
        withCredentials: true,
        observe: 'response',
      }) //mozda observe
      .pipe(catchError(errorHandler));
  }

  updateAccount(
    oldPassword: string,
    newPassword: string,
    newPasswordRepeat: string
  ) {
    return this.httpClient
      .patch<{ password: string }>(
        environment.URL + '/users',
        {
          oldpassword: oldPassword,
          newpassword: newPassword,
          newpasswordrepeat: newPasswordRepeat,
        },
        { withCredentials: true }
      )
      .pipe(catchError(errorHandler));
  }

  logout() {
    return this.httpClient
      .get(environment.URL + '/users/logout', {
        withCredentials: true,
        observe: 'response',
      }) 
      .pipe(catchError(errorHandler));
  }
}
const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
