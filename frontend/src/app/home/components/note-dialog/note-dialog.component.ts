import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  addNewNote,
  deleteNote,
  updateNote,
} from 'src/app/store/notes/notes.actions';
import { Note } from '../../../models/note';

interface NoteDialog extends Note {
  delete: boolean;
}

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss'],
})
export class NoteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NoteDialog,
    private dialogRef: MatDialogRef<NoteDialogComponent>,
    private store: Store<AppState>
  ) {}

  onSaveButtonClick() {
    console.log(this.data);
    if (this.data.noteId)
      this.store.dispatch(
        updateNote({
          noteId: this.data.noteId,
          title: this.data.title,
          content: this.data.content,
        })
      );
    else {
      this.store.dispatch(
        addNewNote({
          title: this.data.title,
          content: this.data.content,
        })
      );
    }
    this.dialogRef.close();
  }

  onCancelButtonClick() {
    this.dialogRef.close();
  }
  onDeleteButtonClick() {
    this.store.dispatch(deleteNote({ noteId: this.data.noteId }));
    this.dialogRef.close();
  }
}
