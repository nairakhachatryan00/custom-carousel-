import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  providers: [{
  provide: 'configs',
  useValue: {
    visibleItemsCount: 3,
    autoSlide: false,
    loop: false
  },
}],
})
export class CountComponent implements OnInit {
  items = [
    'https://www.cmu.edu/brand/brand-guidelines/images/colors-carnegie-red-600x600.png',
    'https://bodytalk.digizone.com.kw/uploads/content/path/1600677490576.jpg',
    'https://cdn.crispedge.com/2a7e19.png',
    'https://cdn.shopify.com/s/files/1/2331/5039/products/royal_blue_grande.png?v=1507548217',
    'https://cdn.wallpapersafari.com/22/72/0TDxAP.jpg'
  ];
  mainImage = '';
  constructor() { }

  ngOnInit(): void {
    this.mainImage = this.items[0];
  }
  onMainImageChanged( item: string) {
    this.mainImage = item;
  }

}
