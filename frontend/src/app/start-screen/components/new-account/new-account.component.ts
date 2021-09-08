import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { register } from 'src/app/store/user/user.actions';
import { selectIsUserLoggedIn } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  faUserCircle = faUserCircle;

  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectIsUserLoggedIn).subscribe(
      (isLoggedIn: boolean) =>
        isLoggedIn ? this.router.navigateByUrl('/home') : null //mozda umesto null na login
    );
  }

  CreateNewAccount() {
    this.store.dispatch(
      register({ username: this.username, password: this.password })
    );
  }
}
