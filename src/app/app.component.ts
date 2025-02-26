import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './main-page/Pages/home/home.component';
import { FormsModule } from '@angular/forms';

/**
 * @component AppComponent
 * @description
 * Componente principal de la aplicación. Este componente actúa como el contenedor raíz que maneja el enrutamiento y la vista general de la aplicación.
 * En este caso, utiliza el enrutamiento para cargar el componente `HomeComponent` cuando la aplicación se inicie.
 * El `AppComponent` es el punto de entrada de la aplicación y contiene la estructura básica de la misma, como la cabecera, pie de página y otros elementos comunes.
 * 
 * @example
 * ```typescript
 * @Component({
 *   selector: 'app-root',
 *   standalone: true,
 *   imports: [RouterOutlet, HomeComponent],
 *   templateUrl: './app.component.html',
 *   styleUrls: ['./app.component.css']
 * })
 * export class AppComponent {
 *   title = 'Nvidia';
 * }
 * ```
 */
@Component({
  /**
   * El selector que se usará para incluir este componente en la aplicación.
   * Se utiliza en el archivo `index.html` o en otros componentes como `<app-root></app-root>`.
   */
  selector: 'app-root',

  /**
   * Indica que este componente es **standalone**, es decir, no depende de un módulo Angular tradicional.
   * Este componente puede funcionar por sí mismo sin necesidad de ser parte de un módulo Angular.
   */
  standalone: true,

  /**
   * Las dependencias necesarias que debe importar el componente.
   * - `RouterOutlet`: Directiva para el enrutamiento de la aplicación.
   * - `HomeComponent`: Componente que se carga en la ruta predeterminada (por ejemplo, la página de inicio).
   */
  imports: [RouterOutlet, HomeComponent],

  /**
   * Archivo HTML que contiene la plantilla del componente. Es donde se define la estructura visual y el contenido del componente.
   */
  templateUrl: './app.component.html',

  /**
   * Archivo CSS que contiene los estilos asociados con este componente. Define los estilos específicos para este componente.
   */
  styleUrls: ['./app.component.css']
})

/**
 * Clase del componente principal `AppComponent`.
 * Este componente es el punto de inicio de la aplicación Angular, donde se gestionan las rutas y otros elementos comunes de la UI.
 */
export class AppComponent {
  /**
   * Título de la aplicación.
   * Esta propiedad se usa en la plantilla para mostrar el título de la aplicación.
   */
  title = 'Nvidia';
}
