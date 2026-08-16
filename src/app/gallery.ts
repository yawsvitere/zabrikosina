import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import type { SlideData } from 'photoswipe';
import 'photoswipe/style.css';

@Directive({
  selector: '.gallery',
  standalone: true,
})
export class GalleryComponent implements OnDestroy {
  private lightbox?: PhotoSwipeLightbox;
  private lightboxInitialized = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    const image = (event.target as Element | null)?.closest('img');
    if (!image || !this.elementRef.nativeElement.contains(image)) return;

    const index = this.images.indexOf(image as HTMLImageElement);
    if (index < 0) return;

    event.preventDefault();
    this.getLightbox().loadAndOpen(index, this.getItems(), {
      x: event.clientX,
      y: event.clientY,
    });
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.lightbox?.destroy();
  }

  private get images() {
    return Array.from(this.elementRef.nativeElement.querySelectorAll('img'));
  }

  private getLightbox() {
    this.lightbox ??= new PhotoSwipeLightbox({
      pswpModule: () => import('photoswipe'),
    });

    if (!this.lightboxInitialized) {
      this.lightbox.init();
      this.lightboxInitialized = true;
    }

    return this.lightbox;
  }

  private getItems(): SlideData[] {
    return this.images.map((image) => {
      const src = image.currentSrc || image.src;

      return {
        src,
        msrc: src,
        alt: image.alt,
        width: image.naturalWidth || image.clientWidth || 1200,
        height: image.naturalHeight || image.clientHeight || 1200,
        element: image,
      };
    });
  }
}
