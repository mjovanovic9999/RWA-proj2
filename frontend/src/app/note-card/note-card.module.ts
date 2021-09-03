import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardListComponent } from './components/card-list/card-list.component';
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CardComponent, CardListComponent, NoteDialogComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [
    CardComponent,
    CardListComponent,
    // MatCardModule,
    // MatButtonModule,
    // MatIconModule,
    // MatGridListModule,
  ],
})
export class NoteCardModule {}
