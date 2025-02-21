import { Component } from '@angular/core';
import { HeaderComponent } from "../../../main-page/Components/header/header.component";
import { FooterComponent } from "../../../main-page/Components/footer/footer.component";
import { FormulariodriverComponent } from '../../Components/formulariodriver/formulariodriver.component';

/**
 * @component DescargaprincipalComponent
 * @description Componente principal de la página de descarga de drivers.
 * Este componente actúa como un contenedor que organiza la estructura de la página,
 * incluyendo el encabezado, el formulario de descarga y el pie de página.
 * 
 * @example
 * ```html
 * <app-descargaprincipal></app-descargaprincipal>
 * ```
 */
@Component({
  selector: 'app-descargaprincipal', // Selector del componente para su uso en plantillas
  standalone: true, // Declarado como un componente independiente en Angular
  imports: [
    HeaderComponent, // Componente de encabezado que incluye navegación y branding
    FooterComponent, // Componente de pie de página con información adicional y enlaces
    FormulariodriverComponent, // Componente con el formulario para descargar drivers
  ],
  templateUrl: './descargaprincipal.component.html', // Plantilla HTML del componente
  styleUrls: ['./descargaprincipal.component.css'] // Estilos CSS aplicados al componente
})
export class DescargaprincipalComponent {
  /**
   * @description Este componente no contiene lógica adicional en este momento.
   * Su propósito principal es organizar la estructura de la página de descarga.
   */
}
