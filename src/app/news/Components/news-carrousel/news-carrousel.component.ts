import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SearchService } from '../../Services/search-service.service';
import { AlbunComponent } from '../../../main-page/Components/albun/albun.component';

/**
 * @interface NewsItem
 * @description Representa un elemento individual de noticia.
 */
interface NewsItem {
  /** Descripción corta de la noticia. */
  description: string;
  /** Descripción completa de la noticia. */
  fullDescription: string;
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
 * @description Componente que muestra un carrusel de noticias. 
 * Permite filtrar las secciones según una consulta de búsqueda proporcionada por el SearchService.
 *
 * @example
 * <app-news-carrousel></app-news-carrousel>
 */
@Component({
  selector: 'app-news-carrousel',
  standalone: true,
  imports: [CommonModule, AlbunComponent],
  templateUrl: './news-carrousel.component.html',
  styleUrls: ['./news-carrousel.component.css']
})
export class NewsCarrouselComponent implements OnInit, OnDestroy {
  /**
   * @property {NewsSection[]} sections
   * @description Secciones de noticias predeterminadas que se muestran en el carrusel.
   */
  sections: NewsSection[] = [
    {
      title: 'ULTIMAS NOVEDADES',
      items: [
        {
          description: 'NVIDIA lanza nueva GPU RTX 5090 con rendimiento un 70% superior a la generación anterior.',
          fullDescription: 'NVIDIA acaba de presentar su nueva tarjeta gráfica RTX 5090, que promete ser un salto significativo en el rendimiento, ofreciendo un 70% más de poder de procesamiento en comparación con la generación anterior. Esto representa una mejora revolucionaria para los gamers y los profesionales del diseño gráfico.',
          imageUrl: '../../../../assets/5090rtx.jpg',
          time: '9 mins'
        },
        {
          description: 'Samsung presenta pantallas OLED transparentes para dispositivos móviles.',
          fullDescription: 'Samsung ha anunciado un avance importante en la tecnología de pantallas OLED, revelando pantallas transparentes que podrían revolucionar los dispositivos móviles en los próximos años. Estas pantallas permitirían integrar características innovadoras, como la visualización de datos a través de superficies parcialmente transparentes.',
          imageUrl: '../../../../assets/pantallasoled.jpg',
          time: '12 mins'
        },
        {
          description: 'Microsoft anuncia Windows 12 con integración nativa de IA para 2025.',
          fullDescription: 'Microsoft ha revelado su plan para Windows 12, una versión revolucionaria de su sistema operativo que integrará inteligencia artificial de forma nativa para mejorar la productividad, la seguridad y la personalización. Con el lanzamiento previsto para 2025, esta nueva versión promete ser un cambio radical en la experiencia de usuario.',
          imageUrl: '../../../../assets/windows12.jpg',
          time: '15 mins'
        },
        {
          description: 'PlayStation 6 revela tecnología de carga instantánea de juegos.',
          fullDescription: 'Sony ha presentado una de las características más esperadas para su futura consola PlayStation 6: la tecnología de carga instantánea de juegos. Esta tecnología permitirá que los jugadores se sumerjan en sus títulos favoritos sin largas esperas, mejorando la experiencia general de juego.',
          imageUrl: '../../../../assets/ps6.jpg',
          time: '20 mins'
        }
      ]
    },
    {
      title: 'AVANCES TECNOLOGICOS',
      items: [
        {
          description: 'Primer ordenador cuántico comercial supera los 1000 qubits de potencia.',
          fullDescription: 'El primer ordenador cuántico comercial ha superado los 1000 qubits, una hazaña que coloca la computación cuántica un paso más cerca de ser una herramienta viable para resolver problemas complejos que los ordenadores tradicionales no pueden abordar.',
          imageUrl: '../../../../assets/ordenadocuantico.jpg',
          time: '9 mins'
        },
        {
          description: 'Baterías de estado sólido prometen autonomías de 1500 km para coches eléctricos.',
          fullDescription: 'Las nuevas baterías de estado sólido están revolucionando el mercado de los vehículos eléctricos, ofreciendo una autonomía de hasta 1500 km con una sola carga. Este avance podría cambiar la industria automotriz y resolver uno de los mayores desafíos de los coches eléctricos actuales.',
          imageUrl: '../../../../assets/bateriascoches).jpg',
          time: '12 mins'
        },
        {
          description: 'IA logra diagnóstico médico con 99% de precisión en pruebas clínicas.',
          fullDescription: 'Una nueva inteligencia artificial ha logrado un 99% de precisión en diagnósticos médicos durante pruebas clínicas, lo que representa un avance significativo para la medicina moderna, permitiendo diagnósticos rápidos y fiables con el apoyo de la tecnología.',
          imageUrl: '../../../../assets/IA.jpg',
          time: '15 mins'
        },
        {
          description: 'Nanorobots médicos capaces de destruir células cancerígenas en pruebas in vivo.',
          fullDescription: 'Los nanorobots médicos, desarrollados para destruir células cancerígenas de manera precisa, están demostrando resultados prometedores en pruebas in vivo. Este avance podría revolucionar el tratamiento del cáncer al permitir terapias más selectivas y menos invasivas.',
          imageUrl: '../../../../assets/nanobots.jpg',
          time: '20 mins'
        }
      ]
    },
    {
      title: 'OTRAS NOTICIAS DE INTERES',
      items: [
        {
          description: 'Ciberataque global afecta a redes bancarias: recomendaciones de seguridad.',
          fullDescription: 'Un ciberataque global ha afectado a redes bancarias de todo el mundo, exponiendo vulnerabilidades importantes. Los expertos recomiendan adoptar medidas de seguridad adicionales, como la autenticación multifactorial y el monitoreo constante de las transacciones.',
          imageUrl: '../../../../assets/ciberataqure.jpg',
          time: '9 mins'
        },
        {
          description: 'Tesla presenta nuevo modelo de auto volador con autonomía de 500 km.',
          fullDescription: 'Tesla ha dado a conocer su nuevo modelo de auto volador, un vehículo eléctrico capaz de volar y que promete una autonomía de 500 km. Este modelo está destinado a cambiar la forma en que nos desplazamos, abriendo nuevas posibilidades para el transporte aéreo urbano.',
          imageUrl: '../../../../assets/cochevolador.jpg',
          time: '12 mins'
        },
        {
          description: 'Apple desarrolla tecnología de carga inalámbrica a distancia hasta 5 metros.',
          fullDescription: 'Apple ha anunciado avances en su tecnología de carga inalámbrica, permitiendo cargar dispositivos a una distancia de hasta 5 metros. Este avance podría transformar la forma en que cargamos nuestros dispositivos, eliminando la necesidad de cables.',
          imageUrl: '../../../../assets/apple.jpg',
          time: '15 mins'
        },
        {
          description: 'Starlink alcanza cobertura global de internet satelital de alta velocidad.',
          fullDescription: 'Starlink, el proyecto de internet satelital de SpaceX, ha alcanzado una cobertura global, ofreciendo conexión a internet de alta velocidad en lugares remotos del planeta. Este avance abre nuevas oportunidades para la educación y el acceso a la información en áreas desatendidas.',
          imageUrl: '../../../../assets/starlink.jpg',
          time: '20 mins'
        }
      ]
    }
  ];

  /**
   * @property {NewsSection[]} filteredSections
   * @description Secciones filtradas según la consulta de búsqueda.
   */
  filteredSections: NewsSection[] = [];

  /**
   * @property {Subscription} searchSubscription
   * @description Suscripción al observable de búsqueda para actualizar la vista cuando se emite un nuevo valor.
   */
  private searchSubscription!: Subscription;

  /**
   * @property {NewsItem | null} selectedNewsItem
   * @description Noticia seleccionada para mostrar en el modal.
   */
  selectedNewsItem: NewsItem | null = null;

  /**
   * @property {boolean} showModal
   * @description Indica si el modal de noticias está abierto o cerrado.
   */
  showModal: boolean = false;

  /**
   * @constructor
   * @param {SearchService} searchService - Servicio de búsqueda que emite los términos ingresados por el usuario.
   */
  constructor(private searchService: SearchService) {}

  /**
   * @method ngOnInit
   * @description Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   * Se suscribe al servicio de búsqueda y carga las secciones iniciales.
   */
  ngOnInit(): void {
    this.filteredSections = this.sections;
    this.searchSubscription = this.searchService.searchQuery$.subscribe((query: string) => {
      this.filterSections(query);
    });
  }

  /**
   * @method openNewsModal
   * @description Abre el modal con los detalles de la noticia seleccionada.
   * @param {NewsItem} item - Noticia seleccionada por el usuario.
   */
  openNewsModal(item: NewsItem): void {
    this.selectedNewsItem = item;
    this.showModal = true;
  }

  /**
   * @method closeNewsModal
   * @description Cierra el modal de la noticia.
   */
  closeNewsModal(): void {
    this.selectedNewsItem = null;
    this.showModal = false;
  }

  /**
   * @method ngOnDestroy
   * @description Método del ciclo de vida de Angular que se ejecuta antes de destruir el componente.
   * Se encarga de cancelar la suscripción al servicio de búsqueda para evitar fugas de memoria.
   */
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  /**
   * @method filterSections
   * @description Filtra las secciones de noticias en función del término de búsqueda ingresado.
   * @param {string} query - Término de búsqueda ingresado por el usuario.
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
}
