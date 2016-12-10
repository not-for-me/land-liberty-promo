import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainSelectorComponent } from './main-selector/main-selector.component';

import { FIREBASE_CONFIG } from '../firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainCarouselComponent,
    MainSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
