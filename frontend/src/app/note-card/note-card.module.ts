import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';

import {MatCardActions, MatCardModule, MatCardSubtitle, MatCardTitle} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardSubtitle,
    MatCardTitle,
    MatCardActions,
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class NoteCardModule { }
