import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div id="popka-gallery" class="gallery">
      <a href="https://i.pinimg.com/1200x/8e/25/e0/8e25e01a0569f89b15d92606dfebecd0.jpg"
         data-pswp-width="1200"
         data-pswp-height="1200"
         target="_blank">
        <img src="https://i.pinimg.com/1200x/8e/25/e0/8e25e01a0569f89b15d92606dfebecd0.jpg" alt="zabrikosina2" class="profile-image">
      </a>
    </div>
  `,
  styles: [`
    .gallery { display:inline-block }
    .gallery img.profile-image { width:440px; height:440px; object-fit:cover; border-radius:0px; cursor:pointer }
  `]
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  lightbox: PhotoSwipeLightbox | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    // Only initialize PhotoSwipe in the browser (avoid SSR errors)
    if (!isPlatformBrowser(this.platformId)) return;

    this.lightbox = new PhotoSwipeLightbox({
      gallery: '#popka-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    this.lightbox.init();
  }

  ngOnDestroy() {
    // Only destroy if running in browser and lightbox exists
    if (!isPlatformBrowser(this.platformId)) return;
    this.lightbox?.destroy();
  }
}
