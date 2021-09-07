import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  faUserCircle = faUserCircle;

  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  CreateNewAccount() {}
}
