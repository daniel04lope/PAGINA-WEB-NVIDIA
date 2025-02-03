import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeauturesComponent } from './feautures.component';

describe('FeauturesComponent', () => {
  let component: FeauturesComponent;
  let fixture: ComponentFixture<FeauturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeauturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeauturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
