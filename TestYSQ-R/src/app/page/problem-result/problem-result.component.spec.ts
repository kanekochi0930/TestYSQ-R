import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemResultComponent } from './problem-result.component';

describe('ProblemResultComponent', () => {
  let component: ProblemResultComponent;
  let fixture: ComponentFixture<ProblemResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
