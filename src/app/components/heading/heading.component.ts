import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input() title?: any;
  @Input() textColor:string = "black";
  @Input() heading?: string | undefined;
}
