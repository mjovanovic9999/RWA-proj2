import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Note } from '..//../models/note';
import * as Actions from './notes.actions';

export interface NotesState extends EntityState<Note> {
  //   allNotes: ReadonlyArray<Note>;
  selectedNoteId: number;
}

const adapter = createEntityAdapter<Note>();

const initialState: NotesState = adapter.getInitialState({
  selectedNoteId: -1,
});

export const notesReducer = createReducer(
  initialState,
  on(Actions.loadNotes, (state, { newNotes }) => adapter.setAll(newNotes,state)/* ({
    ...state,
    allNotes: newNotes,
  }) */),
  on(Actions.selectNote, (state, { newNoteId }) => ({
    ...state,
    selectedNoteId: newNoteId,
  })),
  on(Actions.loadMoviesSuccess, (state, {notes}) => adapter.setAll(notes, state)
  ),

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
);

//treba da imam user reducer
