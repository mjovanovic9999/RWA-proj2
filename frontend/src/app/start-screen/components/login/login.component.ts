import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { isLoggedIn, login } from 'src/app/store/user/user.actions';
import { selectIsUserLoggedIn } from 'src/app/store/user/user.selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faUserCircle = faUserCircle;

  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(isLoggedIn());

    this.store.select(selectIsUserLoggedIn).subscribe((isLoggedIn: boolean) => {
      isLoggedIn ? this.router.navigateByUrl('/home') : null;
    });
  }

  Login() {
    this.store.dispatch(
      login({ username: this.username, password: this.password })
    );
  }

  NewAccount() {
    this.router.navigateByUrl('/newaccount');
  }
}
