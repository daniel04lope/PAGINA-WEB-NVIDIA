import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlbunComponent } from "../../../main-page/Components/albun/albun.component";

@Component({
  selector: 'app-news-carrousel',
  standalone: true,
  imports: [AlbunComponent,AlbunComponent],
  templateUrl: './news-carrousel.component.html',
  styleUrl: './news-carrousel.component.css'
})
export class NewsCarrouselComponent {
 
}
