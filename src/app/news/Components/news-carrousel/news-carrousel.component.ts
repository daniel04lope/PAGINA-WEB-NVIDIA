import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para utilizar directivas comunes de Angular
import { Subscription } from 'rxjs';
import { SearchService } from '../../Services/search-service.service';
import { AlbunComponent } from '../../../main-page/Components/albun/albun.component';

/**
 * @interface NewsItem
 * @description Representa un elemento individual de noticia.
 */
interface NewsItem {
  /** Descripción de la noticia. */
  description: string;
  /** URL de la imagen asociada a la noticia. */
  imageUrl: string;
  /** Tiempo transcurrido desde la publicación de la noticia. */
  time: string;
}

/**
 * @interface NewsSection
 * @description Representa una sección de noticias que contiene un título y una lista de elementos.
 */
interface NewsSection {
  /** Título de la sección de noticias. */
  title: string;
  /** Lista de elementos (noticias) pertenecientes a la sección. */
  items: NewsItem[];
}

/**
 * @component NewsCarrouselComponent
 * @description Componente que muestra un carrusel de noticias. Permite filtrar las secciones según una consulta de búsqueda proporcionada por el SearchService.
 *
 * @example
 * <app-news-carrousel></app-news-carrousel>
 */
@Component({
  selector: 'app-news-carrousel',
  standalone: true,
  // Se importan módulos y componentes necesarios para el funcionamiento del componente.
  imports: [CommonModule, AlbunComponent],
  templateUrl: './news-carrousel.component.html',
  styleUrls: ['./news-carrousel.component.css']
})
export class NewsCarrouselComponent implements OnInit, OnDestroy {
  /**
   * Secciones de noticias predeterminadas que se muestran en el carrusel.
   */
  sections: NewsSection[] = [
    {
      title: 'ULTIMAS NOVEDADES',
      items: [
        {
          description: 'NVIDIA lanza nueva GPU RTX 5090 con rendimiento un 70% superior a la generación anterior.',
          imageUrl: '../../../../assets/OIP (6) 1.svg',
          time: '9 mins'
        },
        {
          description: 'Samsung presenta pantallas OLED transparentes para dispositivos móviles.',
          imageUrl: '../../../../assets/OIP (7) 1.svg',
          time: '12 mins'
        },
        {
          description: 'Microsoft anuncia Windows 12 con integración nativa de IA para 2025.',
          imageUrl: '../../../../assets/1418906 1.svg',
          time: '15 mins'
        },
        {
          description: 'PlayStation 6 revela tecnología de carga instantánea de juegos.',
          imageUrl: '../../../../assets/OIP (8) 1.svg',
          time: '20 mins'
        }
      ]
    },
    {
      title: 'AVANCES TECNOLOGICOS',
      items: [
        {
          description: 'Primer ordenador cuántico comercial supera los 1000 qubits de potencia.',
          imageUrl: '../../../../assets/OIP (9) 1.svg',
          time: '9 mins'
        },
        {
          description: 'Baterías de estado sólido prometen autonomías de 1500 km para coches eléctricos.',
          imageUrl: '../../../../assets/R (2) 1.svg',
          time: '12 mins'
        },
        {
          description: 'IA logra diagnóstico médico con 99% de precisión en pruebas clínicas.',
          imageUrl: '../../../../assets/OIP (10) 1.svg',
          time: '15 mins'
        },
        {
          description: 'Nanorobots médicos capaces de destruir células cancerígenas en pruebas in vivo.',
          imageUrl: '../../../../assets/OIP (11) 1.svg',
          time: '20 mins'
        }
      ]
    },
    {
      title: 'OTRAS NOTICIAS DE INTERES',
      items: [
        {
          description: 'Ciberataque global afecta a redes bancarias: recomendaciones de seguridad.',
          imageUrl: '../../../../assets/R (3) 1.svg',
          time: '9 mins'
        },
        {
          description: 'Tesla presenta nuevo modelo de auto volador con autonomía de 500 km.',
          imageUrl: '../../../../assets/R (4) 1.svg',
          time: '12 mins'
        },
        {
          description: 'Apple desarrolla tecnología de carga inalámbrica a distancia hasta 5 metros.',
          imageUrl: '../../../../assets/OIP (12) 1.svg',
          time: '15 mins'
        },
        {
          description: 'Starlink alcanza cobertura global de internet satelital de alta velocidad.',
          imageUrl: '../../../../assets/OIP (13) 1.svg',
          time: '20 mins'
        }
      ]
    }
  ];

  /**
   * Secciones filtradas según la consulta de búsqueda.
   */
  filteredSections: NewsSection[] = [];

  /**
   * Suscripción al observable de búsqueda para actualizar la vista cuando se emite un nuevo valor.
   */
  private searchSubscription!: Subscription;

  /**
   * Constructor del componente.
   *
   * @param searchService - Servicio para gestionar la consulta de búsqueda.
   */
  constructor(private searchService: SearchService) {}

  /**
   * Método de ciclo de vida que se ejecuta al inicializar el componente.
   *
   * - Inicializa las secciones filtradas.
   * - Se suscribe al observable del servicio de búsqueda para filtrar las secciones en tiempo real.
   */
  ngOnInit(): void {
    this.filteredSections = this.sections;
    this.searchSubscription = this.searchService.searchQuery$.subscribe((query: string) => {
      this.filterSections(query);
    });
  }

  /**
   * Filtra las secciones de noticias en función de la consulta de búsqueda.
   *
   * @param query - Texto de búsqueda para filtrar las descripciones de los elementos de noticias.
   */
  filterSections(query: string): void {
    if (!query) {
      this.filteredSections = this.sections;
      return;
    }
    const lowerQuery = query.toLowerCase();
    this.filteredSections = this.sections
      .map(section => ({
        title: section.title,
        items: section.items.filter(item =>
          item.description.toLowerCase().includes(lowerQuery)
        )
      }))
      .filter(section => section.items.length > 0);
  }

  /**
   * Método de ciclo de vida que se ejecuta al destruir el componente.
   *
   * - Se encarga de cancelar la suscripción al observable de búsqueda para evitar fugas de memoria.
   */
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
