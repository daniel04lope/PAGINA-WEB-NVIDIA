// Importación de los módulos y componentes necesarios para la configuración de rutas en Angular
import { Routes } from '@angular/router';

// Importación de los componentes que se utilizarán en las rutas
import { AboutComponent } from './aboutus/Pages/about/about.component';
import { HomeComponent } from './main-page/Pages/home/home.component';
import { NewsCarrouselComponent } from './news/Components/news-carrousel/news-carrousel.component';
import { NewsageComponent } from './news/Pages/newsage/newsage.component';
import { SupportpageComponent } from './support/Pages/supportpage/supportpage.component';
import { DescargaprincipalComponent } from './downloads/Pages/descargaprincipal/descargaprincipal.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Mantén Home sin Lazy Loading si es la página principal

  { path: 'about', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'downloads', loadChildren: () => import('./downloads/downloads.module').then(m => m.DownloadsModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige a Home si la ruta no existe
];

