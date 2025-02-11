// Importación del componente principal de Angular
import { Component } from '@angular/core';

// Importación del componente del carrusel de noticias
import { NewsCarrouselComponent } from '../../Components/news-carrousel/news-carrousel.component';

// Importación del componente del pie de página (Footer)
import { FooterComponent } from '../../../main-page/Components/footer/footer.component';

// Importación del componente del encabezado (Header)
import { HeaderComponent } from '../../../main-page/Components/header/header.component';

// Decorador @Component que define el componente de la página de noticias (Newsage)
@Component({
  // Selector que se usará en el HTML para referenciar este componente
  selector: 'app-newsage',
  
  // Indicando que este componente es autónomo, lo que significa que no necesita un módulo externo
  standalone: true,
  
  // Importación de los componentes que serán utilizados dentro de este componente
  imports: [NewsCarrouselComponent, FooterComponent, HeaderComponent],
  
  // Ruta del archivo HTML que define la plantilla del componente
  templateUrl: './newsage.component.html',
  
  // Ruta del archivo CSS que define el estilo del componente
  styleUrl: './newsage.component.css'
})

// Clase del componente 'NewsageComponent', donde se define la lógica y los elementos
export class NewsageComponent {
  // Este componente no contiene lógica adicional en este momento.
}
