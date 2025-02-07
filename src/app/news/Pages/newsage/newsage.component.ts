import { Component } from '@angular/core';
import { NewsCarrouselComponent } from '../../Components/news-carrousel/news-carrousel.component';
import { FooterComponent } from '../../../main-page/Components/footer/footer.component';
import { HeaderComponent } from '../../../main-page/Components/header/header.component';

@Component({
  selector: 'app-newsage',
  standalone: true,
  imports: [NewsCarrouselComponent,FooterComponent,HeaderComponent],
  templateUrl: './newsage.component.html',
  styleUrl: './newsage.component.css'
})
export class NewsageComponent {

}
