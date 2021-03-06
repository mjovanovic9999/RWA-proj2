import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpClient: HttpClient) {}

  getAllNotes() {
    return this.httpClient
      .get<Note[]>(environment.URL + '/notes', { withCredentials: true })
      .pipe(catchError(errorHandler));
  }

  addNewNote(title: string, content: string) {
    return this.httpClient
      .post<{ noteId: string; title: string; content: string }>(
        environment.URL + '/notes/new',
        { title: title, content: content },
        { withCredentials: true }
      )
      .pipe(catchError(errorHandler));
  }

  updateNote(noteId: string, title: string, content: string) {
    return this.httpClient
      .patch<{ noteId: string; title: string; content: string }>(
        environment.URL + '/notes/' + noteId,
        { title: title, content: content },
        { withCredentials: true }
      )
      .pipe(catchError(errorHandler));
  }

  deleteNote(noteId: string) {
    return this.httpClient
      .delete<{ noteId: string }>(environment.URL + '/notes/' + noteId, {
        withCredentials: true,
      })
      .pipe(catchError(errorHandler));
  }
}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
