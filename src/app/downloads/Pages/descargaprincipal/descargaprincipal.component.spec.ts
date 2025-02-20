import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaprincipalComponent } from './descargaprincipal.component';

describe('DescargaprincipalComponent', () => {
  let component: DescargaprincipalComponent;
  let fixture: ComponentFixture<DescargaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescargaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
