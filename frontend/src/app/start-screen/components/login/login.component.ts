import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { login } from 'src/app/store/user/user.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faUserCircle = faUserCircle;

  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  Login() {
    this.store.dispatch(
      login({ username: this.username, password: this.password })
    );
  }

  NewAccount() {}
}
