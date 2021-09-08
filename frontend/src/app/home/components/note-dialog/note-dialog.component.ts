import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../../models/note';

interface NoteDialog extends Note {
  delete: boolean;
}

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss'],
})
export class NoteDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: NoteDialog) {}

  onSave = new EventEmitter();
  onCancel = new EventEmitter();
  onDelete = new EventEmitter();

  onSaveButtonClick() {
    this.onSave.emit({
      noteId: this.data.noteId,
      title: this.data.title,
      content: this.data.content,
    });
  }

  onCancelButtonClick() {
    this.onCancel.emit();
  }
  onDeleteButtonClick() {
    this.onDelete.emit(this.data.noteId);
  }

  ngOnInit(): void {}
}
