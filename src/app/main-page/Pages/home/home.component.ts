import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { AlbunComponent } from '../../Components/albun/albun.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent,FooterComponent,AlbunComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
