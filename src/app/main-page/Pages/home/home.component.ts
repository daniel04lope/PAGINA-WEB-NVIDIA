// Importación de los módulos y componentes necesarios para esta página
import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';  // Componente para el encabezado de la página
import { CarouselComponent } from '../../Components/carousel/carousel.component';  // Componente para mostrar un carrusel de imágenes o contenido
import { FooterComponent } from '../../Components/footer/footer.component';  // Componente para el pie de página
import { AlbunComponent } from '../../Components/albun/albun.component';  // Componente para mostrar un álbum de imágenes o medios

// Definición del componente principal de la página de inicio
@Component({
  selector: 'app-home',  // Etiqueta personalizada para usar este componente en otras plantillas
  standalone: true,  // Este componente es independiente, no depende de otros módulos
  imports: [HeaderComponent, CarouselComponent, FooterComponent, AlbunComponent],  // Importación de otros componentes que se utilizarán en esta página
  templateUrl: './home.component.html',  // Ruta al archivo de plantilla HTML para este componente
  styleUrl: './home.component.css'  // Ruta al archivo de estilos CSS para este componente
})
export class HomeComponent {
  // Este es el componente de la página de inicio, que incluye un encabezado, carrusel, albúm y pie de página
}
