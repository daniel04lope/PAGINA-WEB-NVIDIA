import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsageComponent } from './newsage.component';

describe('NewsageComponent', () => {
  let component: NewsageComponent;
  let fixture: ComponentFixture<NewsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
