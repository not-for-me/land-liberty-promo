import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePageComponent } from './insurance-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsurancePageComponent],
  exports: [InsurancePageComponent]
})
export class InsurancePageModule { }
