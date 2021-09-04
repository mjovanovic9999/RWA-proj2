import { createEntityAdapter } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { User } from 'src/app/models/user';

export interface UserState /* extends EntityState<Note>  nzm treba li*/ {
  currentUserId: number;
}

const adapter = createEntityAdapter<User>();

const initialState: UserState = adapter.getInitialState({
  currentUserId: -1,
});

export const userReducer = createReducer(
  initialState
  //,
  //  on(Actions.loadNotes,(state)=>
  //  {
  //       return {...state};//gde je tu effect
  //  }
  //  )
);
