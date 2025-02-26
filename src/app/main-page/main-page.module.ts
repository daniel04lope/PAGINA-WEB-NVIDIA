import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

/**
 * @module MainPageModule
 * @description
 * Este módulo gestiona la página principal de la aplicación. Contiene las rutas necesarias para mostrar 
 * la pantalla principal, como el componente `HomeComponent`, que es la página principal de la aplicación.
 * El módulo está configurado para cargarse de manera perezosa (Lazy Loading).
 */
const routes: Routes = [
  /**
   * Ruta principal del módulo
   * @path ''
   * @component HomeComponent
   * Esta es la ruta predeterminada del módulo. Al acceder a la ruta vacía ('') se cargará el componente `HomeComponent`.
   */
  { path: '', component: HomeComponent } // Importante: debe ser vacío ('') para Lazy Loading
];

/**
 * Módulo de la página principal (Main Page).
 * Este módulo se utiliza para configurar la página inicial de la aplicación, cargando el componente `HomeComponent`.
 */
@NgModule({
  /**
   * Declaraciones del módulo. En este caso, no se declaran componentes porque la carga es perezosa y solo se gestionan las rutas.
   */
  declarations: [],

  imports: [
    /**
     * `CommonModule` proporciona directivas comunes de Angular como `ngIf` y `ngFor`, utilizadas en el módulo.
     */
    CommonModule,

    /**
     * `RouterModule.forChild(routes)` configura el sistema de enrutamiento para este módulo. 
     * Permite la carga de las rutas específicas del módulo, en este caso la ruta de la página principal.
     */
    RouterModule.forChild(routes),
  ],

  exports: [
    /**
     * Exporta `RouterModule` para hacer las rutas disponibles fuera de este módulo.
     * Esto permite que las rutas definidas en este módulo sean accesibles en otras partes de la aplicación.
     */
    RouterModule
  ]
})
export class MainPageModule { 
  /**
   * @constructor
   * El constructor está vacío, ya que no hay dependencias inyectadas directamente en este módulo.
   */
  constructor() { }
}
