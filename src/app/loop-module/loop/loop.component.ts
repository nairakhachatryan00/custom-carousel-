import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css'],
  providers: [{
    provide: 'configs',
    useValue: {
      visibleItemsCount: 4,
      autoSlide: false,
      loop: true
    },
  }],
})
export class LoopComponent implements OnInit {

  items = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqlmKSMFSix9VIwc7EYzsw-BoxRJ-StmEDBTyGRtnZOKVSv6ByCEHYtaQiDaBfNBtZVs&usqp=CAU',
    'https://i.redd.it/31ms4unp80741.jpg',
    'https://www.queensland.com/au/en/places-to-see/experiences/nature-and-wildlife/6-animals-with-attitude/_jcr_content/root/responsivegrid/image6d3cc1b6-d36a-4d23-9051-8b2b275f6550.coreimg.jpeg/1591836220063/2020-tsv-magneticisland-koala-medroaming.jpeg?fit=wrap&fmt=webp&qlt=40&wid=1200',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLalL8uhMRLwNiaLkgpD-TG89-t4hhaCMTLAujv7nTyAGhWIx1jrcCU1pFVxgyCmaDtI&usqp=CAU',
    'https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-51124_WP.jpg'
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
