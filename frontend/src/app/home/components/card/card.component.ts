import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Note } from '../../../models/note';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() note: Note = {
    noteId: '',
    title: 'Error',
    content: 'Error',
  };

  constructor(public noteDialog: MatDialog) {}

  ngOnInit(): void {}

  dialog: MatDialogRef<NoteDialogComponent, any> | null = null;

  openNoteDialog() {
    this.dialog = this.noteDialog.open(NoteDialogComponent, {
      data: {
        noteId: this.note.noteId,
        title: this.note.title,
        content: this.note.content,
        delete: true,
      },
      width: '900px',
      height: '700px',
    });
  }
}
