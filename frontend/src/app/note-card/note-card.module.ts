import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [CardComponent, CardListComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
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
