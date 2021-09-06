import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NotesService } from 'src/app/services/notes.service';
import { AppState } from '../app.state';
import * as NotesActions from './notes.actions';

@Injectable()
export class NotesEffect {
  constructor(private notesService: NotesService, private actions$: Actions) {}

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.loadNotes),
      switchMap(() =>
        this.notesService
          .getAll() //mzd bolje switch map
          .pipe(
            map((notes) => NotesActions.loadMoviesSuccess({ notes })),
            catchError(() => of({ type: 'load error' }))
          )
      )
    )
  );
}
