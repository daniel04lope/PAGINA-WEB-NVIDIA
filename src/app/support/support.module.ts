import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes utilizados en el módulo
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { SupportpageComponent } from './Pages/supportpage/supportpage.component';

/**
 * @module SupportModule
 * @description
 * Módulo que contiene todos los elementos necesarios para la funcionalidad del formulario de soporte.
 * Este módulo incluye el componente `SupportFormComponent` que es responsable de mostrar el formulario
 * para que los usuarios puedan enviar solicitudes de soporte.
 *
 * @example
 * ```typescript
 * @NgModule({
 *   declarations: [SupportFormComponent],
 *   imports: [CommonModule, BrowserModule, ReactiveFormsModule]
 * })
 * export class SupportModule {}
 * ```
 */
const routes: Routes = [
  {
    path: '',
    component: SupportpageComponent, // Ruta principal que carga la página de soporte
  }
];

/**
 * @NgModule
 * Módulo dedicado a gestionar los formularios de soporte.
 * Contiene la configuración necesaria para la correcta funcionalidad del formulario de soporte.
 */
@NgModule({
  declarations: [
   
  ],
  imports: [
    /**
     * Módulos necesarios para este módulo
     */
    CommonModule, // Proporciona directivas y pipes comunes de Angular
    RouterModule.forChild(routes), // Configura el enrutamiento específico de este módulo
    ReactiveFormsModule, // Permite el uso de formularios reactivos
  ],
  exports: [RouterModule], // Exporta el RouterModule para que las rutas sean accesibles
})
export class SupportModule {}
