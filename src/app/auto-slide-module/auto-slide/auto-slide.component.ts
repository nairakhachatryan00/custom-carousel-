import {Component, OnInit, Output} from '@angular/core';
import {iterator} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-auto-slide',
  templateUrl: './auto-slide.component.html',
  styleUrls: ['./auto-slide.component.css'],
  providers: [{
    provide: 'configs',
    useValue: {
      visibleItemsCount: 4,
      autoSlide: true,
      loop: true
    },
  }],
})
export class AutoSlideComponent implements OnInit {
  items = [
    'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKteLqmvhKKrEpZzJP5QsAumby0zEwCyP4VgmnwpgtRGcxw4Qm-Xx6aOjNmsSG_JqRcVw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOFnpFy-_S_7e7O_-lPqp9tc3dBRLsXIl7n1zdLhRYi3PWQqJvrM8qZfgeRE4QVADkiE&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDUIFTg78rvozshwNNL0gLTJ7Nkoi0yGHpEYzlHRcvpkgu3kU179hgxIv5RlrGTt21-0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX79CGDZcbVGYLTIIOWU92mrGPye7tLhC9A&usqp=CAU'
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
