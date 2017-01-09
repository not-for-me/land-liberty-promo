import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdButtonModule, MdDialogModule, MdChipsModule, MdTabsModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InsurancePageRoutingModule } from './insurance-page-routing.module';
import { InsurancePageComponent } from './insurance-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionSectionComponent } from './questions/question-section/question-section.component';
import { InsuranceDetailDialogComponent } from './questions/insurance-detail-dialog/insurance-detail-dialog.component';
import { InsuranceDetailsComponent, InsuranceTypeComponent, InsuranceTypeService } from './insurance-details';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdChipsModule,
    MdTabsModule,
    InsurancePageRoutingModule
  ],
  declarations: [InsurancePageComponent,
    QuestionsComponent, QuestionSectionComponent, InsuranceDetailDialogComponent,
    InsuranceDetailsComponent, InsuranceTypeComponent],
  entryComponents: [InsuranceDetailDialogComponent],
  providers: [InsuranceTypeService],
  exports: [InsurancePageComponent]
})
export class InsurancePageModule { }
