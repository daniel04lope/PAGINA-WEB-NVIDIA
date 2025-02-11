import { Component } from '@angular/core';
// Importación del componente de equipo, donde se puede mostrar información sobre los miembros del equipo
import { TeamComponent } from '../../Components/team/team.component';
// Importación del componente de encabezado (header) de la página, para la barra de navegación o información del sitio
import { HeaderComponent } from '../../../main-page/Components/header/header.component';
// Importación del componente de pie de página (footer), que generalmente contiene enlaces de contacto, derechos de autor, etc.
import { FooterComponent } from '../../../main-page/Components/footer/footer.component';
// Importación del componente de características (features), para mostrar las características principales de un producto o servicio
import { FeauturesComponent } from '../../Components/feautures/feautures.component';

@Component({
  // Selector para el componente, usado como etiqueta HTML personalizada en otras partes de la aplicación
  selector: 'app-about',
  // Configuración para importar los componentes necesarios que se usan dentro de este componente
  standalone: true,
  imports: [TeamComponent, HeaderComponent, FooterComponent, FeauturesComponent],
  // Enlace a la plantilla HTML que define la estructura visual de este componente
  templateUrl: './about.component.html',
  // Enlace al archivo CSS que contiene los estilos específicos para este componente
  styleUrl: './about.component.css'
})
// Declaración del componente de "Acerca de", que probablemente contiene información sobre la empresa, misión, visión o valores.
export class AboutComponent {
  // Este componente sirve como la página "Acerca de", donde se detalla información sobre el sitio o la empresa.
}
