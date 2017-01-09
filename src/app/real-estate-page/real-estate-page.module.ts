import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdTabsModule } from '@angular/material';
import { RealEstatePageComponent } from './real-estate-page.component';
import { SubjectSelectorComponent } from './subject-selector/subject-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdTabsModule,
  ],
  declarations: [RealEstatePageComponent, SubjectSelectorComponent],
  exports: [RealEstatePageComponent]
})
export class RealEstatePageModule { }
