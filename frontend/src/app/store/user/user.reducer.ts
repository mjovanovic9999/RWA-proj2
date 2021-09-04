import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Note } from "..//../models/note";
import * as Actions from "./user.actions";


export interface MoviesState extends EntityState<Note> {
    selectedMovieId: string;
}

const adapter = createEntityAdapter<Note>();

const initialState : MoviesState = adapter.getInitialState({
    selectedMovieId: ""
});



export const moviesReducer = createReducer(initialState,
    // on(Actions.changeRating, (state, {movieId, rating} ) => {
    //     const targetMovie = state.entities[movieId];
    //     if (targetMovie) {
    //         return adapter.setOne({...targetMovie, score: rating}, state);
    //     } else {
    //         return state;
    //     }
    // }),
    // on(Actions.loadMoviesSuccess, (state, {movies}) => adapter.setAll(movies, state)
    // ),
    // on(Actions.selectMovie, (state, {movieId}) => ({
    //     ...state,
    //     selectedMovieId: movieId
    // }))
)