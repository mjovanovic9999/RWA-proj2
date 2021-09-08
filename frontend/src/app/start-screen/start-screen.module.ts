import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { initialState, userReducer } from '../store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from '../store/user/user.effects';
import { NotesEffect } from '../store/notes/notes.effects';
import { notesReducer } from '../store/notes/notes.reducer';

export const reducers: ActionReducerMap<any> = {
  notes: notesReducer,
  user: userReducer,
};

@NgModule({
  declarations: [LoginComponent, NewAccountComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  exports: [LoginComponent, NewAccountComponent],
})
export class StartScreenModule {}
