import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectNote } from 'src/app/store/notes/notes.actions';
import { selectAllNotes } from 'src/app/store/notes/notes.selectors';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {


  notesList: Observable<readonly Note[]> = of([]);
  // @Output() onSelectedMovie: EventEmitter<string> = new EventEmitter<string>();//ne treba nam

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
     this.notesList = this.store.select(selectAllNotes);
  }
  // selectMovie(movie: Movie) {
  //   this.store.dispatch(selectMovie({movieId: movie.id}));
  // }

  clickNote(note:Note){
    this.store.dispatch(selectNote({newNoteId:note.id}))
  }
  
}
