import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() note: Note = {
    id: -1,
    title: 'Error',
    content: 'Error',
  };

  constructor() {}

  ngOnInit(): void {}
}
