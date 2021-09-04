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
import { reducers, metaReducers } from './store';
import { notesReducer } from './store/notes/notes.reducer';
import { userReducer } from './store/user/user.reducer';
import { NotesEffect } from './store/notes/notes.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({notes: notesReducer,user:userReducer}),
    StoreDevtoolsModule.instrument({maxAge:20}),
    // StoreModule.forRoot({}, {}), //nzm sta vi radite tu
    // StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([NotesEffect]),
    HomeModule,
    StartScreenModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
