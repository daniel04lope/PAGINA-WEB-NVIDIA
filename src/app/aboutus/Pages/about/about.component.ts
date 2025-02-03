import { Component } from '@angular/core';
import { TeamComponent } from '../../Components/team/team.component';
import { HeaderComponent } from '../../../main-page/Components/header/header.component';
import { FooterComponent } from '../../../main-page/Components/footer/footer.component';
import { FeauturesComponent } from '../../Components/feautures/feautures.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TeamComponent, HeaderComponent, FooterComponent, FeauturesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
