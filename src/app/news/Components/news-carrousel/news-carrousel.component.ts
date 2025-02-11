// Importación de los módulos necesarios de Angular
import { Component, ElementRef, ViewChild } from '@angular/core';
// Importación del componente AlbunComponent que se usará dentro del carrusel
import { AlbunComponent } from "../../../main-page/Components/albun/albun.component";

// Decorador @Component que define las propiedades del componente Angular
@Component({
  // selector: Define el nombre del selector HTML que se utilizará para agregar el componente en la plantilla
  selector: 'app-news-carrousel',
  
  // standalone: Establece que el componente es autónomo, lo que significa que no requiere un módulo Angular para funcionar
  standalone: true,

  // imports: Define los componentes o módulos que serán importados y usados dentro de este componente
  imports: [AlbunComponent, AlbunComponent],

  // templateUrl: Ruta del archivo HTML asociado con el componente
  templateUrl: './news-carrousel.component.html',

  // styleUrls: Ruta del archivo CSS que define los estilos para este componente
  styleUrls: ['./news-carrousel.component.css']
})
// Clase que representa el componente NewsCarrousel
export class NewsCarrouselComponent {
  // Esta clase podría contener propiedades y métodos relacionados con el comportamiento del carrusel
}
