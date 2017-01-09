import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { INSURANCE_TYPE, InsuranceCompositonType } from '../../insurance-details';

@Component({
  selector: 'll-insurance-detail-dialog',
  templateUrl: './insurance-detail-dialog.component.html',
  styleUrls: ['./insurance-detail-dialog.component.css']
})
export class InsuranceDetailDialogComponent implements OnInit {
  compositionType: InsuranceCompositonType;

  constructor(public dialogRef: MdDialogRef<InsuranceDetailDialogComponent>) { }

  ngOnInit() {
  }

  getContentInfo(id) {
    return INSURANCE_TYPE.find(val => val.id === id);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
