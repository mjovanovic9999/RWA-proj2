import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MatCardModule } from '@angular/material/card';
import { NoteCardModule } from './note-card/note-card.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartScreenModule } from './start-screen/start-screen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    MatCardModule,
    NoteCardModule,
    ToolbarModule,
    FontAwesomeModule,
    StartScreenModule,
    //fontawesoni nije installed
    //HttpClienModule ne prepoznaje ga??
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
