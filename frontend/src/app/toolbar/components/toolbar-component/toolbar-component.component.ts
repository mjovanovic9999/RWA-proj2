import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss'],
})
export class ToolbarComponentComponent implements OnInit {
  faUser = faUser;

  openAccountDialog = false;

  constructor(public accountDialog: MatDialog) {}

  ngOnInit(): void {}

  openAccount() {
    let dialog = this.accountDialog.open(AccountDialogComponent, {
      data: { username: 'Toma123' },
      width: '350px',
      minHeight: '200px',
      maxHeight: '600px',
      disableClose: true,
    });
    dialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
//primer <input matInput [(ngModel)]="name">
