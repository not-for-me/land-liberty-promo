import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InsuranceTypeService } from './insurance-type.service';
import { InsuranceTypeInfo } from './insurance-type.model';

@Component({
  selector: 'll-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.scss']
})
export class InsuranceTypeComponent implements OnInit {
  @Input() contentInfo: InsuranceTypeInfo;
  @Output() onClickedDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private insuranceTypeService: InsuranceTypeService) { }

  ngOnInit() {
  }

  goDetails(type: string) {
    this.onClickedDetail.emit('clicked');
    this.insuranceTypeService.goDetails(this.contentInfo.id);
  } 

}
