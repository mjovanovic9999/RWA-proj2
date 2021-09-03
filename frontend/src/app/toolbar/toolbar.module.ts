import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponentComponent } from './components/toolbar-component/toolbar-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountDialogComponent } from './components/account-dialog/account-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ToolbarComponentComponent,
    AccountDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatSelectModule ,
    BrowserAnimationsModule,//visak
    BrowserModule, //isto
    FormsModule,//issto 
    MatDialogModule
  ],
  exports: [ToolbarComponentComponent,MatInputModule],
})
export class ToolbarModule {}
