import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @component SupportFormComponent
 * @description Componente para mostrar un formulario de soporte al usuario.
 * Permite que los usuarios ingresen su nombre, correo electrónico, asunto y una descripción del problema para solicitar soporte.
 *
 * @example
 * <app-support-form></app-support-form>
 */
@Component({
  selector: 'app-support-form',
  standalone: true, // Este componente es independiente y no requiere un módulo Angular tradicional.
  imports: [CommonModule, ReactiveFormsModule], // Importa CommonModule y ReactiveFormsModule para trabajar con formularios reactivos.
  templateUrl: './support-form.component.html', // Archivo de plantilla asociado.
  styleUrls: ['./support-form.component.css'] // Archivo de estilos asociado.
})
export class SupportFormComponent implements OnInit {
  
  /**
   * @property {FormGroup} supportForm
   * @description Formulario reactivo que contiene los campos de nombre, correo electrónico, asunto y descripción del problema.
   * Es utilizado para validar y enviar la solicitud de soporte.
   */
  supportForm!: FormGroup;

  /**
   * @constructor
   * @param {FormBuilder} fb - Inyecta el servicio FormBuilder para construir los formularios reactivos.
   */
  constructor(private fb: FormBuilder) {}

  /**
   * @method ngOnInit
   * @description Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
   * En este caso, se crea y configura el formulario con las validaciones necesarias.
   */
  ngOnInit(): void {
    this.supportForm = this.fb.group({
      /**
       * Campo que captura el nombre del usuario.
       * Se requiere y debe tener al menos 3 caracteres.
       */
      name: ['', [Validators.required, Validators.minLength(3)]],
      
      /**
       * Campo que captura el correo electrónico del usuario.
       * Se requiere y debe ser un correo electrónico válido.
       */
      email: ['', [Validators.required, Validators.email]],
      
      /**
       * Campo que captura el asunto de la solicitud de soporte.
       * Se requiere.
       */
      subject: ['', Validators.required],
      
      /**
       * Campo que captura una descripción detallada del problema.
       * Se requiere y debe tener al menos 10 caracteres.
       */
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * @method onSubmit
   * @description Método que se ejecuta cuando el usuario envía el formulario.
   * Si el formulario es válido, se muestra un mensaje de éxito y el formulario se reinicia.
   * Si el formulario no es válido, se marcan todos los controles como tocados para que se muestren los errores.
   */
  onSubmit(): void {
    // Verifica si el formulario es válido
    if (this.supportForm.valid) {
      console.log('Formulario enviado:', this.supportForm.value);
      alert('¡Formulario enviado con éxito!');
      this.supportForm.reset(); // Resetea el formulario después de enviarlo
    } else {
      // Marca todos los controles como tocados para mostrar los errores de validación
      Object.values(this.supportForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
