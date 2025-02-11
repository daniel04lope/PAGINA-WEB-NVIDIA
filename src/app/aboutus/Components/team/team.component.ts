import { Component } from '@angular/core';

@Component({
  // El selector 'app-team' define el nombre del componente
  selector: 'app-team',
  
  // El componente es independiente, no tiene dependencias externas.
  standalone: true,

  // En esta sección se pueden incluir otros módulos si fueran necesarios, pero aquí está vacío
  imports: [],

  // Ruta al archivo HTML que contiene la estructura visual de este componente
  templateUrl: './team.component.html',

  // Ruta al archivo CSS que contiene los estilos específicos para este componente
  styleUrl: './team.component.css'
})

// Definición de la clase TeamComponent que implementa el comportamiento del componente
export class TeamComponent {

  // Aquí van los métodos y propiedades específicas del componente.
  // Actualmente no tiene lógica implementada, pero es donde agregarías funcionalidad más tarde.

}
