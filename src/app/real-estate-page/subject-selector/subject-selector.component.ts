import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.scss']
})
export class SubjectSelectorComponent implements OnInit {
  selectedTab: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
