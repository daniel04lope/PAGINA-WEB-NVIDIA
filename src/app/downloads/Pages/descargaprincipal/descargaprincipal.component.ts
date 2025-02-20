import { Component } from '@angular/core';
import { HeaderComponent } from "../../../main-page/Components/header/header.component";
import { FooterComponent } from "../../../main-page/Components/footer/footer.component";
import { FormulariodriverComponent } from '../../Components/formulariodriver/formulariodriver.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descargaprincipal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,FormulariodriverComponent],
  templateUrl: './descargaprincipal.component.html',
  styleUrl: './descargaprincipal.component.css'
})
export class DescargaprincipalComponent {

}
