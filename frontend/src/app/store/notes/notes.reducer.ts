import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Note } from '..//../models/note';
import * as Actions from './notes.actions';

export interface NotesState extends EntityState<Note> {
  selectedNoteId: string;
}

const adapter = createEntityAdapter<Note>();

const initialState: NotesState = adapter.getInitialState({
  selectedNoteId: '',
});

export const notesReducer = createReducer(
  initialState,

  on(Actions.selectNote, (state, { newNoteId }) => ({
    ...state,
    selectedNoteId: newNoteId,
  })),
  on(Actions.deselectNote, (state) => ({
    ...state,
    selectedNoteId: '',
  })),
  on(
    Actions.loadNotessSuccess,
    (
      state,
      { notes } //da l je ok?????
    ) => adapter.setAll(notes, state)
  ),
  on(Actions.updateNotesSuccess, (state, { noteId, title, content }) => {
    ///
    //const note: Note = { noteId: noteId, title: title, content: content };
    const pom: Update<Note> = {
      id: '',
      changes: (state.entities[noteId] = {
        noteId: noteId,
        title: title,
        content: content,
      }),
    };
    console.log('bate uopste nmg pojma radi li ovo');
    return adapter.updateOne(pom, state);
  }),
  on(Actions.addNewNoteSuccess, (state, { noteId, title, content }) =>
    adapter.addOne({ noteId: noteId, title: title, content: content }, state)
  ),
  on(Actions.deleteNoteSuccess, (state) => ({
    ///lose
    ...state,
  }))
);