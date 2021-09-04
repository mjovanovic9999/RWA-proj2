import { createAction, props } from "@ngrx/store";
import { Note } from "../../models/note";

export const changeRating = createAction(
    "Change rating", 
    props<{movieId: string, rating: number}>()
    );

export const loadMoviesSuccess = createAction(
    "Load movies Success",
    props<{movies: Note[]}>()
);

export const loadMovies = createAction(
    "Load movies"
);

export const selectMovie = createAction(
    "Select Movie",
    props<{movieId: string}>()
);