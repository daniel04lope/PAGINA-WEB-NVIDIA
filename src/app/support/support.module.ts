import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Componente raíz de la aplicación
import { AppComponent } from '../app.component';

// Componente del formulario de soporte
import { SupportFormComponent } from './Components/support-form/support-form.component';

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
@NgModule({
  declarations: [
    // Aquí se declaran los componentes que forman parte de este módulo
    // Por ahora no se declara ningún componente directamente en el módulo
    // ya que está importando el componente SupportFormComponent
  ],
  imports: [
    // Módulos necesarios para este módulo
    // `SupportFormComponent` - Importado para que el formulario de soporte funcione correctamente
    SupportFormComponent,
    CommonModule, // Módulo común de Angular con directivas y pipes básicos
    BrowserModule, // Módulo necesario para aplicaciones que se ejecutan en el navegador
    ReactiveFormsModule // Módulo para formularios reactivos, necesario para crear formularios dinámicos
  ],
})
export class SupportModule {
  /**
   * @description
   * Módulo dedicado a gestionar los formularios de soporte.
   * Contiene la configuración necesaria para la correcta funcionalidad del formulario de soporte.
   */
}
