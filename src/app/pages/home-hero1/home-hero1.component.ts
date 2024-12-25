import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-home-hero1',
  templateUrl: './home-hero1.component.html',
  styleUrl: './home-hero1.component.scss'
})
export class HomeHero1Component {

  constructor(public windowUtil: WindowService) {


  }

}
