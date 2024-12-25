import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-carousel-img-desc',
  templateUrl: './carousel-img-desc.component.html',
  styleUrl: './carousel-img-desc.component.scss'
})
export class CarouselImgDescComponent {

  @Input() slides: any;
  @Input() currentIndex: any;
  @Input() key:any;
  persona: any;

  constructor(private dataservice: DataService) {
    this.persona = this.dataservice.getPersonaData();
  }

  getServiceRouteLink() {
    try {
      if(this.currentIndex != 0) {
        return this.persona['header'].props.menu['Services'].submenu[this.slides[this.currentIndex].title].path;
      }
      return "";
    } catch (error) {
      return "";
    }


  }

}
