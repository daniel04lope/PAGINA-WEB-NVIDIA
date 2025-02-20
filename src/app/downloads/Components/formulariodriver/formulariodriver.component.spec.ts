import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodriverComponent } from './formulariodriver.component';

describe('FormulariodriverComponent', () => {
  let component: FormulariodriverComponent;
  let fixture: ComponentFixture<FormulariodriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariodriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariodriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
