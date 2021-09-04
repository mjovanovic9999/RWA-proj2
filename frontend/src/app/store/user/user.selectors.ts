import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Note } from "../../models/note";
import { AppState } from "../app-state";
import { MoviesState } from "./user.reducer";//drugo ime

export const selectMoviesFeature = createSelector(
    (state: AppState) => state.movies,
    (movies) => movies
);
export const selectAllMovies = createSelector(
    selectMoviesFeature,
    (state: MoviesState) => Object
        .values(state.entities)
        .filter(movie => movie != null)
        .map(movie => <Note>movie)
);

export const selectAllMoviesAsDict = createSelector(
    selectMoviesFeature,
    (state: MoviesState) => state.entities
);

export const selectSelectedMovieId = createSelector(
    selectMoviesFeature,
    (state: MoviesState) => state.selectedMovieId
);


export const selectSelectedMovie = createSelector(
    selectAllMoviesAsDict,
    selectSelectedMovieId,
    (movies, selectedMovieId) => movies[selectedMovieId] ?? null
);