import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import { SharedModule } from './shared';
import { MainPageModule } from './main-page';
import { InsurancePageModule } from './insurance-page';
import { RealEstatePageModule } from './real-estate-page';

import { AppComponent } from './app.component';

import { FIREBASE_CONFIG } from '../firebase.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AppRoutingModule,
    SharedModule,
    MainPageModule,
    InsurancePageModule,
    RealEstatePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
