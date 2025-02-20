import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  array = [{
    "path": "assets/images/Hero-Bridge.jpg",
    "title": "Home"
  },
  {
    "path": "assets/wwpts_new_images/home-hero.jpg",
    "title": "Hero"
  },
  {
    "path": "assets/images/career.jpg",
    "title": "Bridge"
  }
  ];
}
