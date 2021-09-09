import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss'],
})
export class AccountDialogComponent {
  constructor(private dialogRef: MatDialogRef<AccountDialogComponent>) {}

  oldPassword = '';
  newPassword = '';
  newPasswordRepeat = '';

  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      newPasswordRepeat: this.newPasswordRepeat,
    });
  }
}
