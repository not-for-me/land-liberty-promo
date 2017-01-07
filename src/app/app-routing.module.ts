import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page';
import { RealEstatePageComponent } from './real-estate-page';
import { InsurancePageComponent } from './insurance-page';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'real-estate', component: RealEstatePageComponent },
    { path: 'insurance', component: InsurancePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
