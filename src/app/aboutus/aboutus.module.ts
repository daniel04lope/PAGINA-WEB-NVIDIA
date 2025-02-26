import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';

/**
 * @module AboutusModule
 * @description
 * Este módulo es responsable de gestionar las funcionalidades relacionadas con la página "About Us" (Acerca de Nosotros).
 * Contiene rutas y componentes necesarios para mostrar la información sobre la empresa o el producto.
 */
const routes: Routes = [
  /**
   * Ruta principal del módulo
   * @path ''
   * @component AboutComponent
   * Esta es la ruta predeterminada del módulo. Muestra el componente `AboutComponent` al acceder a la ruta vacía.
   */
  { path: '', component: AboutComponent } // Importante: debe ser vacío ('') para Lazy Loading
];

/**
 * Módulo de la sección "Acerca de Nosotros".
 * Este módulo se carga de manera perezosa (Lazy Loading) cuando se accede a la ruta correspondiente.
 */
@NgModule({
  /**
   * Declaraciones para el módulo, en este caso no se agregan componentes porque solo se usa en routing.
   */
  declarations: [],

  imports: [
    /**
     * Importa el módulo `CommonModule`, que proporciona directivas comunes de Angular como `ngIf` y `ngFor`.
     */
    CommonModule,

    /**
     * Configura el sistema de enrutamiento con las rutas definidas para este módulo.
     */
    RouterModule.forChild(routes),
  ],

  exports: [
    /**
     * Exporta el `RouterModule` para hacer las rutas disponibles fuera de este módulo.
     */
    RouterModule
  ]
})
export class AboutusModule { 
  /**
   * @constructor
   * El constructor está vacío porque no hay dependencias inyectadas directamente en este módulo.
   */
  constructor() { }
}
