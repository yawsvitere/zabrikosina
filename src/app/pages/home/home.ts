import { Component } from '@angular/core';
import { GalleryDirective } from '../../shared/directives/gallery.directive';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [GalleryDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
