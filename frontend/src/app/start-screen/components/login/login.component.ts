import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

  Login(){

  }

  NewAccount(){
    
  }
}
