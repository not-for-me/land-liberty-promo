import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
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
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
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
