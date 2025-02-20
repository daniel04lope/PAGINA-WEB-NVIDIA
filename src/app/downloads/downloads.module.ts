import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

import { FormulariodriverComponent } from './Components/formulariodriver/formulariodriver.component';

import { HeaderComponent } from '../main-page/Components/header/header.component';
import { FooterComponent } from '../main-page/Components/footer/footer.component';
import { DescargaprincipalComponent } from './Pages/descargaprincipal/descargaprincipal.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    FormsModule, // Agrégalo aquí
    FormulariodriverComponent,
    DescargaprincipalComponent,
  ],
  exports: [DescargaprincipalComponent],
})
export class DownloadsModule {}
