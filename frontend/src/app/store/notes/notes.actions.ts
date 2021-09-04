import { createAction, props } from '@ngrx/store';
import { Note } from '../../models/note';
//add dugme dodati
//dodati delete
export const changeNote = createAction(
  'Change Note',
  props<{
    noteId: number;
    title: string;
    content: string;
  }>()
);

export const addNote = createAction(
  'Add Note',
  props<{
    title: string;
    content: string;
  }>()
);

export const loadMoviesSuccess = createAction(
  'Load Notes Success',
  props<{ notes: Note[] }>()
);

export const loadNotes = createAction(
  'Load Notes',
  props<{
    newNotes: Note[];
  }>()
);

export const selectNote = createAction(
  'Select Note',
  props<{ newNoteId: number }>()
);

//deselect note
