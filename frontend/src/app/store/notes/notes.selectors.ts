import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Note } from '../../models/note';
import { AppState } from '../app.state';
import { NotesState } from './notes.reducer';

export const selectNotesFeature = createSelector(
  (state: AppState) => state.notes,
  (notes) => notes
);

export const selectAllNotes = createSelector(
  selectNotesFeature,
  (state: NotesState) =>
    Object.values(state.entities)
      .filter((note) => note != null)
      .map((note) => <Note>note) //mozda moze bolje
);

export const selectSelectedNoteId = createSelector(
  selectNotesFeature,
  (state: NotesState) => state.selectedNoteId
);

export const selectAllNotesAsDictionary = createSelector(
  selectNotesFeature,
  (state: NotesState) => state.entities
);

export const selectSelectedNote = createSelector(
  selectAllNotesAsDictionary,
  selectSelectedNoteId,
  (allNotes, noteId) => allNotes[noteId] /**??null */
);
