import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  @Input() content: any
  @Input() heading?: string | undefined;
  ngOnInit(): void {
  }
  @ContentChildren('hero-content') bcontent!: ElementRef;

  get hasContent(): boolean {
    return !!this.bcontent;
  }

}
