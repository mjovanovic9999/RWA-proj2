import { NotesState } from './notes/notes.reducer';
import { UserLoginState } from './user/user.reducer';

export interface AppState {
  notes: NotesState;
  userLogin: UserLoginState;
}
