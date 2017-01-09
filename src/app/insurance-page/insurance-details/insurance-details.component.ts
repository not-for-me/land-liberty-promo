import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { INSURANCE_TYPE } from './insurance-type';

@Component({
  selector: 'll-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss']
})
export class InsuranceDetailsComponent implements OnInit {
  insuranceTypes = INSURANCE_TYPE;
  selectedTab = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.selectedTab = (param['typeId'] - 1);
      console.log(`selected tab: ${this.selectedTab}`);
    });
  }

}
