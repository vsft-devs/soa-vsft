import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  persona: any;
  leadershipData: any;
  constructor(private dataservice: DataService) {
    this.persona = dataservice.getPersonaData();
    this.persona['layout'].forEach((layout:any) => {
      layout.routes.forEach((route: any) => {
        if(route.layout && route.layout.sections.length) {
          route.layout.sections.forEach((section: any) => {
            if(section.type == 'leadership') {
              this.leadershipData = section;
            }
          })
        }

      })
    });
  }
}
