// Importación de los módulos y componentes necesarios para la configuración de rutas en Angular
import { Routes } from '@angular/router';

// Importación de los componentes que se utilizarán en las rutas
import { AboutComponent } from './aboutus/Pages/about/about.component';
import { HomeComponent } from './main-page/Pages/home/home.component';
import { NewsCarrouselComponent } from './news/Components/news-carrousel/news-carrousel.component';
import { NewsageComponent } from './news/Pages/newsage/newsage.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
  
  // Ruta por defecto, redirige a la página de inicio cuando la URL está vacía
  { path: '', component: HomeComponent },

  // Ruta para la página de inicio
  { path: 'home', component: HomeComponent },

  // Ruta para la página "Acerca de"
  { path: 'about', component: AboutComponent },

  // Ruta para la página de noticias
  { path: 'news', component: NewsageComponent },

  // Ruta comodín: redirige a la página de inicio en caso de que la URL no coincida con ninguna ruta definida
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige a la página de inicio para rutas no encontradas

];
