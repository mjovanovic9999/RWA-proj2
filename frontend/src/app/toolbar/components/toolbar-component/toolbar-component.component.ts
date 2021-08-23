import { Component, OnInit } from '@angular/core';

import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss'],
})
export class ToolbarComponentComponent implements OnInit {
  faUser = faUser;

  openAccountDialog=false;

  constructor() {}

  ngOnInit(): void {}

  openAccount(){
    this.openAccountDialog=true;    
  }
}
//primer <input matInput [(ngModel)]="name">