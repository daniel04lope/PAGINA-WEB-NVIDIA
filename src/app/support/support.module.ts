import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { SupportFormComponent } from './Components/support-form/support-form.component';



@NgModule({
  declarations: [
    
    
  ],
  imports: [
    SupportFormComponent,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
  
})
export class SupportModule { }
