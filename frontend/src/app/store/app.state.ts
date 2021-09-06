import { NotesState } from './notes/notes.reducer';
import { UserState } from './user/user.reducer';

export interface AppState {
  notes: NotesState;
  user: UserState;
}
