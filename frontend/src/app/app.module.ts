import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';
import { StartScreenModule } from './start-screen/start-screen.module';
import { notesReducer } from './store/notes/notes.reducer';
import { userReducer } from './store/user/user.reducer';
import { NotesEffect } from './store/notes/notes.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NotesService } from './services/notes.service';
import { UserEffect } from './store/user/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ notes: notesReducer, userLogin: userReducer }),
    EffectsModule.forRoot([NotesEffect, UserEffect]),

    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    HomeModule,
    StartScreenModule,
  ],
  providers: [UserService, NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
