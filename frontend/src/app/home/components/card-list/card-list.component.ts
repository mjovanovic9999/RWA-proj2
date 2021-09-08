import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectNote } from 'src/app/store/notes/notes.actions';
import { selectAllNotes } from 'src/app/store/notes/notes.selectors';
import { Note } from '../../../models/note';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  notesList: Observable<readonly Note[]> = of([]);
  // @Output() onSelectedMovie: EventEmitter<string> = new EventEmitter<string>();//ne treba nam

  constructor(private store: Store<AppState>, public noteDialog: MatDialog) {}

  ngOnInit(): void {
    this.notesList = this.store.select(selectAllNotes);
  }
  // selectMovie(movie: Movie) {
  //   this.store.dispatch(selectMovie({movieId: movie.id}));
  // }

  clickNote(note: Note) {
    this.store.dispatch(selectNote({ newNoteId: note.noteId }));
  }
  addNewNote() {
    //mozda u jednu fju open note
    this.openNoteDialog();
  }

  openNoteDialog() {
    const dialog = this.noteDialog.open(NoteDialogComponent, {
      data: {
        title: '',
        content: '',
        delete: false,
      },
      width: '900px',
      height: '670px',
    });

    const subscriptionSave = dialog.componentInstance.onSave.subscribe(
      (data: { title: string; content: string }) => {
        //add new
        dialog.close();
      }
    );

    const subscriptionCancel = dialog.componentInstance.onCancel.subscribe(
      () => {
        dialog.close();
      }
    );

    dialog.afterClosed().subscribe((result) => {
      subscriptionSave.unsubscribe();
      subscriptionCancel.unsubscribe();
    });
  }
}
