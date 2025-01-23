import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
