import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { NotesService } from "src/app/services/notes.service";
import { AppState } from "../app-state";
// import * as MovieActions from './movies.actions';


@Injectable()
export class MoviesEffect {
    constructor(private moviesService: NotesService, private actions$: Actions) { }

    // loadEffect$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(MovieActions.loadMovies),
    //         mergeMap(() => this.moviesService.getAll()
    //             .pipe(
    //                 map((movies) => (MovieActions.loadMoviesSuccess({movies}))),
    //                 catchError(() => of({ type: "load error" }))
    //             )
    //         )
    //     )
    // )
}