import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

import { FormulariodriverComponent } from './Components/formulariodriver/formulariodriver.component';
import { HeaderComponent } from '../main-page/Components/header/header.component';
import { FooterComponent } from '../main-page/Components/footer/footer.component';
import { DescargaprincipalComponent } from './Pages/descargaprincipal/descargaprincipal.component';

/**
 * @module DownloadsModule
 * @description Módulo encargado de gestionar la descarga de drivers.
 * Contiene componentes relacionados con la interfaz de usuario para la descarga.
 */
@NgModule({
  declarations: [
    // No se declaran componentes aquí ya que están en "standalone: true"
  ],
  imports: [
    CommonModule, // Proporciona directivas y funcionalidades comunes de Angular
    FormsModule, // Permite el uso de formularios en los componentes
    FormulariodriverComponent, // Componente de formulario de descarga
    DescargaprincipalComponent, // Página principal de descargas
  ],
  exports: [
    DescargaprincipalComponent, // Exporta la página principal para su uso en otros módulos
  ],
})
export class DownloadsModule {}
