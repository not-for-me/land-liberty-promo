import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    PageScrollConfig.defaultDuration = 500;
  } 
}
