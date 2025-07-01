import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProblemListComponent } from '../../component/problem-list/problem-list.component';

@Component({
  selector: 'app-problem-answer',
  standalone: true,
  imports: [ProblemListComponent],
  templateUrl: './problem-answer.component.html',
  styleUrl: './problem-answer.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProblemAnswerComponent {}
