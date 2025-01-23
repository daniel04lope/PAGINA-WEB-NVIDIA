import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
 // Métodos para controlar el carrusel
 next() {
  const carouselElement = document.getElementById('myCarousel');
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement);
    carousel.next();
  }
}

prev() {
  const carouselElement = document.getElementById('myCarousel');
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement);
    carousel.prev();
  }
}
}
