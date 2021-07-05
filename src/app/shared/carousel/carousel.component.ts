import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() items: Array<any>;
  visibleItemsCount;
  autoSlide ;
  loop;
  mainImage = '';
  visibleItems = [];
  start = 0;
  end;


  @Output() slideChanged = new EventEmitter<boolean>();
  @Output() mainImageChanged = new EventEmitter<string>(); //???


  constructor(@Inject('configs') public configs: any) {
    console.log(configs);
    this.visibleItemsCount = configs.visibleItemsCount;
    this.end = configs.visibleItemsCount;
    this.autoSlide = configs.autoSlide;
    this.loop = configs.loop;
  }

  ngOnInit(): void {
    this.mainImage = this.items[0];
    this.visibleItems = this.items.slice(this.start, this.end);
    if (this.autoSlide) {
      setInterval(this.onSlideChanged.bind(this), 2000);
    }
  }
  onSlideChanged(type) {
    if (!this.items || (this.items.length < this.visibleItemsCount)) {
      return null;
    }
    if (type === 'left') {
      if (!this.loop && (this.start === 0)) {
        return null;
      }
      if (this.loop && (this.start === 0)) {
        const last = this.items.pop();
        this.items.unshift(last);
      } else {
        this.start -= 1;
        this.end -= 1;
      }
      this.visibleItems.pop();
      this.visibleItems.unshift(this.items[this.start]);
    } else {
      if (!this.loop && (this.end === this.items.length)) {
        return null;
      }
      if (this.loop && (this.end === this.items.length)) {
        const first = this.items.shift();
        this.items.push(first);
      } else {
        this.start += 1;
        this.end += 1;
      }
      this.visibleItems.shift();
      this.visibleItems.push(this.items[this.end - 1]);
    }
    // this.slideChanged.emit(); ????
  }

  onMainImageChanged(item) {
    this.mainImage = item;
    this.mainImageChanged.emit(item);
  }

}
