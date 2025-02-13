import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support-form',
  standalone: true, // Componente standalone.
  imports: [CommonModule, ReactiveFormsModule], // Módulos requeridos para standalone.
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {
  supportForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.supportForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.supportForm.valid) {
      console.log('Formulario enviado:', this.supportForm.value);
      alert('¡Formulario enviado con éxito!');
      this.supportForm.reset();
    } else {
      Object.values(this.supportForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
