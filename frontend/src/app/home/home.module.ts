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
import { HomeComponent } from './components/home/home.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component';

@NgModule({
  declarations: [
    ToolbarComponentComponent,
    AccountDialogComponent,
    HomeComponent,
    CardComponent,
    CardListComponent,
    NoteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatSelectModule,
    BrowserAnimationsModule, //visak
    BrowserModule, //isto
    FormsModule, //issto
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [ HomeComponent],
})
export class HomeModule {}
