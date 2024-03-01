import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemAnswerComponent } from './problem-answer.component';

describe('ProblemAnswerComponent', () => {
  let component: ProblemAnswerComponent;
  let fixture: ComponentFixture<ProblemAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
