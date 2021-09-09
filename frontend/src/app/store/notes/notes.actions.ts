import { createAction, props } from '@ngrx/store';
import { Note } from '../../models/note';

export const updateNote = createAction(
  'Update Note',
  props<{
    noteId: string;
    title: string;
    content: string;
  }>()
);

export const updateNotesSuccess = createAction(
  'Update Note Success',
  props<{
    noteId: string;
    title: string;
    content: string;
  }>()
);

export const addNewNote = createAction(
  'Add Note',
  props<{
    title: string;
    content: string;
  }>()
);

export const addNewNoteSuccess = createAction(
  'Add Note Success',
  props<{
    noteId: string;
    title: string;
    content: string;
  }>()
);

export const loadNotes = createAction('Load Notes');

export const loadNotesSuccess = createAction(
  'Load Notes Success',
  props<{ notes: Note[] }>()
);

export const selectNote = createAction(
  'Select Note',
  props<{ newNoteId: string }>()
);

export const deselectNote = createAction('Deselect Note');

export const deleteNote = createAction(
  'Delete Note',
  props<{
    noteId: string;
  }>()
);

export const deleteNoteSuccess = createAction(
  'Delete Note Success',
  props<{
    noteId: string;
  }>()
);
