import { Component, OnInit } from '@angular/core';
import { QuestionInfo } from './question-info.model';

@Component({
  selector: 'll-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
    questionList: QuestionInfo[] = [
    {
      id: 'q-1',
      hasNext: true,
      nextId: 'q-2',
      problemHtml: '나는 결혼을 했다.',
      compoTypeInNo: 'type-1'
    },
    {
      id: 'q-2',
      hasNext: true,
      nextId: 'q-3',
      problemHtml: '가족의 생계를 책임지고 있다.<br/>(가족 중 홀로 일하고 있다.)',
      compoTypeInNo: 'type-1'
    },
    {
      id: 'q-3',
      hasNext: false,
      nextId: '',
      problemHtml: '자녀가 있다.',
      compoTypeInNo: 'type-2',
      compoTypeInYes: 'type-3'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
