import { createEntityAdapter, EntityState } from '@ngrx/entity';
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
  on(Actions.updateNotesSuccess, (state) => ({
    ///lose
    ...state,
  })),
  on(Actions.addNewNoteSuccess, (state, { noteId, title, content }) => ({
    ///lose
    ...state,
  })),
  on(Actions.deleteNoteSuccess, (state) => ({
    ///lose
    ...state,
  }))
);
//add
//addNewNoteSuccess

// on(Actions.changeRating, (state, {movieId, rating} ) => {
//     const targetMovie = state.entities[movieId];
//     if (targetMovie) {
//         return adapter.setOne({...targetMovie, score: rating}, state);
//     } else {
//         return state;
//     }
// }),

// on(Actions.selectMovie, (state, {movieId}) => ({
//     ...state,
//     selectedMovieId: movieId
// }))
