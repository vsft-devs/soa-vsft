import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-icon',
  templateUrl: './toggle-icon.component.html',
  styleUrl: './toggle-icon.component.scss'
})
export class ToggleIconComponent {
    @Input() props: any;
    @Input() key: any;
    @Output() close:  EventEmitter<any> = new EventEmitter();;
    toggleType: string = 'down-circle';

    objKeys = Object.keys;
    toggleIcon() {
      this.toggleType = this.toggleType == 'down-circle' ? 'up-circle' : 'down-circle';
      //this.close.emit();
    }


}
