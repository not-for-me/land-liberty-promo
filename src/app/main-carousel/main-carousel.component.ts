import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Image } from './image';
import { Observable, Subscription } from 'rxjs';

const IMAGES: Image[] = [
  { "title": "test 1", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg", link: "http://landliberty.org/" },
  { "title": "land liberty", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg", link: "http://landliberty.org/" },
  { "title": "sample img", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg", link: "http://landliberty.org/" },
  { "title": "test", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg", link: "http://landliberty.org/" },
  { "title": "samples", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg", link: "http://landliberty.org/" }
];
const SLIDE_INTERVAL = 3000;

/**
 * https://embed.plnkr.co/VKLszgqJtobyVruBj3Op/
 */
@Component({
  selector: 'll-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  // animations: [
  //   trigger('carousel', [
  //     state('1', style({ left: '-0%' })),
  //     state('2', style({ left: '-100%' })),
  //     state('3', style({ left: '-200%' })),
  //     state('4', style({ left: '-300%' })),
  //     state('5', style({ left: '-400%' })),
  //     transition('1 => 2', [animate('500ms easy-out', keyframes([style({ left: '-50%' })]))]),
  //     transition('2 => 3', [animate('500ms easy-out', keyframes([style({ left: '-150%' })]))]),
  //     transition('3 => 4', [animate('500ms easy-out', keyframes([style({ left: '-250%' })]))]),
  //     transition('4 => 5', [animate('500ms easy-out', keyframes([style({ left: '-350%' })]))]),
  //     transition('5 => 1', [animate('500ms easy-out', keyframes([style({ left: '-200%' })]))]),
  //   ])
  // ]
})
export class MainCarouselComponent implements OnInit, OnDestroy {
  images = IMAGES;
  // curSlide: number = 1;
  // sliderSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.sliderSubscription = Observable.interval(SLIDE_INTERVAL)
    //   .subscribe(() => {
    //     if (this.curSlide === this.images.length) {
    //       this.curSlide = 1;
    //     } else {
    //       this.curSlide++;
    //     }
    //   });
  }

  ngOnDestroy() {
    // this.sliderSubscription.unsubscribe();
  }
}
