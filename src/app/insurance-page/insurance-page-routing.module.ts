import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancePageComponent } from './insurance-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { InsuranceDetailsComponent } from './insurance-details';

const routes: Routes = [
  {
    path: 'insurance',
    component: InsurancePageComponent,
    children: [
      { path: '', component: QuestionsComponent },
      { path: 'details', component: InsuranceDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class InsurancePageRoutingModule { }
