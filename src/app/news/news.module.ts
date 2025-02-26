import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsageComponent } from './Pages/newsage/newsage.component';

/**
 * @module NewsModule
 * @description
 * Este módulo se encarga de gestionar la sección de "Noticias" o "News" de la aplicación. 
 * Contiene las rutas necesarias para mostrar la página de noticias, en este caso el componente `NewsageComponent`.
 * El módulo está configurado para cargarse de manera perezosa (Lazy Loading), lo que significa que solo se carga cuando
 * el usuario navega hacia la ruta correspondiente.
 */
const routes: Routes = [
  /**
   * Ruta principal del módulo
   * @path ''
   * @component NewsageComponent
   * Esta es la ruta predeterminada para este módulo. Cuando se accede a la ruta vacía ('') de este módulo,
   * se cargará el componente `NewsageComponent`.
   */
  { path: '', component: NewsageComponent } // Importante: debe ser vacío ('') para Lazy Loading
];

/**
 * Módulo de la sección de noticias (News).
 * Este módulo es responsable de gestionar la vista de las noticias en la aplicación.
 * Se carga de forma perezosa (Lazy Loading) cuando se accede a la ruta correspondiente.
 */
@NgModule({
  /**
   * Declaraciones de componentes. Este módulo no declara componentes directamente, ya que el componente principal
   * se gestiona a través de las rutas y no se define aquí explícitamente.
   */
  declarations: [],

  imports: [
    /**
     * `RouterModule.forChild(routes)` configura el sistema de enrutamiento para este módulo.
     * Permite que la ruta asociada con `NewsageComponent` sea cargada solo cuando el usuario acceda a la ruta correspondiente.
     */
    RouterModule.forChild(routes),

    /**
     * `CommonModule` proporciona directivas comunes de Angular como `ngIf` y `ngFor`, utilizadas en este módulo.
     */
    CommonModule
  ],

  exports: [
    /**
     * Exporta `RouterModule`, lo que permite que las rutas definidas en este módulo sean accesibles en otros módulos
     * si es necesario.
     */
    RouterModule
  ]
})
export class NewsModule { 
  /**
   * @constructor
   * El constructor está vacío, ya que no se han definido dependencias que deban ser inyectadas en este módulo.
   */
  constructor() { }
}
