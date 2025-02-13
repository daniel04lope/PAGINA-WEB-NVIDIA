import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../news/Services/search-service.service';

/**
 * @component HeaderComponent
 * @description Componente encargado de mostrar el encabezado de la aplicación.
 * Incluye un campo de búsqueda que se muestra únicamente cuando la ruta actual es '/news'.
 *
 * @example
 * <app-header></app-header>
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
   * @property showSearch
   * @description Indica si se debe mostrar el campo de búsqueda en el encabezado.
   */
  showSearch: boolean = false;

  /**
   * Constructor del componente.
   *
   * @param router - Servicio de Angular para gestionar la navegación y detectar cambios en la URL.
   * @param searchService - Servicio encargado de gestionar y actualizar la consulta de búsqueda.
   */
  constructor(private router: Router, private searchService: SearchService) {
    // Se suscribe a los eventos de navegación para actualizar la visibilidad del campo de búsqueda.
    this.router.events.subscribe(() => {
      this.showSearch = this.router.url === '/news';
    });
  }

  /**
   * Método que se invoca en cada cambio del input de búsqueda.
   *
   * @param event - Evento emitido por el input, que contiene el valor de la búsqueda.
   */
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchService.updateSearchQuery(query);
  }
}
