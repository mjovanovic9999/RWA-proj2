import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsUserLoggedIn } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectIsUserLoggedIn).subscribe(
      (isLoggedIn: boolean) =>
        isLoggedIn ? null : this.router.navigateByUrl('/') //mozda umesto null na login
    );
  }
}
