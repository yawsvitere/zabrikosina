import { Component } from '@angular/core';
import { GalleryComponent } from './gallery'; 

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [GalleryComponent], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
