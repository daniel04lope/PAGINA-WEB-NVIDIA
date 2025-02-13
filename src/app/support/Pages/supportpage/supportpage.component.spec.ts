import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportpageComponent } from './supportpage.component';

describe('SupportpageComponent', () => {
  let component: SupportpageComponent;
  let fixture: ComponentFixture<SupportpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
