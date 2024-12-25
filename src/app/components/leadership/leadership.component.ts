import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {
  @Input() content: any;
  @Input() source?: any;
  persona: any;

  constructor(private dataservice: DataService) {
    this.persona = this.dataservice.getPersonaData();
  }

}
