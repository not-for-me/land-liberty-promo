import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';
import { InsuranceDetailDialogComponent } from '../insurance-detail-dialog/insurance-detail-dialog.component';
import { PageScrollInstance, PageScrollService, EasingLogic } from 'ng2-page-scroll';
import { InsuranceCompositonType } from '../../insurance-details';
import { QuestionInfo } from '../question-info.model';

@Component({
  selector: 'll-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss']
})
export class QuestionSectionComponent implements OnInit {
  @Input() private questionInfo: QuestionInfo;

  constructor(public dialog: MdDialog,
    @Inject(DOCUMENT) private document: any,
    private pageScrollService: PageScrollService,
  ) { }

  clickedYes() {
    if (this.questionInfo.hasNext) {
      this.scrollToNextQuestion();
    } else {
      this.openDialog(this.questionInfo.compoTypeInYes);
    }
  }

  clickedNo() {
    this.openDialog(this.questionInfo.compoTypeInNo);
  }

  openDialog(componsionType: InsuranceCompositonType) {
    const dialogRef = this.dialog.open(InsuranceDetailDialogComponent);
    dialogRef.componentInstance.compositionType = componsionType;
    dialogRef.afterClosed().subscribe(result => { });
  }

  scrollToNextQuestion() {
    const pageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${this.questionInfo.nextId}`);
    this.pageScrollService.start(pageScrollInstance);
  }

  ngOnInit() {
  }

}
