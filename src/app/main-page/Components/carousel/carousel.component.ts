import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

/**
 * @file CarouselComponent
 * @description Componente que controla un carrusel de imágenes utilizando Bootstrap.
 */

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  
  /**
   * @method next
   * @description Avanza a la siguiente diapositiva del carrusel.
   */
  next() {
    const carouselElement = document.getElementById('myCarousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement);
      carousel.next();
    }
  }

  /**
   * @method prev
   * @description Retrocede a la diapositiva anterior del carrusel.
   */
  prev() {
    const carouselElement = document.getElementById('myCarousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement);
      carousel.prev();
    }
  }
}
