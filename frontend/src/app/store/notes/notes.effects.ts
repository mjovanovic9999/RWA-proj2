import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { NotesService } from 'src/app/services/notes.service';
import { AppState } from '../app.state';
import * as NotesActions from './notes.actions';

@Injectable()
export class NotesEffect {
  constructor(private notesService: NotesService, private actions$: Actions) {}

  loadNotesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.loadNotes),
      mergeMap(() =>
        this.notesService.getAllNotes().pipe(
          map((notes) => NotesActions.loadNotesSuccess({ notes: notes })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );

  updateNoteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.updateNote),
      mergeMap((note) =>
        this.notesService
          .updateNote(note.noteId, note.title, note.content)
          .pipe(
            map((updatedNote) =>
              NotesActions.updateNotesSuccess({
                noteId: updatedNote.noteId,
                title: updatedNote.title,
                content: updatedNote.content,
              })
            ),
            catchError(() => of({ type: 'update error' }))
          )
      )
    )
  );

  addNewNoteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.addNewNote),
      mergeMap((note) =>
        this.notesService.addNewNote(note.title, note.content).pipe(
          map((newNote) =>
            NotesActions.addNewNoteSuccess({
              noteId: newNote.noteId,
              title: newNote.title,
              content: newNote.content,
            })
          ),
          catchError(() => of({ type: 'add error' }))
        )
      )
    )
  );

  deleteNoteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.deleteNote),
      mergeMap((note) =>
        this.notesService.deleteNote(note.noteId).pipe(
          map((deletedNoteId) =>
            NotesActions.deleteNoteSuccess({ noteId: deletedNoteId })
          ),
          catchError(() => of({ type: 'delete error' }))
        )
      )
    )
  );
}
