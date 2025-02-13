import { Component } from '@angular/core';
import { SupportFormComponent } from '../../Components/support-form/support-form.component';
import { HeaderComponent } from '../../../main-page/Components/header/header.component';
import { FooterComponent } from '../../../main-page/Components/footer/footer.component';

@Component({
  selector: 'app-supportpage',
  standalone: true,
  imports: [SupportFormComponent, HeaderComponent,FooterComponent],
  templateUrl: './supportpage.component.html',
  styleUrl: './supportpage.component.css'
})
export class SupportpageComponent {

}
