import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { logout, updateAccount } from 'src/app/store/user/user.actions';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss'],
})
export class ToolbarComponentComponent implements OnInit {
  faUser = faUser;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  openAccountDialog = false;

  constructor(
    public accountDialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  openAccount() {
    let dialog = this.accountDialog.open(AccountDialogComponent, {
      width: '350px',
      minHeight: '200px',
      maxHeight: '600px',
      disableClose: true,
    });
    dialog.afterClosed().subscribe((result) => {
      result.newPassword != null &&
      result.newPasswordRepeat != null &&
      result.oldPassword != null
        ? this.store.dispatch(
            updateAccount({
              oldPassword: result.oldPassword,
              newPassword: result.newPassword,
              newPasswordRepeat: result.newPasswordRepeat,
            })
          )
        : null;
    });
  }
  logOut() {
    this.store.dispatch(logout());
  }
}