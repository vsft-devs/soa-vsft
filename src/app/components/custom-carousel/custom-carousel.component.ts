import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.scss',
})
export class CustomCarouselComponent implements OnInit, OnDestroy {
  slides: any;

  @Input() content: any;

  currentIndex: number = 0;
  timeoutId?: number;
  childKey = 0;
  showChild = true;
  childTimeout?: number;
  @ViewChild('carousel') carousel: ElementRef;

  ngAfterViewInit(): void {
    this.carousel.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.goToPrevious();
        break;
      case 'ArrowRight':
        this.goToNext();
        break;
      case 'Home':
        this.goToSlide(0);
        break;
      case 'End':
        this.goToSlide(this.slides.length - 1);
        break;
    }
  }

  ngOnInit(): void {
    this.slides = this.content.props.slides;
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    if (this.childTimeout) {
      window.clearTimeout(this.childTimeout);
    }
    this.childKey++;
    this.showChild = false;
    this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
    this.childTimeout = window.setTimeout(() => (this.showChild = true),1);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 1;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 1 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }

    getCurrentSlideUrl() {
    return this.slides[this.currentIndex].path;
  }
}
