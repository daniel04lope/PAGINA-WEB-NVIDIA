import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @file HeaderComponent
 * @description Componente que representa la cabecera de la aplicación, incluyendo navegación y búsqueda condicional.
 */

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  
  /**
   * Controla la visibilidad de la barra de búsqueda.
   * Se activa solo cuando la ruta actual es "/news".
   * @type {boolean}
   */
  showSearch: boolean = false;

  /**
   * @constructor
   * @param {Router} router - Servicio de Angular para manejar la navegación entre rutas.
   */
  constructor(private router: Router) {
    /**
     * Suscripción a los eventos de navegación para mostrar u ocultar la barra de búsqueda.
     */
    this.router.events.subscribe(() => {
      this.showSearch = this.router.url === '/news';
    });
  }
}
