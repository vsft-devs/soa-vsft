import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageViewer]'
})
export class ImageViewerDirective {
  @Input('appImageViewer') imageSrc!: string;
  private overlay!: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click') onClick(): void {
    this.openImageInViewport();
  }

  ngOnInit() {
    // Apply the classes to the element when the directive is initialized
    this.renderer.addClass(this.el.nativeElement, 'cursor-pointer');
    this.renderer.addClass(this.el.nativeElement, 'transition-transform');
    this.renderer.addClass(this.el.nativeElement, 'duration-200');
    this.renderer.addClass(this.el.nativeElement, 'hover:scale-105');
  }

  private openImageInViewport(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.setStyle(this.overlay, 'position', 'fixed');
    this.renderer.setStyle(this.overlay, 'top', '0');
    this.renderer.setStyle(this.overlay, 'left', '0');
    this.renderer.setStyle(this.overlay, 'width', '100vw');
    this.renderer.setStyle(this.overlay, 'height', '100vh');
    this.renderer.setStyle(this.overlay, 'background', 'rgba(0, 0, 0, 0.8)');
    this.renderer.setStyle(this.overlay, 'display', 'flex');
    this.renderer.setStyle(this.overlay, 'align-items', 'center');
    this.renderer.setStyle(this.overlay, 'justify-content', 'center');
    this.renderer.setStyle(this.overlay, 'z-index', '1000');
    this.renderer.setStyle(this.overlay, 'cursor', 'pointer');

    const fullImage = this.renderer.createElement('img');
    this.renderer.setAttribute(fullImage, 'src', this.imageSrc || this.el.nativeElement.src);
    this.renderer.setStyle(fullImage, 'max-width', '100%');
    this.renderer.setStyle(fullImage, 'max-height', '100%');
    this.renderer.setStyle(fullImage, 'object-fit', 'contain');
    this.renderer.setStyle(fullImage, 'box-shadow', '0 4px 20px rgba(0, 0, 0, 0.5)');
    this.renderer.setStyle(fullImage, 'border-radius', '8px');
    this.renderer.appendChild(this.overlay, fullImage);
    this.renderer.appendChild(document.body, this.overlay);
    this.renderer.listen(this.overlay, 'click', () => this.closeImageInViewport());
  }

  private closeImageInViewport(): void {
    if (this.overlay) {
      this.renderer.removeChild(document.body, this.overlay);
    }
  }
}
