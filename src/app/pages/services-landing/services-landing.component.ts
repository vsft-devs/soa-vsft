import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-landing',
  templateUrl: './services-landing.component.html',
  styleUrl: './services-landing.component.scss'
})
export class ServicesLandingComponent {

  @Input() landimgImg: any;
}
