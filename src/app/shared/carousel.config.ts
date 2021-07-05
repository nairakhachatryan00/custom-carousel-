import {InjectionToken} from '@angular/core';

export class CarouselConfigs {
  // visibleItemsCount;
  // autoSlide;
  // loop;
  // constructor() {
  // }
  constructor(public visibleItemsCount: number, public autoSlide: boolean, public loop: boolean) {}
}
