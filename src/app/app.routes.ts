import { Routes } from '@angular/router';

import { AboutComponent } from './aboutus/Pages/about/about.component';
import { HomeComponent } from './main-page/Pages/home/home.component';
import { NewsCarrouselComponent } from './news/Components/news-carrousel/news-carrousel.component';
import { NewsageComponent } from './news/Pages/newsage/newsage.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige a la página de inicio para rutas no encontradas


];
