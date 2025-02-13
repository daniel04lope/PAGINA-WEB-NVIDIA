import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * @service SearchService
 * @description Servicio encargado de gestionar la consulta de búsqueda en la aplicación.
 * Proporciona un observable que emite la query de búsqueda actual y un método para actualizar dicha query.
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  /**
   * @private
   * @property searchQuerySubject
   * @description BehaviorSubject que almacena el estado actual de la consulta de búsqueda.
   * Se inicia con una cadena vacía.
   */
  private searchQuerySubject = new BehaviorSubject<string>('');

  /**
   * @property searchQuery$
   * @description Observable que expone la consulta de búsqueda para que otros componentes
   * puedan suscribirse y reaccionar a sus cambios.
   */
  searchQuery$ = this.searchQuerySubject.asObservable();

  /**
   * Actualiza la consulta de búsqueda.
   *
   * @param query - Nueva cadena de búsqueda que se desea establecer.
   */
  updateSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }
}
